import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from 'components/AppRouter'
import Navbar from 'components/Navbar'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setToken } from 'store/actions/auth'

const App = () => {
	const dispatch = useDispatch()
	const [isJwtLoad, setIsJwtLoad] = useState(false)

	useEffect(() => {
		const jwt = localStorage.getItem('jwt')
		dispatch(setToken(jwt))
		setIsJwtLoad(true)
	}, [])

	return (
		<BrowserRouter>
			<Navbar />
			<Container>
				{isJwtLoad && <AppRouter />}
			</Container>
		</BrowserRouter>
	)
}

export default App