import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Recent from '../components/Recent';

const Home = () => {
  const { t } = useTranslation();

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
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
            className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12"
          >
            {/* Left: Text Content */}
            <div className="lg:col-span-7">
              {/* Greeting */}
              <motion.div
                variants={itemVariants}
                className="mb-4 text-center lg:text-left"
              >
                <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                  {t('home.greeting')}
                </h2>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 text-center lg:text-left"
              >
                {t('home.name')}
              </motion.h1>

              {/* Title */}
              <motion.div
                variants={itemVariants}
                className="mb-6 text-center lg:text-left"
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl text-primary-600 dark:text-primary-400 font-semibold">
                  {t('home.title')}
                </h3>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left"
              >
                {t('home.description')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center space-x-2 group"
                  >
                    <span>{t('home.viewWork')}</span>
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>
                </Link>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline flex items-center space-x-2 group"
                  >
                    <span>{t('home.contactMe')}</span>
                    <CodeBracketIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Right: Profile Image */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 order-first lg:order-none mb-8 lg:mb-0 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-64 md:h-64 lg:w-[27rem] lg:h-[27rem] rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center text-white text-6xl font-bold">
                      <img src='../../src/assets/ashraf.png' alt="Profile" className="w-full h-full object-cover rounded-full" />
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

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '20+', label: 'Happy Clients' },
              { number: '10+', label: 'Technologies' },
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
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
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
