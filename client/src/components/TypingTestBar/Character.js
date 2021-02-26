import React from 'react'

const Character = ({type, children}) => {
    const current = {
        color: 'white',
        padding: '0 2px',
        borderRadius: '2px',
    }

    const characterTypes = {
        neutral: {},
        solved: {
            color: 'limegreen'
        },
        current: {
            ...current,
            backgroundColor: 'limegreen'
        },
        mistake: {
            ...current,
            backgroundColor: 'crimson'
        }
    }

    return <span style={characterTypes[type]}>{children}</span>
}

export default Character
