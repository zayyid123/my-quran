import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import SignIn from "../../pages/Sign-in";
import SignUp from "../../pages/Sign-up";
import Surah from "../../pages/Surah";


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
        path: "/profile",
        name: "PROFILE",
        component: Profile,
    },
    {
        path: "/surah",
        name: "SURAH",
        component: Surah,
    },
];

export default list