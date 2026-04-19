'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Globe, Package, Building2 } from 'lucide-react';

export default function StatsSection() {
  const t = useTranslations('stats');

  const stats = [
    { icon: Users, key: 'items.0' },
    { icon: Globe, key: 'items.1' },
    { icon: Package, key: 'items.2' },
    { icon: Building2, key: 'items.3' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {t(`${stat.key}.value`)}
                </div>
                <div className="text-lg text-white/90">
                  {t(`${stat.key}.label`)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
