import Favourite from "./pages/Favourite";
import {DEVICE_ROUTE, FAVOURITE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: FAVOURITE_ROUTE,
        Component: Favourite
    }

]
