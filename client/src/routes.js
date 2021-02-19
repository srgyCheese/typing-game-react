import Login from "pages/Login"
import GoogleAuthCallback from 'pages/GoogleAuthCallback'
import TypeTest from 'pages/TypeTest'

export const publicRoutes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/auth/google/callback',
        component: GoogleAuthCallback
    }
]

export const authRoutes = [
    {
        path: '/test',
        component: TypeTest
    }
]