import AdminRoot from "../pages/Admin/AdminRoot";
import EditProduct from "../pages/Admin/EditProduct/EditProduct";
import Baglamamharadadır from "../pages/Site/Baglamamharadadır/Baglamamharadadır";
import Home from "../pages/Site/Home/Home";
import KALKULYATOR from "../pages/Site/KALKULYATOR/KALKULYATOR";
import KARGOMAT from "../pages/Site/KARGOMAT/KARGOMAT";
import MAGAZALAR from "../pages/Site/MAGAZALAR/MAGAZALAR";
import Sifariset from "../pages/Site/Sifariset/Sifariset";
import SiteRoot from "../pages/Site/SiteRoot";
import TARIFLER from "../pages/Site/TARIFLER/TARIFLER";
import XƏBƏRLER from "../pages/Site/XƏBƏRLƏR/XƏBƏRLER";
import ƏLAQƏ from "../pages/Site/ƏLAQƏ/ƏLAQƏ"

const ROUTER = [{
    path: "/",
    element: <SiteRoot />,
    children: [{
        path: "",
        element: <Home />
    }, {
        path: "TARIFLER",
        element: <TARIFLER />

    }, {
        path: "KALKULYATOR",
        element: <KALKULYATOR />

    }, {
        path: "MAGAZALAR",
        element: <MAGAZALAR />
    }, {
        path: "XƏBƏRLƏR",
        element: <XƏBƏRLER />
    }, {
        path: "ƏLAQƏ",
        element: <ƏLAQƏ />
    }, {
        path: "KARGOMAT",
        element: <KARGOMAT />
    }, {
        path: "Baglamamharadadır",
        element: <Baglamamharadadır />
    },{
        path:"Sifariset",
        element:<Sifariset/>
    }]
}, {
    path: "/Admin",
    element: <AdminRoot />,
    children: [{
        path: "",
        element: <EditProduct />
    }]
}]

export default ROUTER