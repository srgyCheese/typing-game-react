import React from 'react'
import { Navbar as Navb, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { isAuthSelector } from 'store/selectors'

const Navbar = () => {
    const isAuth = useSelector(isAuthSelector)

    return (
        <Navb bg="primary" variant="dark">
            <Navb.Brand href="/test">Typing</Navb.Brand>
            <Navb.Collapse>
                {isAuth && <Button variant="danger" className="ml-auto">Выйти</Button>}
            </Navb.Collapse>
        </Navb>
    )
}

export default Navbar