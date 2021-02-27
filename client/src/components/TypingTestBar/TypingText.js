import React from 'react'
import Character from './Character'
import { useSelector } from 'react-redux'
import { selectTyping } from 'store/selectors'

const TypingText = () => {
    const {text} = useSelector(selectTyping)

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
