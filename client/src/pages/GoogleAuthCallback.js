import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import Loader from 'components/Loader'
import { setToken } from 'store/actions/auth'

function GoogleAuthCallback() {
    const {search} = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(async () => {
        try {
            const res = await fetch(`http://localhost:1337/auth/google/callback?${search}`)
            const data = await res.json()

            const {jwt} = data
    
            dispatch(setToken(jwt))

            localStorage.setItem('jwt', jwt)
        } catch (e) {}

        history.push('/test')
    }, [search, dispatch, history])

    return (
        <div style={{width: '70px'}} className="mx-auto mt-5">
            <Loader size_="70px" />
        </div>
    )
}

export default GoogleAuthCallback
