import {Route, Switch} from 'react-router-dom'
import Main from './Main'
import Gallery from './Gallery'
import Pricing from './Pricing'
import Contact from './Contact'

export default function Topbar() {
  return (
    <div>
        <Switch>
            <Route 
                exact path='/' 
                render = {text => <Main></Main>}>
            </Route>
            <Route 
                path='/main' 
                render = {text => <Main></Main>}>
            </Route>
            <Route 
                path='/gallery' 
                render = {text => <Gallery></Gallery>}>
            </Route>
            <Route 
                path='/pricing' 
                render = {text => <Pricing></Pricing>}>
            </Route>
            <Route 
                path='/contact' 
                render = {text => <Contact></Contact>}>
            </Route>
        </Switch>
    </div>
  )
}