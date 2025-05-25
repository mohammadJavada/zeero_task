import ProjectDetail from "~/components/pages/projects/project-detail";
import ProjectsPage from "~/components/pages/projects";

type MetaTag = { title: string } | { name: string; content: string };

export function meta({}: MetaTag) {
  return [
    { title: "جزئیات پروژه" },
    { name: "پروژه", content: "پروژه های زیرو" },
  ];
}

export default function ProjectDetailPage() {
  return <ProjectDetail />;
}
