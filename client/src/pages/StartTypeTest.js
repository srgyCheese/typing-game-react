import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const StartTypingTest = () => {
    return (
        <Button className="mt-4" variant="success">
            <Link to="/test/start" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                Начать тест печати
            </Link>
        </Button>
    )
}

export default StartTypingTest
