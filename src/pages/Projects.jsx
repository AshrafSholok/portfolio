import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  EyeIcon, 
  CodeBracketIcon, 
  ArrowTopRightOnSquareIcon,
  TagIcon,
  CalendarIcon,
  UserIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { projects, projectCategories, getProjectsByCategory } from '../data/projectsData';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [activeCategory, setActiveCategory] = useState('all');

  // Create categories with translations
  const categories = projectCategories.map(category => ({
    ...category,
    label: category.key === 'all' ? t('projects.all') : t(`projects.${category.key}`)
  }));

  // Get filtered projects and sort by year/date descending (newest first).
  const filteredProjects = getProjectsByCategory(activeCategory)
    .slice() // avoid mutating source
    .sort((a, b) => {
      const toTime = (val) => {
        if (val === undefined || val === null) return 0;
        // If it's a number (e.g., 2023) keep as year; new Date handles numbers/strings/dates.
        const t = new Date(val).getTime();
        return Number.isNaN(t) ? 0 : t;
      };
      return toTime(b.year) - toTime(a.year);
    });
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20">
      {/* Hero Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('projects.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t('projects.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.key
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card overflow-hidden group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        title={t('projects.live')}
                      >
                        <EyeIcon className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        title={t('projects.source')}
                      >
                        <CodeBracketIcon className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Header with Category and Featured Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                        {project.category === 'freelance' ? t('projects.freelance') : 
                         project.category === 'personal' ? t('projects.personal') : 
                         t('projects.openSource')}
                      </span>
                      {project.featured && (
                        <div className="flex items-center gap-1 text-yellow-500">
                          <StarIcon className="w-4 h-4" />
                          <span className="text-xs font-medium">{t('projects.featured')}</span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Project Meta */}
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                      {project.client && (
                        <div className="flex items-center gap-1">
                          <UserIcon className="w-4 h-4" />
                          <span>{project.client}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Link to={`/projects/${project.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 gap-1`}
                        >
                          <EyeIcon className="w-4 h-4" />
                          <span>{t('projects.viewDetails')}</span>
                        </motion.button>
                      </Link>
                      
                      <div className={`flex gap-2`}>
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-1 text-sm`}
                        >
                          <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                          <span>{t('projects.live')}</span>
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-1 text-sm`}
                        >
                          <CodeBracketIcon className="w-4 h-4" />
                          <span>{t('projects.code')}</span>
                        </motion.a>
                      </div>
                    </div>
                   </div>
                 </motion.div>
               ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('projects.ctaTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('projects.ctaText')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              {t('projects.ctaButton')}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
