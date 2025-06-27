import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import SingleProjectContext from '../context/SingleProjectContext';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import { motion } from 'framer-motion';

const ProjectSingle = () => {
  const { id } = useParams();
  const { singleProjectData } = useContext(SingleProjectContext);
  const project = singleProjectData.find(p => String(p.id) === id);

  if (!project) {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh]">
		<span className="text-2xl font-light text-red-600 glowing-text">
		  Project Details Not Found
		</span>
	  </div>
	);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <ProjectHeader project={project} />
      <ProjectGallery project={project} />
      <ProjectInfo project={project} />
    </motion.div>
  );
};

export default ProjectSingle;