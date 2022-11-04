import ventas1 from '../assets/images/ventas1.png'
import ventas2 from '../assets/images/ventas2.png'
import ventas3 from '../assets/images/ventas3.png'
//carrusel
function Banner() {
    return (
        <div classNameName="container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ventas1} className="d-block w-100" width="100%" height ="500"/>
                    </div>
                    <div className="carousel-item">
                        <img src={ventas2} className="d-block w-100" width="100%" height ="500"/>
                    </div>
                    <div className="carousel-item">
                        <img src={ventas3} className="d-block w-100" width="100%" height ="500" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    );
}
export default Banner;