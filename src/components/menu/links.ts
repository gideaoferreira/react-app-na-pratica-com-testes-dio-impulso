export type LinkType = {
  text: string;
  path: string;
  iconType: string;
  icon: string;
}

export const links: Array<LinkType> = [
  {
    text: 'Dashboard',
    path: '/',
    iconType: 'fas',
    icon: 'fa-chart-bar'
  },
  {
    text: 'Leads',
    path: 'leads',
    iconType: 'fas',
    icon: 'fa-users'
  },
  {
    text: 'Campanhas',
    path: 'campaign',
    iconType: 'fas',
    icon: 'fa-calendar-alt'
  },
  {
    text: 'Descadastramento',
    path: 'unsubscribe',
    iconType: 'fas',
    icon: 'fa-heart-broken'
  },
  {
    text: 'Configurações',
    path: 'setting',
    iconType: 'fas',
    icon: 'fa-cog'
  }
]