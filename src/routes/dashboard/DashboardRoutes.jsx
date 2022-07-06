import { RouteObject } from "react-router-dom";
import { Dashboard } from "../../pages/dashboard/Dashboard";

export const DashboardRoutes: RouteObject = {
  index: true,
  path: '/',
  element: <Dashboard title="Dashboard" />,
}