'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${currentPath}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Switch language"
        aria-expanded={isOpen}
        aria-controls="language-menu"
      >
        <Globe className="w-5 h-5" />
        <span className="font-medium">{locale === 'en' ? 'EN' : '中文'}</span>
      </button>

      {isOpen && (
        <div
          id="language-menu"
          role="menu"
          aria-label="Language selection"
          className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden z-50"
        >
          <button
            onClick={() => switchLocale('en')}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
              locale === 'en' ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''
            }`}
            role="menuitem"
          >
            English
          </button>
          <button
            onClick={() => switchLocale('zh')}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
              locale === 'zh' ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''
            }`}
            role="menuitem"
          >
            中文
          </button>
        </div>
      )}
    </div>
  );
}
