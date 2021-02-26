import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initTyping } from 'store/actions/typing'
import TypingTestBar from 'components/TypingTestBar'

const TypingTest = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initTyping())
    }, [])

    return <TypingTestBar />
}

export default TypingTest
