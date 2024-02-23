import AdminRoot from "../pages/Admin/AdminRoot";
import Alerts from "../pages/Admin/Alerts/Alerts";
import Auth from "../pages/Admin/Auth/Auth";
import Buttons from "../pages/Admin/Buttons/Buttons";
import Card from "../pages/Admin/Card/Card";
import Categories from "../pages/Admin/Categories/Categories";
import CategoryCreate from "../pages/Admin/Categories/CategoryCreate";
import Citizenships from "../pages/Admin/Citizenships/Citizenships";
import CauntriesCreate from "../pages/Admin/Countries/CauntriesCreate";
import CauntriesEdit from "../pages/Admin/Countries/CauntriesEdit";
import Countries from "../pages/Admin/Countries/Countries";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Deliveries from "../pages/Admin/Deliveries/Deliveries";
import DeliveryAreas from "../pages/Admin/DeliveryAreas/DeliveryAreas";
import EditProduct from "../pages/Admin/EditProduct/EditProduct";
import Forms from "../pages/Admin/Forms/Forms";
import Genders from "../pages/Admin/Genders/Genders";
import Homee from "../pages/Admin/Homee/Homee";
import Kargomats from "../pages/Admin/Kargomats/Kargomats";
import Notifications from "../pages/Admin/Notifications/Notifications";
import Orders from "../pages/Admin/Orders/Orders";
import Shops from "../pages/Admin/Shops/Shops";
import Statuses from "../pages/Admin/Statuses/Statuses";
import Transactions from "../pages/Admin/Transactions/Transactions";
import Typography from "../pages/Admin/Typography/Typography";
import UserPositions from "../pages/Admin/UserPositions/UserPositions";
import UserPositionsCreate from "../pages/Admin/UserPositions/UserPositionsCreate";
import Warehouses from "../pages/Admin/Warehouses/Warehouses";
import AZNbalans from "../pages/Site/AZNbalans";
import Baglamamharadadır from "../pages/Site/Baglamamharadadır/Baglamamharadadır";
import Bağlamamlar from "../pages/Site/Bağlamamlar";
import Bildirişlər from "../pages/Site/Bildirişlər";
import Detail from "../pages/Site/Detail/Detail";
import Gmail from "../pages/Site/Gmail/Gmail";
import Hesabdançıx from "../pages/Site/Hesabdançıx";
import Home from "../pages/Site/Home/Home";
import KALKULYATOR from "../pages/Site/KALKULYATOR/KALKULYATOR";
import KARGOMAT from "../pages/Site/KARGOMAT/KARGOMAT";
import Kargomat from "../pages/Site/Kargomat";
import Kuryer from "../pages/Site/Kuryer";
import MAGAZALAR from "../pages/Site/MAGAZALAR/MAGAZALAR";
import Qediyyat from "../pages/Site/Qediyyat";
import Sifariset from "../pages/Site/Sifariset/Sifariset";
import Sifarişlər from "../pages/Site/Sifarişlər";
import SiteRoot from "../pages/Site/SiteRoot";
import Sorğu from "../pages/Site/Sorğu";
import TARIFLER from "../pages/Site/TARIFLER/TARIFLER";
import TRYbalans from "../pages/Site/TRYbalans";
import Tənzimləmələr from "../pages/Site/Tənzimləmələr";
import User from "../pages/Site/User/User";
import UserKargomatt from "../pages/Site/UserKargomatt/UserKargomatt";
import Xaricdəkiünvanlar from "../pages/Site/Xaricdəkiünvanlar";
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
    }, {
        path: "UserKargomatt",
        element: <UserKargomatt />
    }
        , {
        path: "Sifariset",
        element: <Sifariset />
    }, {
        path: "User",
        element: <User />
    }, {
        path: "Bildirişlər",
        element: <Bildirişlər />
    }, {
        path: "Sifarişlər",
        element: <Sifarişlər />
    }, {
        path: "Bağlamalar",
        element: <Bağlamamlar />

    }, {
        path: "Xaricdəkiünvanlar",
        element: <Xaricdəkiünvanlar />
    }, {
        path: "Kuryer",
        element: <Kuryer />
    }, {
        path: "Kargomat",
        element: <Kargomat />
    }, {
        path: "Sorğu",
        element: <Sorğu />
    }, {
        path: "TRYbalans",
        element: <TRYbalans />
    }, {
        path: "AZNbalans",
        element: <AZNbalans />
    }, {
        path: "Qediyyat",
        element: <Qediyyat />
    },

    {
        path: "Tənzimləmələr",
        element: <Tənzimləmələr />

    }, {
        path: "Hesabdançıx",
        element: <Hesabdançıx />
    }, {
        path: "/ConfirmEmail",
        element: <Gmail />
    }
        , {
        path: 'xeberler/:id',
        element: <Detail />
    }]
}, {
    path: "/Admin",
    element: <AdminRoot />,
    children: [{
        path: "EditProduct",
        element: <EditProduct />
    }, {
        path: "Homee",
        element: <Homee />
    }, {
        path: "Alerts",
        element: <Alerts />
    }, {
        path: "Buttons",
        element: <Buttons />
    }, {
        path: "Card",
        element: <Card />
    }, {
        path: "Dashboard",
        element: <Dashboard />
    }, {
        path: "Forms",
        element: <Forms />

    }, {
        path: "Typography",
        element: <Typography />
    }, {
        path: "Auth",
        element: <Auth />
    }, {
        path: "Categories",
        element: <Categories />
    }, {
        path: "Categories/Create",
        element: <CategoryCreate />
    },


    {
        path: "Citizenships",
        element: <Citizenships />
    }, {
        path: "Countries",
        element: <Countries />
    }, {
        path: "Countries/create",
        element: <CauntriesCreate />

    }, {
        path: "Countries/update/:id",
        element: <CauntriesEdit />

    }, {
        path: "Deliveries",
        element: <Deliveries />
    }, {
        path: "DeliveryAreas",
        element: <DeliveryAreas />
    }, {
        path: "Genders",
        element: <Genders />
    }, {
        path: "Kargomats",
        element: <Kargomats />
    }, {
        path: "Notifications",
        element: <Notifications />
    }, {
        path: "Orders",
        element: <Orders />
    }, {
        path: "Shops",
        element: <Shops />
    }, {
        path: "Statuses",
        element: <Statuses />
    }, {
        path: "Transactions",
        element: <Transactions />
    }, {
        path: "UserPositions",
        element: <UserPositions />
    }, {
        path: "UserPositions/create",
        element: <UserPositionsCreate />
    },

    {
        path: "Warehouses",
        element: <Warehouses />
    }]
}]

export default ROUTER