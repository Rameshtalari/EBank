import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/Not Found'

import './App.css'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/ebank/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} /> {/* Changed this line */}
      </Switch>
    </div>
  </Router>
)

export default App
