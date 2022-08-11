import DashboardPage from "../pages/DashboardPage";
import DoctorsPage from "../pages/DoctorsPage";
import LoginPage from "../pages/LoginPage";
import OTPVerificationPage from "../pages/OTPVerificationPage";
import PageNotFound from "../pages/PageNotFound";
import PatientsPage from "../pages/PatientsPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import SettingsPage from "../pages/SettingsPage";
import SignupPage from "../pages/SignupPage";
import TermsAndConditionsPage from "../pages/TermsAndConditionsPage";
import UserProfilePage from "../pages/UserProfilePage";
import UsersPage from "../pages/UsersPage";

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
    path: "/doctors",
    element: <DoctorsPage />
  },
  {
    path: "/patients",
    element: <PatientsPage />
  },
  {
    path: "/users",
    element: <UsersPage />
  },
  {
    path: "/profile",
    element: <UserProfilePage />
  },
  {
    path: "/settings",
    element: <SettingsPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/otp-verification",
    element: <OTPVerificationPage />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage />
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditionsPage />
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