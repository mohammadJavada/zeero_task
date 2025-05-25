import { HomePage } from "~/components/pages/home";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "صفحه اصلی | مدیریت وظیفه" },
    { name: "صفحه اصلی", content: "صدیریت وظیفه" },
  ];
}

export default function Home() {
  return <HomePage />;
}
