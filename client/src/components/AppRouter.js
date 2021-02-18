import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {publicRoutes} from '../routes'

const AppRouter = () => {
    return (
        <Switch>
            {publicRoutes.map(({path, component}) => (
                <Route key={path} path={path} component={component} exact/>
            ))}
            <Redirect to="/login"/>
        </Switch>
    )
}

export default AppRouter