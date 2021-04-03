import url from "./url";
import { MainLayout } from "../views/components/Layout";
import MoviesPage from "../views/pages/Movies";

const routes = [
  {
    path: url.movies,
    component: MoviesPage,
    layout: MainLayout,
    exact: true,
  },
];

export default routes;
