import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { initTyping } from 'store/actions/typing'
import { typingSelector } from 'store/selectors'
import { isTypingEndedSelector } from 'store/selectors'

const TypingIndications = () => {
    const {speed} = useSelector(typingSelector)
    const isEnded = useSelector(isTypingEndedSelector)
    const dispatch = useDispatch()

    const startNewGame = () => {
        dispatch(initTyping())
    }

    return (
        <div>
            Скорость: <span>{speed.toFixed(1)} зн/мин</span>
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