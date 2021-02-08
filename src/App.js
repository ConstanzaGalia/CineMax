import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import User from './pages/User';
import Admin from './pages/Admin';
import Landing from './pages/Landing';
import Peliculas from './pages/Peliculas';
import Series from './pages/Series';
import img1 from './img/imgDispositivosLanding.png';
import img2 from './img/imgDescargaLanding.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/peliculas'>
            <Peliculas />
          </Route>
          <Route path='/series'>
            <Series />
          </Route>
          <Route path='/user'>
            <User />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/'>
            <Landing img1={img1} img2={img2} />
          </Route>
        </Switch>
      </Router>

    </>
  ); 
}

export default App;
