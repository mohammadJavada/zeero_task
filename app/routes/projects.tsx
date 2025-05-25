import ProjectsPage from "~/components/pages/projects";
type MetaTag = { title: string } | { name: string; content: string };

export function meta({}: MetaTag) {
  return [
    { title: "پروژه ها" },
    { name: "پروژه ها", content: "پروژه های زیرو" },
  ];
}

export default function Projects() {
  return <ProjectsPage />;
}
