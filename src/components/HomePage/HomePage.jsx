import { FaClock, FaRegStar, FaStar, FaTruckMoving, FaUserTie } from 'react-icons/fa';
import ActionFigure1 from '../../assets/ActionFigure1.png';
import ActionFigure2 from '../../assets/ActionFigure2.png';
import ActionFigure3 from '../../assets/ActionFigure3.png';
import ActionFigure4 from '../../assets/ActionFigure4.jpg';
import "./HomePage.css";
import Aos from 'aos';
import 'aos/dist/aos.css';






import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useContext, useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';
import useTitle from '../hooks/useTitle';



const HomePage = () => {


  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState('Marvel');
  useTitle('Home'); 



  useEffect(() => {
    Aos.init();
  }, [])


  useEffect(() => {
    // Fetch initial data for the default category (Marvel)
    const url = `https://toy-stars-server.vercel.app/toys?category=${activeTab}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category);

    // Update the URL and fetch data based on the selected category
    const url = `https://toy-stars-server.vercel.app/toys?category=${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };


  const handleViewDetails = () => {
    if (!user) {
     
      Swal.fire({
        title: 'Please log in',
        text: 'You need to be logged in to view the details.',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'OK',
      });
    } else {
      // User is present, do nothing or perform desired actions
    }
  };


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
                src={ActionFigure4}
                alt="Toy Banner"
                className="banner-image img-fluid mb-5"
                style={{ width: "400px", height: "550px" }}
              />
            </div>
          </div>
        </div>
      </section>





      <section className="services-section bg-light rounded py-5">
        <div className="container" data-aos="zoom-in-down">
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


      <div className="container mb-5 mt-5">
        <h2 className='text-center mb-3 p-4'>*Browse Our Products By Category*</h2>
        <Tabs className="responsive-tabs">
          <TabList className="nav nav-pills nav-justified mb-3 bg-light rounded flex-column flex-md-row">
            <Tab className={`nav-item ${activeTab === 'Marvel' ? 'active' : ''}`}
              onClick={() => handleTabClick('Marvel')} style={{ cursor: 'pointer' }}>
              <span className="nav-link text-dark fw-bold">| Marvel |</span>
            </Tab>
            <Tab className={`nav-item ${activeTab === 'Transformer' ? 'active' : ''}`}
              onClick={() => handleTabClick('Transformer')} style={{ cursor: 'pointer' }}>
              <span className="nav-link text-dark fw-bold">| Transformer |</span>
            </Tab>
            <Tab className={`nav-item ${activeTab === 'Avengers' ? 'active' : ''}`}
              onClick={() => handleTabClick('Avengers')} style={{ cursor: 'pointer' }}>
              <span className="nav-link text-dark fw-bold">| Avengers |</span>
            </Tab>
          </TabList>

          <TabPanel className="responsive-tab-panel">
            <div className="p-4 bg-light">
              <h2 className="mb-4">Any Content 1</h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {toys.map((toy) => (
                  <div key={toy._id} className="col mb-4">
                    <div className="card shadow">
                      <img src={toy.toyPhotoURL} className="card-img-top img-fluid" alt="Product Image" style={{ objectFit: "contain", height: "250px" }} />
                      <div className="card-body">
                        <h5 className="card-title">{toy.toyName}</h5>
                        <p className="card-text">Price: ${toy.price}</p>
                        <p className="card-text">Rating: <Rating
                              placeholderRating={toy.rating}
                              readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                              fullSymbol={<FaStar></FaStar>}>
                              
                            </Rating> ({ (toy.rating)})</p>
                            <Link to={`/view-details/${toy._id}`}><button onClick={() => handleViewDetails(toy._id)} className="btn btn-warning">View Details</button></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel className="responsive-tab-panel">
          <div className="p-4 bg-light">
              <h2 className="mb-4">Any Content 1</h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {toys.map((toy) => (
                  <div key={toy._id} className="col mb-4">
                    <div className="card shadow">
                      <img src={toy.toyPhotoURL} className="card-img-top img-fluid" alt="Product Image" style={{ objectFit: "contain", height: "250px" }} />
                      <div className="card-body">
                        <h5 className="card-title">{toy.toyName}</h5>
                        <p className="card-text">Price: ${toy.price}</p>
                        <p className="card-text">Rating: <Rating
                              placeholderRating={toy.rating}
                              readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                              fullSymbol={<FaStar></FaStar>}>
                              
                            </Rating> ({ (toy.rating)})</p>
                            <Link to={`/view-details/${toy._id}`}><button className="btn btn-warning">View Details</button></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel className="responsive-tab-panel">
          <div className="p-4 bg-light">
              <h2 className="mb-4">Any Content 1</h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {toys.map((toy) => (
                  <div key={toy._id} className="col mb-4">
                    <div className="card shadow">
                      <img src={toy.toyPhotoURL} className="card-img-top img-fluid" alt="Product Image" style={{ objectFit: "contain", height: "250px" }} />
                      <div className="card-body">
                        <h5 className="card-title">{toy.toyName}</h5>
                        <p className="card-text">Price: ${toy.price}</p>
                        <p className="card-text">Rating: <Rating
                              placeholderRating={toy.rating}
                              readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                              fullSymbol={<FaStar></FaStar>}>
                              
                            </Rating> ({ (toy.rating)})</p>
                            <Link to={`/view-details/${toy._id}`}><button className="btn btn-warning">View Details</button></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
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