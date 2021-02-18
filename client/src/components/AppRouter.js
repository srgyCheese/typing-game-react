import React from 'react'
import {Route} from 'react-router-dom'
import {publicRoutes} from '../routes'

const AppRouter = () => {
    return (
        <Switch>
            {publicRoutes.map(({path, component}) => (
                <Route key={path} path={path} component={component} exact/>
            ))}
        </Switch>
    )
}

export default AppRouter