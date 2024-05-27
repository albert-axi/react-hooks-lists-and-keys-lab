import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectItems = projects.map(({ id, name, about, technologies }) => <ProjectItem
    key={id}
    technologies={technologies}
    name={name}
    about={about}
  />)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectItems}
      </div>
    </div>
  );
}

export default ProjectList;
