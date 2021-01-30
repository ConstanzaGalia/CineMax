import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/landingPage/Landing';
import './css/App.css';
import img1 from './img/imgDispositivosLanding.png';
import img2 from './img/imgDescargaLanding.png';



function App() {
  return (
    <>
      <Landing img1={img1} img2={img2} />
    </>
  );
}

export default App;
