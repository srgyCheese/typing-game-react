import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { typingSelector } from 'store/selectors'

const TypingIndications = () => {
    const [speed, setSpeed] = useState(0)
    const typing = useSelector(typingSelector)

    useEffect(() => {
        const speedInterval = setInterval(() => {
            setSpeed( typing.currentLetter / ((new Date() - typing.startTime) / 60_000) )
        }, 100)

        return () => clearInterval(speedInterval)
    }, [typing])

    return (
        <div>
            Скорость: <span>{speed.toFixed(1)} зн/мин</span>
        </div>
    )
}

export default TypingIndications