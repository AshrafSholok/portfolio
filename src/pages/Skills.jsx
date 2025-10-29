import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  CloudIcon, 
  WrenchScrewdriverIcon 
} from '@heroicons/react/24/outline';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: CodeBracketIcon,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      skills: [
        { name: 'React', level: 95, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' },
        { name: 'Vue.js', level: 80, color: 'bg-green-500' },
        { name: 'Next.js', level: 85, color: 'bg-gray-800' },
        { name: 'SASS/SCSS', level: 88, color: 'bg-pink-500' },
      ]
    },
    {
      title: t('skills.backend'),
      icon: CpuChipIcon,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      skills: [
        { name: 'Node.js', level: 90, color: 'bg-green-600' },
        { name: 'Express.js', level: 88, color: 'bg-gray-600' },
        { name: 'Python', level: 85, color: 'bg-yellow-600' },
        { name: 'Django', level: 80, color: 'bg-green-700' },
        { name: 'PostgreSQL', level: 85, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 82, color: 'bg-green-500' },
        { name: 'REST APIs', level: 90, color: 'bg-purple-500' },
        { name: 'GraphQL', level: 75, color: 'bg-pink-600' },
      ]
    },
    {
      title: t('skills.devops'),
      icon: CloudIcon,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
      skills: [
        { name: 'Docker', level: 85, color: 'bg-blue-500' },
        { name: 'Kubernetes', level: 80, color: 'bg-blue-600' },
        { name: 'AWS', level: 82, color: 'bg-orange-500' },
        { name: 'Azure', level: 75, color: 'bg-blue-700' },
        { name: 'CI/CD', level: 88, color: 'bg-green-500' },
        { name: 'Linux', level: 85, color: 'bg-yellow-600' },
        { name: 'Nginx', level: 80, color: 'bg-green-600' },
        { name: 'Jenkins', level: 78, color: 'bg-red-500' },
      ]
    },
    {
      title: t('skills.tools'),
      icon: WrenchScrewdriverIcon,
      color: 'text-orange-500',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
      skills: [
        { name: 'Git', level: 90, color: 'bg-orange-600' },
        { name: 'VS Code', level: 95, color: 'bg-blue-500' },
        { name: 'Figma', level: 85, color: 'bg-purple-500' },
        { name: 'Postman', level: 88, color: 'bg-orange-500' },
        { name: 'Jira', level: 85, color: 'bg-blue-600' },
        { name: 'Slack', level: 90, color: 'bg-green-500' },
        { name: 'Trello', level: 80, color: 'bg-blue-500' },
        { name: 'Notion', level: 85, color: 'bg-gray-600' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t('skills.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t('skills.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card p-8"
              >
                {/* Category Header */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                  className="flex items-center space-x-4 mb-8"
                >
                  <div className={`p-4 rounded-xl ${category.bgColor}`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.1), 
                        duration: 0.6 
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3, 
                            duration: 1,
                            ease: 'easeOut'
                          }}
                          className={`h-2 rounded-full ${skill.color} transition-all duration-300`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Additional Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Beyond technical skills, I bring valuable soft skills and methodologies to every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Agile Methodology',
                description: 'Experienced in Scrum, Kanban, and other agile frameworks for efficient project management.',
                icon: '🔄',
              },
              {
                title: 'Team Leadership',
                description: 'Led development teams and mentored junior developers in best practices.',
                icon: '👥',
              },
              {
                title: 'Problem Solving',
                description: 'Strong analytical skills and creative approach to complex technical challenges.',
                icon: '🧩',
              },
              {
                title: 'Communication',
                description: 'Excellent communication skills for client interaction and technical documentation.',
                icon: '💬',
              },
              {
                title: 'Continuous Learning',
                description: 'Passionate about staying updated with latest technologies and industry trends.',
                icon: '📚',
              },
              {
                title: 'Code Review',
                description: 'Experienced in conducting thorough code reviews and maintaining code quality.',
                icon: '🔍',
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 text-center group"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to leverage these skills?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how my expertise can help bring your project to life
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start a Conversation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
