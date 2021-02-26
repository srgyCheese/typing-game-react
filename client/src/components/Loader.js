import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loader = props => {
    const {size} = props

    return (
        <Spinner animation="border" variant="primary" {...props} style={{height: size, width: size}}/>
    )
}

export default Loader