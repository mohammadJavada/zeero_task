import type { Route } from "./+types/404";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "صفحه یافت نشد" },
    {
      name: "not found",
      content: "این صفحه وجود ندارد",
    },
  ];
}

export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-300 text-2xl md:text-3xl font-semibold">
          صفحه مورد نظر شما یافت نشد
        </p>
      </div>
    </main>
  );
}
