import {React,useState} from 'react';
import '../Styles/Bookings.css';
import wallpaper from '../Images/BookingsWallpaper.jpg';
import lordidol from '../Images/LordIdol.jpg';
import NavBar from '../Components/NavBar';
import interior from '../Images/InteriorDesign.jpeg';
import ContactSection from '../Components/ContactForm';
import ContactFormModal from '../Components/ContactFormModal';
import plant from "../Images/plant.jpeg";
import custom from "../Images/custom.jpeg";
import bulk from "../Images/bulk.jpeg";
import QuoteForm from './QuoteForm';


const Bookings = () => { 

  const [modalOpen, setModalOpen] = useState(false);
 
    const openModal = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };
 
    const closeModal = () => setModalOpen(false);
  
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
 
    const openQuoteModal = () => {
        setQuoteModalOpen(true);
    };
 
    const closeQuoteModal = () => {
        setQuoteModalOpen(false);
    };

  return (
    <div>
    <div>
      <NavBar openModal={openModal} />
    </div>
    <div className="bookings-page">
     
      <header className="hero-section">
        <img src={wallpaper} alt="Bookings Wallpaper" className="hero-image" />
        <div className="hero-overlay">
          <h1>Bookings</h1>
        </div>
      </header>

      <section className='title'>
      <h1>Bring Your Ideas to Life</h1>
          <p>Join us at The 3D Craft House to co-create the next generation of products, tailored just for you. Our innovative approach allows you to adjust and personalize product designs to your preference using simple sliders. Whether you envision a unique idol, fancy decorative pieces, or anything else your creativity leads you to, we make it possible. Bring your ideas to life and print them locally, right here in our workshop. Let’s build your future, one layer at a time.</p>
      </section>

      <section className="explore-creations-section">
        <h2>Explore Our Creations</h2>
        <div className="booking-options">
          <div className="booking-option">
            <img src={lordidol} alt="Idols" className="booking-image" />
            <div className="booking-content">
            <h3>Idols </h3>
            <p> Craft spiritual and cultural idols that resonate with your beliefs and decor. Each piece can be tailored in size and color to match your specific aesthetic requirements.</p>
          </div>
          </div>
          <div className="booking-option">
            <img src={interior} alt="Interior Design Products" className="booking-image" />
            <div className="booking-content">
            <h3> Interior Design Products </h3>
            <p>Elevate your space with our bespoke interior design items, from elegant vases to unique light fixtures, all designed to complement your home or office.</p>
          </div>
          </div>
          <div className="booking-option">
            <img src={plant} alt="Planetary Products" className="booking-image" />
            <div className="booking-content">
            <h3>Planetary Products</h3>
            <p>Celebrate the wonders of the cosmos with our planetary products, perfect for education or as striking decorative pieces. Customize the scale and hues to fit your vision.</p>
             </div>
          </div>
          <div className="booking-option">
            <img src={custom} alt="Custom Products" className="booking-image" />
            <div className="booking-content">
            <h3>Custom Products</h3>
            <p>Have a unique idea? We can make it a reality. From personal gifts to innovative gadgets, if you can dream it, we can 3D print it.</p>
            </div>
          </div>
          <div className="booking-option">
            <img src={bulk} alt="Bulk Bookings" className="booking-image"/>
            <div className="booking-content">
            <h3>Bulk Bookings</h3>
            <p>Ideal for events, promotions, or large orders, our bulk booking options ensure you get the high-quality, customized products you need in the quantities you require.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <p>Experience seamless 3D printing with The 3D Craft House, where we transform your concepts into tangible creations. Here’s how you can bring your project to life with us:</p>
            <h1><strong>Step 1: Describe Your Product</strong><br /></h1>
            <p> Provide a detailed description of the product you want to create. Specify the material (PLA, clay, or stoneware) and choose your desired colors. The more details you provide, the better we can serve your needs.</p>
            
            <h1><strong>Step 2: Receive a Quote</strong><br /></h1>
            <p>Once we understand your requirements, we’ll assess the project scope and provide you with a detailed quote, including the estimated time for completion.</p>
          
            <h1><strong>Step 3: Confirm Your Order</strong><br /></h1>
            <p>After reviewing the quote, you can confirm your order. We will then send you an invoice for the payment, which you can complete to move forward with the printing process.</p>
          
            <h1><strong>Step 4: Collection or Delivery</strong><br /></h1>
            <p>Upon completion of your 3D print, we’ll contact you to arrange for either pickup from our Hyderabad location or delivery to your address.</p>
        
            <div className="quote-button-container">
            <button className="quote-button" onClick={openQuoteModal}>Ask for Quote</button>
            </div>
            {quoteModalOpen && <QuoteForm onClose={closeQuoteModal} />}
      </section>
      
      <section className="questions">
                    <h1>Got Questions? We're Here to Help!</h1>
                    <button className="contact-button" onClick={openModal}>Contact Us</button>
                </section>
                <ContactFormModal isOpen={modalOpen} onClose={closeModal} />
            <footer>
                <p>&copy; The 3D Craft House. All rights reserved.</p>
            </footer>
    </div>
    </div>
  );
}

export default Bookings;
