import React from 'react'
import {Navbar as Navb} from 'react-bootstrap'

const Navbar = () => {
    const {Brand} = Navb

    return (
        <Navb bg="primary" variant="dark">
            <Brand href="/test">Typing</Brand>
        </Navb>
    )
}

export default Navbar
