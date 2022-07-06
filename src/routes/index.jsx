import { useRoutes } from "react-router-dom";
import { Main } from "@/pages/Main";
import Auth from "./guards/Auth";
import LeadsRoutes from './leads/LeadsRoutes'
import { DashboardRoutes } from "./dashboard/DashboardRoutes";
import { CampaignRoutes } from "./campaign/CampaignRoutes";

export default function AppRoutes () {
  let routes = useRoutes([
    {
      element: <Auth><Main /></Auth>,
      children: [
        DashboardRoutes,
        LeadsRoutes,
        CampaignRoutes,
      ]
    },
    {
      path: 'login',
      element: <h1> Login </h1>
    }
  ]);

  return routes;
}