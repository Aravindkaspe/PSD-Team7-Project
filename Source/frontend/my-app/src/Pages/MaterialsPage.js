
import {React,useState} from 'react';
import NavBar from '../Components/NavBar'; 
import ContactFormModal from '../Components/ContactFormModal'; 
import '../Styles/materialsstyles.css'; 


import heroImage from '../Images/materialswallpaper.jpg'; 
import plaMaterialImage from '../Images/plamaterial.jpg'; 
import clayMaterialImage from '../Images/claymaterial.jpg'; 
import stonewareMaterialImage from '../Images/stonewarematerial.jpeg'; 

const MaterialsPage = () => {
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
                        <img src={heroImage} alt="Materials Image" className="hero-image" />
                        <h1 className="hero-title">Materials</h1>
                    </div>
                </section>

                <section className="intro-section">
                    <h2>Choose your craft material at The 3D Craft House</h2>
                    <p>Committed to Sustainability, The 3D Craft House prioritizes eco-friendly solutions. We actively use and promote renewable and recycled materials in our 3D printing processes to ensure our creations are as environmentally responsible as possible. By optimizing our techniques to minimize waste and reduce carbon emissions, we strive to produce high-quality parts that are not only innovative but also kind to the planet.</p>
                </section>

                <section className="material-section">
                    <div className="material">
                        <img src={plaMaterialImage} alt="PLA" className="material-image" />
                        <div className="material-content">
                            <h3>PLA(Polylactic Acid)</h3>
                            <p>Derived from renewable resources like corn starch or sugarcane, PLA is a biodegradable plastic that serves as the cornerstone of our 3D printing materials. It is not only environmentally friendly but also versatile and suitable for a wide range of printing needs, from detailed models to larger, robust items.</p>
                        </div>
                    </div>
                </section>

                <section className="material-section">
                    <div className="material">
                        <img src={clayMaterialImage} alt="Clay" className="material-image" />
                        <div className="material-content">
                            <h3>Clay</h3>
                            <p>Embracing the traditional essence of pottery with modern technology, we utilize various colored clays to bring your creations to life. Our clay printing process reduces waste and allows for the creation of intricate designs that are both beautiful and functional. Each piece is unique, reflecting the natural quality of the material and the precision of 3D printing.</p>
                        </div>
                    </div>
                </section>

                <section className="material-section">
                    <div className="material">
                        <img src={stonewareMaterialImage} alt="Stoneware" className="material-image" />
                        <div className="material-content">
                            <h3>Stoneware</h3>
                            <p>Known for its durability and strength, our stoneware materials are perfect for items that require a tougher, more resilient quality. Like clay, stoneware is a natural material, fired in a kiln to achieve a vitrified state that is watertight and enduring.</p>
                        </div>
                    </div>
                </section>

                <section className="questions">
                    <h1>Got Questions? We're Here to Help!</h1>
                    <button className="contact-button" onClick={openModal}>Contact Us</button>
                </section>
                <ContactFormModal isOpen={modalOpen} onClose={closeModal} /> 
            </main>
            <footer>
                <p>&copy; The 3D Craft House. All rights reserved.</p>
            </footer>
        </div>
    );
};
export default MaterialsPage;
