import './App.sass'
import { BrowserRouter } from 'react-router-dom'
import Topbar from './Topbar'
import Menu from './Menu'
import Container from './Container'
import Footer from './Footer'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Topbar></Topbar>
        <Menu></Menu>
        <Container></Container>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App