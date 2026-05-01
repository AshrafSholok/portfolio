import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  CalendarIcon,
  UserIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import { getProjectById } from '../data/projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const project = getProjectById(id);
  const hasLiveUrl = Boolean(project?.liveUrl?.trim());
  const hasGithubUrl = Boolean(project?.githubUrl?.trim());

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  useEffect(() => {
    // Reset image index when project changes
    setCurrentImageIndex(0);
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20">
      {/* Header */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 mb-8"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span>{t('projects.backToProjects')}</span>
              </motion.button>
            </Link>

            {/* Project Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Project Info */}
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                    {project.category === 'freelance' ? t('projects.freelance') : 
                     project.category === 'personal' ? t('projects.personal') : 
                     t('projects.openSource')}
                  </span>
                  {project.featured && (
                    <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">{t('projects.featured')}</span>
                    </div>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h1>

                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                  {project.client && (
                    <div className="flex items-center space-x-2">
                      <UserIcon className="w-4 h-4" />
                      <span>{project.client}</span>
                    </div>
                  )}
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {project.longDescription}
                </p>

                {/* Action Buttons */}
                {(hasLiveUrl || hasGithubUrl) && (
                  <div className="flex  sm:flex-row gap-4 mb-8">
                    {hasLiveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center  gap-2"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        <span>{t('projects.live')}</span>
                      </motion.a>
                    )}

                    {hasGithubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-outline flex items-center space-x-2 gap-1"
                      >
                        <CodeBracketIcon className="w-5 h-5" />
                        <span>{t('projects.viewCode')}</span>
                      </motion.a>
                    )}
                  </div>
                )}
              </div>

              {/* Project Image */}
              <div className="relative order-first lg:order-none md:order-first">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Screenshots Gallery */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {t('projects.screenshotsTitle')}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => openImageModal(index)}
                        className="relative cursor-pointer group"
                      >
                        <img
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                          <EyeIcon className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="card p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t('projects.challenges')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.challenges}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="card p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {t('projects.results')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.results}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="card p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {t('projects.techStack')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Project Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="card p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {t('projects.projectInfo')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-400">{t('projects.year')}: {project.year}</span>
                    </div>
                    {project.client && (
                      <div className="flex items-center gap-3">
                        <UserIcon className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400">{t('projects.client')}: {project.client}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <CodeBracketIcon className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-400">{t('projects.category')}: {project.category}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.screenshots[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Navigation */}
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <ChevronLeftIcon className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <ChevronRightIcon className="w-6 h-6" />
                  </button>
                </>
              )}
              
              {/* Close Button */}
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                {currentImageIndex + 1} / {project.screenshots.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;
