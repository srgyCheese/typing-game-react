import React, {useEffect} from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isAuthSelector } from '../store/selectors'

const Login = () => {
    const loginViaGoogle = () => {
        window.location = process.env.REACT_APP_API_URL + 'connect/google'
    }

    const isAuth = useSelector(isAuthSelector)
    const history = useHistory()

    useEffect(() =>{
        if (isAuth) {
            history.push('/test')
        }
    }, [history])

    return (
        <div>
            <Card style={{ width: '24rem' }} className="mx-auto mt-3">
                <Card.Body>
                    <Card.Title>Для использования приложения вам необходимо войти</Card.Title>
                    <Button variant="primary" onClick={loginViaGoogle}>Войти через google</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login
