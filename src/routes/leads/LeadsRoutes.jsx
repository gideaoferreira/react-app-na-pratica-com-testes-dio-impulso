import { RouteObject } from "react-router-dom";
import { Leads } from "@/pages/leads/Leads";

const LeadsRoutes: RouteObject = {
  path: 'leads',
  element: <Leads title="Leads"/>,
}

export default LeadsRoutes;