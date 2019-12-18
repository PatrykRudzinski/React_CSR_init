import lazyPreload from 'utils/lazyPreload';

const Dashboard = lazyPreload(() => import('pages/Dashboard'));
const Login = lazyPreload(() => import('pages/Login'));
const Account = lazyPreload(() => import('pages/Account'));

const paths = {
  DASHBOARD: '/',
  LOGIN: '/login',
  ACCOUNT: '/account',
};

export default [
  {
    path: paths.DASHBOARD,
    component: Dashboard,
    exact: true,
  },
  {
    path: paths.LOGIN,
    component: Login,
    exact: true,
  },
  {
    path: paths.ACCOUNT,
    component: Account,
    isPrivate: true,
    redirectMsg: 'Log in to view that site!',
  },
];

export { paths };
