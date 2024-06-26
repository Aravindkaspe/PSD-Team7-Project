import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import ContactFormModal from '../Components/ContactFormModal';
import ContactSection from '../Components/ContactSection';
import '../Styles/3dprintingstyles.css';
import heroImage from '../Images/printingpagewallpaper.jpg';

const ThreeDPrintingPage = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <NavBar openModal={openModal} />
            <main>
                <section className="hero">
                    <div className="hero-container">
                        <img src={heroImage} alt="3D Printing Image" className="hero-image" />
                        <h1 className="hero-title">3D Printing</h1>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What is 3D Printing?</h2>
                    <p>3D printing, or additive manufacturing, is a revolutionary technology that creates three-dimensional objects from digital designs. By adding material layer by layer, it allows for complex shapes and structures that would be difficult or impossible to achieve with traditional manufacturing methods.</p>
                </section>

                <section className="content-section">
                    <h2>Why Choose Sustainable 3D Printing?</h2>
                    <p>At The 3D Craft House, we prioritize sustainability. Our 3D printing processes use environmentally friendly materials, such as biodegradable plastics and recycled composites, minimizing waste and reducing our carbon footprint. By choosing our sustainable 3D printing services, you contribute to a greener planet.</p>
                </section>

                <section className="content-section">
                    <h2>How Does 3D Printing Work?</h2>
                    <ul>
                        <li><strong>Design: </strong>Everything starts with a digital design, created in a 3D modeling program or scanned with a 3D scanner.</li>
                        <li><strong>Preparation: </strong>The design is then processed by slicing software that divides it into thousands of thin layers and prepares it for printing.</li>
                        <li><strong>Printing: </strong>The printer builds the object layer by layer. The material—plastic, metal, or resin—is extruded through a heated nozzle, solidifying to form the final product.</li>
                        <li><strong>Post-processing: </strong>Some prints may require cleaning, sanding, or painting to achieve the desired finish.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Benefits of 3D Printing</h2>
                    <ul>
                        <li><strong>Customization: </strong>Each item can be individually customized with minimal additional cost, perfect for personalized gifts or tailored components in various industries.</li>
                        <li><strong>Speed: </strong>From design to production, 3D printing streamlines the process, allowing for rapid prototyping and speedy adjustments that accelerate development cycles.</li>
                        <li><strong>Cost-Effective: </strong>By reducing material waste and the need for expensive molds or tools, 3D printing proves to be economical for small production runs and prototypes.</li>
                        <li><strong>Innovation: </strong>The ability to create complex, lightweight structures in one piece, without assembly, encourages innovation and design freedom across industries like aerospace, automotive, and healthcare.</li>
                        <li><strong>On-Demand Production: </strong>Manufacture products on demand, reducing inventory costs and storage space.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Why Opt for 3D Printing?</h2>
                    <p>3D printing offers unparalleled flexibility and efficiency, making it ideal for a wide range of applications, from prototyping new inventions to producing finished products. By embracing this technology, industries can reduce lead times, cut costs, and boost innovation, while individuals can bring their unique ideas to life with ease.</p>
                </section>

               

                <ContactSection />
                <ContactFormModal isOpen={modalOpen} onClose={closeModal} />
            </main>
            <footer>
                <p>&copy; The 3D Craft House. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ThreeDPrintingPage;
