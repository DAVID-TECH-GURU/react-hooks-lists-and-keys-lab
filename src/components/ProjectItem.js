import React from 'react';

function ProjectItem(props) {
  const { title, description, image, url, technologies } = props;

  return (
    <div className="project-item">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>
            <span>{technology}</span>
          </li>
        ))}
      </ul>
      <a href={url}>View Project</a>
    </div>
  );
}

export default ProjectItem;
