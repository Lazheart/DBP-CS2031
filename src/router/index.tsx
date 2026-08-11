import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import CommingSoonPage from "../pages/CommingSoonPage";
import GitPage from "../pages/tools/GitPage";
import DockerPage from "../pages/tools/DockerPage";
import PostmanPage from "../pages/tools/PostmanPage";
import ToolsPage from "../pages/tools/ToolsPage";
import BackendPage from "../pages/backend/BackendPage";
import FrontendHomePage from "../pages/frontend/FrontendHomePage";
import WorkflowDeployPage from "../pages/workflows/WorkflowDeployPage";
import IntroductionPage from "../pages/IntroductionPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/homepage",
      element: <HomePage />,
    },
    {
      path: "/introduction",
      element: <IntroductionPage />,
    },
    {
      path: "/tools",
      element: <ToolsPage />,
    },
    {
      path: "/tools/github",
      element: <GitPage />,
    },
    {
      path: "/backend",
      element: <BackendPage />,
    },
    {
      path: "/frontend",
      element: <FrontendHomePage />,
    },
    {
      path: "/workflows",
      element: <WorkflowDeployPage />,
    },

    {
      path: "/tools/git",
      element: <GitPage />,
    },
    {
      path: "/tools/docker",
      element: <DockerPage />,
    },
    {
      path: "/tools/postman",
      element: <PostmanPage />,
    },
    {
      path: "/git",
      element: <GitPage />,
    },
    {
      path: "/tools/git/",
      element: <GitPage />,
    },
    {
      path: "/comming-soon",
      element: <CommingSoonPage />,
    },
    {
      path: "/frontend/*",
      element: <CommingSoonPage />,
    },
    {
      path: "/not-found",
      element: <NotFoundPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
  {
    basename: "/DBP-CS2031",
  },
);

export default router;
