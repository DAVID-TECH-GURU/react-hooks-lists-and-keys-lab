import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList(props) {
  const { projects } = props;

  return (
    <div>
      {projects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
