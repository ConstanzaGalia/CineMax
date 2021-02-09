import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";

export default function User() {
    return (
        <div className="bgSection1Landing text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Logo />
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
        </div>
    )
}
