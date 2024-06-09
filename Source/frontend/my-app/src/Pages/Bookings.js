import {React,useState} from 'react';
import '../Styles/Bookings.css';
import wallpaper from '../Images/BookingsWallpaper.jpg';
import NavBar from '../Components/NavBar';
import ContactSection from '../Components/ContactForm';
import ContactFormModal from '../Components/ContactFormModal';

const Bookings = () => { 
  const [modalOpen, setModalOpen] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);
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
            <img src="Images/idols.jpg" alt="Idols" />
            <p>1. Idols: Craft spiritual and cultural idols that resonate with your beliefs and decor. Each piece can be tailored in size and color to match your specific aesthetic requirements.</p>
          </div>
          <div className="booking-option">
            <img src="Images/interior-design.jpg" alt="Interior Design Products" />
            <p>2. Interior Design Products: Elevate your space with our bespoke interior design items, from elegant vases to unique light fixtures, all designed to complement your home or office.</p>
          </div>
          <div className="booking-option">
            <img src="Images/planetary-products.jpg" alt="Planetary Products" />
            <p>3. Planetary Products: Celebrate the wonders of the cosmos with our planetary products, perfect for education or as striking decorative pieces. Customize the scale and hues to fit your vision.</p>
          </div>
          <div className="booking-option">
            <img src="Images/custom-products.jpg" alt="Custom Products" />
            <p>4. Custom Products: Have a unique idea? We can make it a reality. From personal gifts to innovative gadgets, if you can dream it, we can 3D print it.</p>
          </div>
          <div className="booking-option">
            <img src="Images/bulk-bookings.jpg" alt="Bulk Bookings" />
            <p>5. Bulk Bookings: Ideal for events, promotions, or large orders, our bulk booking options ensure you get the high-quality, customized products you need in the quantities you require.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <p>Experience seamless 3D printing with The 3D Craft House, where we transform your concepts into tangible creations. Here’s how you can bring your project to life with us:</p>
        <ol>
          <li>
            <strong>Step 1: Describe Your Product</strong><br />
            Provide a detailed description of the product you want to create. Specify the material (PLA, clay, or stoneware) and choose your desired colors. The more details you provide, the better we can serve your needs.
          </li>
          <li>
            <strong>Step 2: Receive a Quote</strong><br />
            Once we understand your requirements, we’ll assess the project scope and provide you with a detailed quote, including the estimated time for completion.
          </li>
          <li>
            <strong>Step 3: Confirm Your Order</strong><br />
            After reviewing the quote, you can confirm your order. We will then send you an invoice for the payment, which you can complete to move forward with the printing process.
          </li>
          <li>
            <strong>Step 4: Collection or Delivery</strong><br />
            Upon completion of your 3D print, we’ll contact you to arrange for either pickup from our Hyderabad location or delivery to your address.
          </li>
        </ol>
        <div className="quote-button-container">
          <button className="quote-button">Ask a Quote</button>
        </div>
                <ContactFormModal isOpen={modalOpen} onClose={closeModal} />
      </section>
    </div>
    </div>
  );
}

export default Bookings;
