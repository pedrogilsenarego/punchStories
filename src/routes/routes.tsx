/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppRoute } from "./types";
import { ROUTE_PATHS } from "../constants/routes";
import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

const Home = lazyWithRetryAndLoader(() => import("../modules/Home"));
const Story = lazyWithRetryAndLoader(() => import("../modules/Story"));


export const routes: AppRoute[] = [
  {
    path: ROUTE_PATHS.HOME,
    component: (

      <Home />

    ),
  },
  {
    path: ROUTE_PATHS.STORY,
    component: (

      <Story />

    ),
  },

];
