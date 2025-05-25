import { Outlet } from "react-router";
import { Footer } from "~/components/template/footer";
import { Header } from "~/components/template/header";
import { Sidebar } from "~/components/template/sidebar";

export default function Template() {
  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col "
      style={{ direction: "rtl" }}
    >
      <Header />

      <div className="flex flex-row-reverse">
        <main className="flex-grow mx-auto py-6 sm:px-6 lg:px-8 w-full">
          <Outlet />
        </main>
        <Sidebar />
      </div>

      <Footer />
    </div>
  );
}
