import BotonInicioSesion from "../components/BotonInicioSesion";

export default function User() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Logo</h1>
                    </div>
                    <div className="col-lg-6">
                        <BotonInicioSesion />
                    </div>
                    <hr className="hrLanding"/>
                </div>
            </div>
            
        </>
    )
}
