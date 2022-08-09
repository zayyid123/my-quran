import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Quran from "../../pages/Quran";
import SignIn from "../../pages/Sign-in";
import SignUp from "../../pages/Sign-up";


const list = [
    {
        path: "/",
        name: "HOME",
        component: Home,
    },
    {
        path: "/sign-up",
        name: "SIGN UP",
        component: SignUp,
    },
    {
        path: "/sign-in",
        name: "SIGN IN",
        component: SignIn,
    },
    {
        path: "/quran",
        name: "QURAN",
        component: Quran,
    },
    {
        path: "/profile",
        name: "PROFILE",
        component: Profile,
    },
];

export default list