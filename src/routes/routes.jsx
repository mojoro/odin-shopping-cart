import Root from "./root";
import Index from ".";
import Shop from "./Shop";
import Cart from "./Cart";
import ErrorPage from "../error-page";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "shop",
            element: <Shop />,
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
