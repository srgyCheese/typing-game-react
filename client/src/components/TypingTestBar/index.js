import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { tryAddLetter } from 'store/actions/typing'
import TypingText from './TypingText'
import TypingIndications from './TypingIndications'
import { isTypingStartedSelector } from 'store/selectors/index';

const TypingTestBar = () => {
    const dispatch = useDispatch()
    const isStarted = useSelector(isTypingStartedSelector)

    const keyDownHandler = e => dispatch(tryAddLetter(e.key))

    useEffect(() => {
        window.addEventListener('keydown', keyDownHandler)

        return () => window.removeEventListener('keydown', keyDownHandler)
    }, [])

    return (
        <div className="row d-flex justify-content-center mt-3" style={{fontSize: '20px'}}>
            <Card className="col-md-10">
                {isStarted && (
                    <Card.Body className="row">
                        <div className="col-md-8">
                            <TypingText />
                        </div>
                        <div className="col-md-4">
                            <TypingIndications />
                        </div>
                    </Card.Body>
                )}
            </Card>
        </div>
    )
}

export default TypingTestBar