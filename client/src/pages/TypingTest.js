import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { breakTyping, initTyping } from 'store/actions/typing'
import TypingTestBar from 'components/TypingTestBar'

const TypingTest = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initTyping())
        return () => dispatch(breakTyping())
    }, [])

    return <TypingTestBar />
}

export default TypingTest
