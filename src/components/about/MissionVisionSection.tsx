'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Heart } from 'lucide-react';

export default function MissionVisionSection() {
  const t = useTranslations('mission');
  const tv = useTranslations('vision');
  const tval = useTranslations('values');

  const values = [
    { icon: Lightbulb, key: 'items.0' },
    { icon: Target, key: 'items.1' },
    { icon: Heart, key: 'items.2' },
    { icon: Eye, key: 'items.3' }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('description')}
            </p>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {tv('title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {tv('description')}
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {tval('title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl mb-6">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {tval(`${value.key}.title`)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {tval(`${value.key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
