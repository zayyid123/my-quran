import Home from "../../pages/Home";
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
];

export default list