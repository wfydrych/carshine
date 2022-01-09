import './Container.sass'
import {Route, Switch} from 'react-router-dom'
import {AnimatedSwitch} from 'react-router-transition'
import Main from './Main'
import Gallery from './Gallery'
import Pricing from './Pricing'
import Contact from './Contact'

const Topbar = () => {
  return (
    <div>
        <Switch>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
                <Route 
                    exact path='/' 
                    render = {text => <Main></Main>}>
                </Route>
                <Route 
                    exact path='/carshine' 
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
            </AnimatedSwitch>
        </Switch>
    </div>
  )
}

export default Topbar