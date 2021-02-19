import React from 'react'
import {Spinner} from 'react-bootstrap'

function Loader(props) {
    const {size_} = props

    return (
        <Spinner animation="border" variant="primary" {...props} style={{height: size_, width: size_}}/>
    )
}

export default Loader