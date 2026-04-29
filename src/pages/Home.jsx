import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Recent from '../components/Recent';
import ashraf from '../assets/ashraf.png';

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const lgTextAlign = isRTL ? 'lg:text-right' : 'lg:text-left';
  const arrowHoverClass = isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden px-4 py-16 flex items-center justify-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12"
          >
            {/* Left: Text Content */}
            <div className="lg:col-span-7">
              <motion.div
                variants={itemVariants}
                className={`mb-4 text-center ${lgTextAlign}`}
              >
                <h2 className="text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-xl md:text-2xl">
                  {t('home.greeting')}
                </h2>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className={`mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-6xl lg:text-7xl ${lgTextAlign}`}
              >
                {t('home.name')}
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className={`mb-6 text-center ${lgTextAlign}`}
              >
                <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 sm:text-xl md:text-2xl lg:text-3xl">
                  {t('home.title')}
                </h3>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className={`mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl lg:mx-0 ${lgTextAlign}`}
              >
                {t('home.description')}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:justify-start"
              >
                <Link to="/projects" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`btn-primary flex w-full items-center justify-center ${isRTL ? 'flex-row-reverse gap-2' : 'gap-2'} group sm:w-auto`}
                  >
                    <span>{t('home.viewWork')}</span>
                    <ArrowRightIcon className={`h-5 w-5 transition-transform duration-200 ${arrowHoverClass}`} />
                  </motion.button>
                </Link>

                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`btn-outline flex w-full items-center justify-center ${isRTL ? 'flex-row-reverse gap-2' : 'gap-2'} group sm:w-auto`}
                  >
                    <span>{t('home.contactMe')}</span>
                    <CodeBracketIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Right: Profile Image */}
            <motion.div
              variants={itemVariants}
              className="order-first mb-2 flex justify-center lg:order-none lg:col-span-5 lg:mb-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="h-60 w-60 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 p-1 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-[27rem] lg:w-[27rem]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-800">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 text-white text-6xl font-bold">
                      <img src={ashraf} alt="Profile" className="h-full w-full rounded-full object-cover" />
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500 border-r-secondary-500"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 transform sm:bottom-5 lg:bottom-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400 dark:border-gray-600"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-2 h-3 w-1 rounded-full bg-gray-400 dark:bg-gray-600"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white/50 py-16 backdrop-blur-sm dark:bg-gray-800/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {[
              { number: '20+', label: t('home.stats.projects') },
              { number: '2+', label: t('home.stats.years') },
              { number: '20+', label: t('home.stats.clients') },
              { number: '10+', label: t('home.stats.technologies') },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="mb-2 text-3xl font-bold text-primary-600 dark:text-primary-400 md:text-4xl">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Recent />
    </div>
  );
};

export default Home;
