import React from 'react'
import { typingSelector } from 'store/selectors'
import Character from './Character'
import { useSelector } from 'react-redux'

const TypingText = () => {
    const {text} = useSelector(typingSelector)

    return (
        <>
            {text.map(item => (
                <Character type={item.type} key={item.id}>
                    {item.value}
                </Character>
            ))}
        </>
    )
}

export default TypingText
