import { HomePage } from "~/components/pages/home";

type MetaTag = { title: string } | { name: string; content: string };

export function meta({}: MetaTag) {
  return [
    { title: "صفحه اصلی | مدیریت وظیفه" },
    { name: "صفحه اصلی", content: "صدیریت وظیفه" },
  ];
}

export default function Home() {
  return <HomePage />;
}
