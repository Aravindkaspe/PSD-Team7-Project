

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/NavigationBar.css';
// import '../Styles/styles.css';
// import '../Styles/ContactForm.css';
// import ContactSection from '../Components/ContactSection';

// import ThreeDPrintingPage from './3DPrintingPage' 
// import logo from '../Images/3D company Icon.png';
// import wallpaper15 from '../Images/Wallpaper15.jpg';
// import wallpaper14 from '../Images/wallpaper14.png';
// import workingStyle from '../Images/WorkingStyle.png';
// import wallpaper12 from '../Images/wallpaper12.png';
// import get30 from '../Images/get (30).jpeg';

// const Home = () => {
//     

//     useEffect(() => {
//         const header = document.querySelector('header');
        
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 header.classList.add('header-scrolled');
//                 header.classList.remove('header-transparent');
//             } else {
//                 header.classList.add('header-transparent');
//                 header.classList.remove('header-scrolled');
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div>
//             <header>
//                 <nav>
//                     <div className="logo-container">
//                         <img src={logo} alt="3D Craft House Logo" className="logo-img" />
//                         <div className="logo">The 3D Craft House</div>
//                     </div>
//                     <ul>
//                         <li><a href="#" id="contactLink" onClick={openModal}>Contact Us</a></li>
//                         <li><Link to="/booking">Booking</Link></li>
//                         <li><Link to="/shop">Shop</Link></li>
//                     </ul>
//                 </nav>
//             </header>
//             <main>
//                 <section className="hero">
//                     <div className="hero-container">
//                         <img src={wallpaper15} alt="3D Printing Image" className="bgm" />
//                         <div className="overlay"></div>
//                         <h1 className="hero-title">Craft your vision with the 3D Craft House</h1>
//                     </div>
//                 </section>

//                 <section className="hero-content">
//                     <h1>Step into the Future with 3D Craft House</h1>
//                     <p>At 3D Craft House, we're not just a team – we're visionaries, creators, and innovators. Our in-house experts in digital fabrication and materials are here to transform your most ambitious ideas into tangible reality. From initial design to the final product, we offer comprehensive services in 3D printing, sculpture, and infrastructure. At 3D Craft House, we thrive on creativity and collaboration. Our passion is turning your dreams into reality, one layer at a time. Join us on a journey where innovation meets craftsmanship, and let's create something extraordinary together.</p>
//                 </section>

//                 <section className="printing section">
//                     <img src={wallpaper14} alt="3D Printing Image" className="responsive-image" />
//                     <div className="overlay"></div>
//                     <div className="print">
//                         <h1>3D Printing</h1>
//                         <Link to="/3d-printing">
//                             <button className="learn-more">Learn More</button>
//                         </Link>
//                     </div>
//                 </section>

//                 <section className="working style">
//                     <img src={workingStyle} alt="WorkingStyle" className="workingstyle-image" />
//                 </section>

//                 <section className="materials section">
//                     <img src={wallpaper12} alt="3D Printing Image" className="materials-image" />
//                     <div className="overlay"></div>
//                     <div className="material">
//                         <h1>Materials we Use</h1>
//                         <button className="learn-more">Learn More</button>
//                     </div>
//                 </section>

//                 <section className="shop section">
//                     <img src={get30} alt="3D Printing Image" className="shop-image" />
//                     <div className="overlay"></div>
//                     <div className="shoppe">
//                         <h1>Shop</h1>
//                         <button className="learn-more">View All Products</button>
//                     </div>
//                 </section>

//                 <section className="aboutus">
//                     <h1>The Minds Behind the Prints</h1>
//                     <p>Welcome to 3D Craft House, where young, visionary ecopreneurs are dedicated to creating eco-friendly products that foster ecological balance. Though we are new to the field, our passion for sustainability drives us to make a significant impact with innovative, sustainable ideas.</p>
//                     <p>Based in the vibrant city of Hyderabad, our mission extends across India as we build a dynamic team of like-minded individuals committed to making a difference. Our journey is fueled by creativity, collaboration, and an unwavering commitment to the environment.</p>
//                 </section>

//                 <ContactSection /> 
//             </main>
//             <footer>
//                 <p>&copy; The 3D Craft House. All rights reserved.</p>
//             </footer>

//             {/* {modalOpen && (
//                 <div id="contactModal" className="modal" onClick={(e) => { if (e.target.id === 'contactModal') closeModal(); }}>
//                     <div className="modal-content">
//                         <span className="close-button" onClick={closeModal}>&times;</span>
//                         <ContactForm />
//                     </div>
//                 </div>
//             )} */}
//         </div>
//     );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../Components/ContactSection'; // Import ContactSection
import '../Styles/NavigationBar.css';
import '../Styles/styles.css';
import '../Styles/ContactForm.css';

import logo from '../Images/3D company Icon.png';
import wallpaper15 from '../Images/Wallpaper15.jpg';
import wallpaper14 from '../Images/wallpaper14.png';
import workingStyle from '../Images/WorkingStyle.png';
import wallpaper12 from '../Images/wallpaper12.png';
import get30 from '../Images/get (30).jpeg';

const Home = () => {

    useEffect(() => {
                const header = document.querySelector('header');
                
                const handleScroll = () => {
                    if (window.scrollY > 50) {
                        header.classList.add('header-scrolled');
                        header.classList.remove('header-transparent');
                    } else {
                        header.classList.add('header-transparent');
                        header.classList.remove('header-scrolled');
                    }
                };
        
                window.addEventListener('scroll', handleScroll);
        
                return () => {
                    window.removeEventListener('scroll', handleScroll);
                };
            }, []);
        

    return (
        <div>
            <header>
                <nav>
                    <div className="logo-container">
                        <img src={logo} alt="3D Craft House Logo" className="logo-img" />
                        <div className="logo">The 3D Craft House</div>
                    </div>
                    <ul>
                        <li><Link to="/Contact-Section">Contact US</Link></li>
                        <li><Link to="/booking">Booking</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {/* Your main content sections */}
                <section className="hero">
                    <div className="hero-container">
                        <img src={wallpaper15} alt="3D Printing Image" className="bgm" />
                        <div className="overlay"></div>
                        <h1 className="hero-title">Craft your vision with the 3D Craft House</h1>
                    </div>
                </section>

                <section className="hero-content">
                    <h1>Step into the Future with 3D Craft House</h1>
                    <p>At 3D Craft House, we're not just a team – we're visionaries, creators, and innovators. Our in-house experts in digital fabrication and materials are here to transform your most ambitious ideas into tangible reality. From initial design to the final product, we offer comprehensive services in 3D printing, sculpture, and infrastructure. At 3D Craft House, we thrive on creativity and collaboration. Our passion is turning your dreams into reality, one layer at a time. Join us on a journey where innovation meets craftsmanship, and let's create something extraordinary together.</p>
                </section>

                <section className="printing section">
                    <img src={wallpaper14} alt="3D Printing Image" className="responsive-image" />
                    <div className="overlay"></div>
                    <div className="print">
                        <h1>3D Printing</h1>
                        <Link to="/3d-printing">
                            <button className="learn-more">Learn More</button>
                        </Link>
                    </div>
                </section>

                <section className="working style">
                    <img src={workingStyle} alt="WorkingStyle" className="workingstyle-image" />
                </section>

                <section className="materials section">
                    <img src={wallpaper12} alt="3D Printing Image" className="materials-image" />
                    <div className="overlay"></div>
                    <div className="material">
                        <h1>Materials we Use</h1>
                        <button className="learn-more">Learn More</button>
                    </div>
                </section>

                <section className="shop section">
                    <img src={get30} alt="3D Printing Image" className="shop-image" />
                    <div className="overlay"></div>
                    <div className="shoppe">
                        <h1>Shop</h1>
                        <button className="learn-more">View All Products</button>
                    </div>
                </section>

                <section className="aboutus">
                    <h1>The Minds Behind the Prints</h1>
                    <p>Welcome to 3D Craft House, where young, visionary ecopreneurs are dedicated to creating eco-friendly products that foster ecological balance. Though we are new to the field, our passion for sustainability drives us to make a significant impact with innovative, sustainable ideas.</p>
                    <p>Based in the vibrant city of Hyderabad, our mission extends across India as we build a dynamic team of like-minded individuals committed to making a difference. Our journey is fueled by creativity, collaboration, and an unwavering commitment to the environment.</p>
                </section>

                <ContactSection /> {/* Add ContactSection component here */}
            </main>
            <footer>
                <p>&copy; The 3D Craft House. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
