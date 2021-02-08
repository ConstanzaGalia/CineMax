import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


export default function User(props) {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <img src={props.logo} alt="" />
                    </div>
                    <div className="col-lg-6">
                    {/* BOTON NOMBRE DEL USUARIO LOGUEADO CON DROPDOWN PARA LOGOUT */}
                    </div>
                </div>
                <hr className="mt-5 hrLanding" />
                <div className=" mt-5">
                    <NavBar />
                </div>
                <div className="mt-5">
                    <Carrousel />
                </div>
                <hr className="mt-5 hrLanding" />
                <div className="mt-5">
                    <h4>Peliculas</h4>
                </div>
                <hr className="mt-5 hrLanding" />
                <div className="mt-5">
                    <h4>Series</h4>
                </div>
                <hr className="mt-5 hrLanding" />
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}
