import Root from "./root";
import Index from ".";
import Shop, { loader as shopLoader } from "./Shop/Shop";
import Cart from "./Cart/Cart";
import ErrorPage from "../error-page";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    HydrateFallback: "div",
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "shop",
            element: <Shop />,
            loader: shopLoader,
          },
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
    ],
  },
];

export default routes;
