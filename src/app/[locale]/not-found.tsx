'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {locale === 'en' ? 'Page Not Found' : '页面未找到'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            {locale === 'en'
              ? 'Sorry, we couldn\'t find the page you\'re looking for.'
              : '抱歉，我们找不到您要访问的页面。'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href={`/${locale}`}
            className="group px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            {locale === 'en' ? 'Go Home' : '返回首页'}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
          >
            <ArrowLeft className="w-5 h-5" />
            {locale === 'en' ? 'Go Back' : '返回'}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-gray-500 dark:text-gray-400"
        >
          <p className="text-sm">
            {locale === 'en'
              ? 'Or try searching for what you\'re looking for:'
              : '或者尝试搜索您要找的内容：'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
