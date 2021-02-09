import Footer from "../components/Footer";
import BotonCreateAccount from "../components/BotonCreateAccount";
import BotonInicioSesion from "../components/BotonInicioSesion";
import Logo from "../components/Logo";



export default function Landing(props) {
    return (
        <main className="text-white">
            <section className="bgPortada">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-6 mt-5">
                                <Logo />
                            </div>
                            <div className="col-6">
                                <BotonInicioSesion />
                            </div>
                            <div className="row py-5 mx-auto">
                                <h3 className="text-center mt-5">
                                    SI NO TENÉS CUENTA REGISTRATE CON TU MAIL <br/> Y <br/> DISFRUTÁ TUS PELIS Y SERIES FAVORITAS 
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row py-3 justify-content-center position-relative">
                        <BotonCreateAccount />
                        </div>
                    </div>
            </section>
            <section className="bgSection1Landing">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-6 my-auto text-center">
                            <h3>DONDE QUIERAS</h3>
                            <p>Mirá tus pelis y series preferidas en cualquier dispositivo</p>
                        </div>
                        <div className="col-6">
                            <img src={props.img1} alt=""/>
                        </div>
                    </div>
                        <hr className="hrLanding"/>
                </div>

                <div className="container">
                    <div className="row py-5">
                        <div className="col-6 text-center">
                            <img src={props.img2} alt=""/>
                        </div>
                        <div className="col-6 text-center my-auto">
                            <h3>Y CUANDO QUIERAS</h3>
                            <p>Creá tu lista de favoritos, descargá y mirá off line</p>
                        </div>
                    </div>
                </div>
                    
                    <hr className="hrLanding"/>
            </section>
        </main>
    )
}
