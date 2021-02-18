import Login from "./components/Login"
import Register from "./components/Register"

export const authRoutes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
]