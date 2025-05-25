import { static_data } from "~/data/static";

const ProjectsPage = () => {
  return (
    <div className="text-right grid grid-cols-12 gap-2">
      {static_data.pages.projects.simple_projects.map((project, i) => (
        <div className="col-span-4" key={project.id}>
          <div>{project.name}</div>
          <div>{project.updated_at}</div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
