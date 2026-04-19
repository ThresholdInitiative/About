'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const t = useTranslations('team');

  const members = [
    { key: 'members.0' },
    { key: 'members.1' },
    { key: 'members.2' }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">
                  {t(`${member.key}.name`).charAt(0)}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t(`${member.key}.name`)}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                {t(`${member.key}.role`)}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t(`${member.key}.bio`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
