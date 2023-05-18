import { FaClock, FaTruckMoving, FaUserTie } from 'react-icons/fa';
import ActionFigure1 from '../../assets/ActionFigure1.png';
import ActionFigure2 from '../../assets/ActionFigure2.png';
import ActionFigure3 from '../../assets/ActionFigure3.png';

const HomePage = () => {
    return (
        <div>

            
            <section className="banner mb-5">
                <div className="container">
                    <div className="row align-items-center justify-content-around">
                        <div className="col-lg-6">
                            <h1 className="banner-title">Welcome to our Toy World!</h1>
                            <p className="banner-description">
                                Explore our wide range of toys for kids of all ages. We have
                                everything from educational toys to fun-filled games that will
                                spark their imagination.
                            </p>
                            <button className="btn btn-warning mb-5">Shop Now</button>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="https://i.pinimg.com/564x/1f/2b/77/1f2b7722087534ac24084773735ae14d.jpg"
                                alt="Toy Banner"
                                className="banner-image img-fluid mb-5"
                                style={{ width: "400px", height: "550px" }}
                            />
                        </div>
                    </div>
                </div>
            </section>



            <section className="services-section bg-light rounded py-5">
                <div className="container">
                    <h2 className='text-center mb-5'>Why Choose Us?</h2>
        <div className="row ">
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <FaTruckMoving style={{ fontSize: '62px' }}></FaTruckMoving>
                <h5 className="card-title mt-4 fw-bold">Fast Delivery</h5>
                <p className="card-text">
                  We offer fast and reliable delivery to your doorstep.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <FaUserTie style={{ fontSize: '62px' }}></FaUserTie>
                <h5 className="card-title mt-4 fw-bold">Customer Satisfaction</h5>
                <p className="card-text">
                  Our top priority is to ensure your satisfaction with our products and services.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card text-center">
              <div className="card-body">
               <FaClock style={{ fontSize: '62px' }}></FaClock>
                <h5 className="card-title mt-4 fw-bold">Quick Service</h5>
                <p className="card-text">
                  We strive to provide prompt and efficient service to save your time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


            <div className="carousel-container p-3 mt-5">
                <h2 className='text-center mb-3 mt-4'>*Our Gallery*</h2>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner rounded">
                        <div className="carousel-item active">
                            <img src={ActionFigure1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={ActionFigure2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={ActionFigure3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            
            <section className="subscribe-section py-5 mt-5">
      <div className="container text-center">
        <h2>Subscribe to Our Newsletter</h2>
                    <p>Stay updated with the latest toys and offers!</p>
                    <img
          src="https://i.pinimg.com/originals/f9/ac/11/f9ac118988141c6c93bcbb78e15755de.gif"
          alt="Subscribe Image"
          className="img-fluid mt-4 rounded mb-5"
        />
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Enter your email"
                aria-describedby="subscribe-btn"
              />
              <button
                className="btn btn-primary"
                type="button"
                id="subscribe-btn"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
            
        </div>




    );
};

export default HomePage;