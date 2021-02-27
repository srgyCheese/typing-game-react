import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { initTyping } from 'store/actions/typing'
import { selectIsTypingEnded, selectTyping } from 'store/selectors'

const TypingIndications = () => {
    const {speed, accuracy} = useSelector(selectTyping)
    const isEnded = useSelector(selectIsTypingEnded)
    const dispatch = useDispatch()

    const startNewGame = () => {
        dispatch(initTyping())
    }

    return (
        <div>
            <div>Скорость: {speed} зн/мин</div>
            <div>Точность: {accuracy}%</div>
            {
                isEnded 
                &&
                <Button className="mt-2" onClick={startNewGame} variant="outline-primary">
                    Начать заного
                </Button>
            }
        </div>
    )
}

export default TypingIndications