import Login from "pages/Login"
import GoogleAuthCallback from 'pages/GoogleAuthCallback'
import StartTypingTest from 'pages/StartTypeTest'
import TypingTest from 'pages/TypingTest'

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
        component: StartTypingTest
    },
    {
        path: '/test/start',
        component: TypingTest
    }
]