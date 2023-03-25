/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppRoute } from "./types";
import { ROUTE_PATHS } from "../constants/routes";
import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

const Home = lazyWithRetryAndLoader(() => import("../modules/Home"));
const Story = lazyWithRetryAndLoader(() => import("../modules/Story/Tamplate0"));
const AdminManageStories = lazyWithRetryAndLoader(
  () => import("../modules/Admin/ManageStorys")
);
const AdminStoriesCreate = lazyWithRetryAndLoader(() => import("../modules/Admin/ManageStorys/SubmitStory"));

export const routes: AppRoute[] = [
  {
    path: ROUTE_PATHS.HOME,
    component: <Home />,
  },
  {
    path: ROUTE_PATHS.STORY,
    component: <Story />,
  },
  {
    path: ROUTE_PATHS.ADMIN,
    component: (
      <AdminLayout>
        <AdminManageStories />
      </AdminLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_STORIES_CREATE,
    component: <AdminLayout>
      <AdminStoriesCreate />
    </AdminLayout>,
  },
];
