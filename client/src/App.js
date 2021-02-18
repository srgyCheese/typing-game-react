import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import { Container } from 'react-bootstrap';

const App = () => {
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