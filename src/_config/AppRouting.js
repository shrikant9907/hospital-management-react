import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import PageNotFound from "../pages/PageNotFound";

export const AppRouting = [
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  },

  {
    path: "*",
    element: <PageNotFound />
  },
]

// Sidebar Links
export const SidebarLinks = [
  {
    name: 'Home',
    to: '/',
    show: true
  },
  {
    name: 'About',
    to: '/about',
    show: true
  },
  {
    name: 'Components',
    to: '/',
    show: true
  },
  {
    name: 'Layouts',
    to: '/layouts',
    show: true
  },
  {
    name: 'Examples',
    to: '/examples',
    show: true
  }
]