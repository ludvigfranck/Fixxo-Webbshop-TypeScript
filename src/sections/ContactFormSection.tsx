import React from 'react'

const ContactFormSection: React.FC = () => {

    /*
        Hann inte fixa någon funktionalitet med Contact Form, försökte länge med GraphQL utan att 
        lyckas. Så fanns inte tid till detta, hoppas att det duger med endast det grafiska 
        gränssnittet. 
    */

    return (
        <section className="contact-form">
            <div className="container">
                <h2>Come in Contact with us</h2>
                <form noValidate>
                    <div>
                        <input id="name" type="text" placeholder="Your Name" />
                        <div className="errorMessage"></div>
                    </div>
                    <div>
                        <input id="email" type="email" placeholder="Your Mail" />
                        <div className="errorMessage"></div>
                    </div>
                    <div className={`textarea`}>
                        <textarea id="comments" placeholder="Comments"></textarea>
                        <div className="errorMessage"></div>
                    </div>
                    <div className="form-btn">
                        <button type="submit" className="btn-theme">Post Comments</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactFormSection