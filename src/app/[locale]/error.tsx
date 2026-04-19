'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="text-center px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 dark:bg-red-900 rounded-full mb-6">
            <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {locale === 'en' ? 'Something went wrong!' : '出错了！'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {locale === 'en'
              ? 'We apologize for the inconvenience. An unexpected error has occurred.'
              : '我们为给您带来的不便表示歉意。发生了意外错误。'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 border border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {locale === 'en' ? 'Error details:' : '错误详情：'}
          </p>
          <p className="text-sm font-mono text-red-600 dark:text-red-400 break-all">
            {error.message}
          </p>
          {error.digest && (
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              {locale === 'en' ? 'Error ID:' : '错误ID：'} {error.digest}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={reset}
            className="group px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <RefreshCw className="w-5 h-5" />
            {locale === 'en' ? 'Try Again' : '重试'}
          </button>
          <Link
            href={`/${locale}`}
            className="group px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
          >
            <Home className="w-5 h-5" />
            {locale === 'en' ? 'Go Home' : '返回首页'}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-gray-500 dark:text-gray-400"
        >
          <p className="text-sm">
            {locale === 'en'
              ? 'If the problem persists, please contact our support team.'
              : '如果问题仍然存在，请联系我们的支持团队。'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
