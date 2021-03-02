import React from 'react'
import { Navbar as Navb, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from 'store/actions/auth'
import { selectIsAuth } from 'store/selectors'

const Navbar = () => {
    const dispatch = useDispatch()

    const isAuth = useSelector(selectIsAuth)
    const logoutHandler = () => dispatch(logout())

    return (
        <Navb bg="primary" variant="dark">
            <Navb.Brand as={Link} to="/test">Typing</Navb.Brand>
            <Navb.Collapse>
                {isAuth && <Button onClick={logoutHandler} variant="danger" className="ml-auto">Выйти</Button>}
            </Navb.Collapse>
        </Navb>
    )
}

export default Navbar