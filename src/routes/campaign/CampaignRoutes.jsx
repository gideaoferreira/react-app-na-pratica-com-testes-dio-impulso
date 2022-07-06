import { Campaign } from "@/pages/campaign/Campaign";
import { List } from "@/pages/campaign/list/List";
import { RouteObject } from "react-router-dom";


export const CampaignRoutes: RouteObject = {
  path: 'campaign',
  element: <Campaign />,
  children: [
    { path: '/campaign', index: true, element: <List title="Lista de campanhas"/>},
    { path: 'details', element: <h5> Página de detalhes para ser implementada </h5>}
  ]
}