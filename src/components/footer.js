import React from 'react';
import "../styles/footer.css"; // Import the corresponding CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p><strong>Flavorly</strong></p>
                <p>Contact: <a href="mailto:anujpandey0513@gmail.com">anujpandey0513@gmail.com</a></p>
                <div className="footer-links">
                    <p>Created by <a href="https://www.linkedin.com/in/anuj-pandey-551bb6226/" target="_blank" rel="noopener noreferrer">Anuj Pandey</a></p>
                    <ul>
                        <li><a href="https://github.com/AnujPandey123" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/anuj-pandey-551bb6226/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="mailto:anujpandey0513@gmail.com">Email</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;