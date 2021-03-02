import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const StartTypingTest = () => {
    return (
        <Button as={Link} to="/test/start" className="mt-4" variant="success">
            Начать тест печати
        </Button>
    )
}

export default StartTypingTest
