'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, Cloud, Brain, Layout } from 'lucide-react';

export default function ProductsSection() {
  const t = useTranslations('products');

  const products = [
    { icon: Search, key: 'items.0' },
    { icon: Cloud, key: 'items.1' },
    { icon: Brain, key: 'items.2' },
    { icon: Layout, key: 'items.3' }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {t(`${product.key}.name`)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {t(`${product.key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
