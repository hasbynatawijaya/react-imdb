import url from "./url";
import { MainLayout } from "../views/components/Layout";
import { MoviesPage, MovieDetailsPage } from "../views/pages";

const routes = [
  {
    path: url.movies,
    component: MoviesPage,
    layout: MainLayout,
    exact: true,
  },
  {
    path: url.movieDetails,
    component: MovieDetailsPage,
    layout: MainLayout,
    exact: true,
  },
];

export default routes;
