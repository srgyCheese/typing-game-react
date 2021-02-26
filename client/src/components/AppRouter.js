import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { publicRoutes, authRoutes } from '../routes'
import { isAuthSelector } from 'store/selectors'

const AppRouter = () => {
    const isAuth = useSelector(isAuthSelector)

    return (
        <Switch>
            {
                publicRoutes.map(({path, component}) => (
                    <Route key={path} path={path} component={component} exact/>
                ))
            }
            {
                isAuth && authRoutes.map(({path, component}) => (
                    <Route key={path} path={path} component={component} exact/>
                ))
            }
            {isAuth ? <Redirect to="/test"/> : <Redirect to="/login"/>}
        </Switch>
    )
}

export default AppRouter