import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    { id: 1, title: "E-commerce Website" },
    { id: 2, title: "Portfolio Website" },
    { id: 3, title: "Blog Application" },
  ];

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
