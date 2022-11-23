import React from 'react'
import FooterLink from '../components/FooterLink'

const FooterSection: React.FC = () => {
  return (
    <footer>
        <div className="container d-flex flex-column align-items-center">
            <ul className="footer-icons">
                <FooterLink link="https://facebook.com" icon="fa-brands fa-facebook-f" />
                <FooterLink link="https://instagram.com" icon="fa-brands fa-instagram" />
                <FooterLink link="https://twitter.com" icon="fa-brands fa-twitter" />
                <FooterLink link="https://google.com" icon="fa-brands fa-google" />
                <FooterLink link="https://linkedin.com" icon="fa-brands fa-linkedin" />
            </ul>
            <span className="footer-text">© 2022 Fixxo. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default FooterSection