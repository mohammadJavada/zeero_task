import type { Route } from "./+types/home";
import ProjectsPage from "~/components/pages/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "پروژه ها" },
    { name: "پروژه ها", content: "پروژه های زیرو" },
  ];
}

export default function Home() {
  return <ProjectsPage />;
}
