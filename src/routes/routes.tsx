/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppRoute } from "./types";
import { ROUTE_PATHS } from "../constants/routes";
import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

const Home = lazyWithRetryAndLoader(() => import("../modules/Home"));
const Story = lazyWithRetryAndLoader(() => import("../modules/Story"))
const AdminManageStories = lazyWithRetryAndLoader(
  () => import("../modules/Admin/ManageStorys")
);
const AdminStoriesCreate = lazyWithRetryAndLoader(() => import("../modules/Admin/ManageStorys/SubmitStory"));
const AdminStoriesCarousel = lazyWithRetryAndLoader(() => import("../modules/Admin/ManageCarroussel"));

export const routes: AppRoute[] = [
  {
    path: ROUTE_PATHS.HOME,
    component: <MainLayout><Home /></MainLayout>,
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
  {
    path: ROUTE_PATHS.ADMIN_CARROUSEL,
    component: <AdminLayout>
      <AdminStoriesCarousel />
    </AdminLayout>,
  },
];
