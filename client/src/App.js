import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setToken } from './store/actions/auth';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      dispatch(setToken(jwt))
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <AppRouter />
      </Container>
    </BrowserRouter>
  )
}

export default App