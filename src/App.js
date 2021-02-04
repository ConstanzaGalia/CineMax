import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import img1 from './img/imgDispositivosLanding.png';
import img2 from './img/imgDescargaLanding.png';
import Landing from './pages/Landing';
import { Route, Router, Switch } from 'react-router-dom';
import User from './pages/User';



function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/User'>
          <User />
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
