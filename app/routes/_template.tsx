import { Outlet } from "react-router";
import { Footer } from "~/components/template/footer";
import { Header } from "~/components/template/header";

export default function Template() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
