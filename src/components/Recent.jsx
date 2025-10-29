import React from 'react'
import { projects } from '../data/projectsData'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { EyeIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon, CalendarIcon, UserIcon, StarIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
function Recent() {
  const { t } = useTranslation();

  return (
    <>
    <section className="section-padding">
      <div className="mb-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {t('projects.recent')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg">
          {t('projects.subtitle')}
        </p>
      </div>
      <div className="container-custom">
        <AnimatePresence mode="wait">
          <motion.div
            key="recent-projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
          {projects.slice(0, 3).map((project, index) => (
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
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    title="Live Demo"
                  >
                    <EyeIcon className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    title="Source Code"
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
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <StarIcon className="w-4 h-4" />
                      <span className="text-xs font-medium">Featured</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>

                {/* Project Meta */}
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                  {project.client && (
                    <div className="flex items-center space-x-1">
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
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <EyeIcon className="w-4 h-4" />
                      <span>{t('projects.viewDetails')}</span>
                    </motion.button>
                  </Link>
                  
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-1 text-sm"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      <span>Live</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-1 text-sm"
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      <span>Code</span>
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
</>)
}

export default Recent;