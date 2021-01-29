import BotonCreateAccount from "./BotonCreateAccount";
import BotonInicioSesion from "./BotonInicioSesion";

export default function Landing() {
    return (
        <main className="text-white">
            <div className="container">
                <div className="row my-5">
                    <div className="col-6 mt-5">
                        <h1>Logo</h1>
                    </div>
                    <div className="col-6">
                        <BotonInicioSesion />
                    </div>
                    <div className="row my-5 mx-auto">
                        <h3 className="text-center mt-5">
                            SI NO TENÉS CUENTA REGISTRATE CON TU MAIL <br/> Y <br/> DISFRUTÁ TUS PELIS Y SERIES FAVORITAS 
                        </h3>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row my-5 justify-content-center">
                    <BotonCreateAccount />
                </div>
                <hr className="hrLanding"/>
            </div>

            <div className="container">
                <div className="row my-5">
                    <div className="col-6">
                        <h3>DONDE QUIERAS</h3>
                        <p>Mirá tus pelis y series preferidas en cualquier dispositivo</p>
                    </div>
                    <div className="col-6">
                        <img src="../img/imgDispositivosLanding.png" alt=""/>
                    </div>
                </div>
                    <hr className="hrLanding"/>
            </div>

            <div className="container">
                <div className="row my-5">
                    <div className="col-6">
                        <img src="" alt=""/>
                    </div>
                    <div className="col-6">
                        <h3>Y CUANDO QUIERAS</h3>
                        <p>Creá tu lista de favoritos, descargá y mirá off line</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                {/* <Footer /> */}
            </div>
        </main>
    )
}
