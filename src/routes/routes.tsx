/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppRoute } from "./types";
import { ROUTE_PATHS } from "../constants/routes";
import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import WithAdminAuth from "../hoc/withAdminAuth";

const Home = lazyWithRetryAndLoader(() => import("../modules/Home"));
const Story = lazyWithRetryAndLoader(() => import("../modules/Story"));
const AdminManageStories = lazyWithRetryAndLoader(
  () => import("../modules/Admin/ManageStorys")
);
const AdminStoriesCreate = lazyWithRetryAndLoader(
  () => import("../modules/Admin/ManageStorys/SubmitStory")
);

const Login = lazyWithRetryAndLoader(
  () => import("../modules/Login")
);

export const routes: AppRoute[] = [
  {
    path: ROUTE_PATHS.HOME,
    component: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.LOGIN,
    component: <Login />,
  },
  {
    path: ROUTE_PATHS.STORY,
    component: <Story />,
  },
  {
    path: ROUTE_PATHS.ADMIN,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <AdminManageStories />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },
  {
    path: ROUTE_PATHS.ADMIN_STORIES_CREATE,
    component: (
      <WithAdminAuth>
        <AdminLayout>
          <AdminStoriesCreate />
        </AdminLayout>
      </WithAdminAuth>
    ),
  },

];
