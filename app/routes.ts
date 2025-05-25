import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  {
    path: "/",
    file: "routes/_template.tsx",
    children: [
      index("routes/home.tsx"),
      {
        path: "/projects",
        file: "routes/projects.tsx",
      },
      {
        path: "/projects/:projectId",
        file: "routes/project-detail.tsx",
      },
      {
        path: "*",
        file: "routes/404.tsx",
      },
    ],
  },
] satisfies RouteConfig;
