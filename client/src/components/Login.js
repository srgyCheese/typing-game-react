import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Login = () => {
    return (
        <div>
            <Card style={{ width: '24rem' }} className="mx-auto mt-3">
                <Card.Body>
                    <Card.Title>Для использования приложения вам необходимо войти</Card.Title>
                    <Button variant="primary">Войти через google</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
