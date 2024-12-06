import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Home.css';
import deftones from '../assets/deftones.jpg';
import twice from '../assets/twice.jpg';
import bk from '../assets/bk.jpg';
import fresno from '../assets/fresno.jpg';
import keshi from '../assets/keshi.jpg';
import billie from '../assets/billie.jpg';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    fade: true,
  };

  return (
    <div className='home-main '>
      <Slider {...settings} className='carousel'>
        <div>
          <img src={deftones} alt="Deftones"/>
        </div>
        <div>
          <img src={twice} alt="TWICE"/>
        </div>
        <div>
          <img src={bk} alt="BK"/>
        </div>
        <div>
          <img src={fresno} alt="Fresno"/>
        </div>
        <div>
          <img src={keshi} alt="Keshi"/>
        </div>
        <div>
          <img src={billie} alt="Billie Eillish"/>
        </div>
      </Slider>
      <div className='home-content'>
        <h1>Welcome to <span className='highlight'>Catalog.fm</span></h1>
        <p>
          Music is more than just sound — its a journey, a memory, and a connection. Catalog.fm is a platform for music lovers to share their favorite bands and albums, discover new music, and connect with other fans.
        </p>
        <p> 
          At Catalog.fm, we give you the tools to create your own personal archive of the bands and artists who define your soundtrack.
        </p>
        <p>
          Whether youre a fan of iconic classics, hidden gems, or the latest hits, Catalog.fm is the perfect place to celebrate your musical taste. Discover new favorites, revisit old ones, and share your collection with others.
        </p>
        <p>
          Ready to get started? Begin building your catalog of musical inspiration today.
        </p>
        <div className='buttons'>
          <Link to='/add-band' className='register-btn'>Start here</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;