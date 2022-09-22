import React from "react";
import gps from "../img/gps.png"
import gmail from "../img/gmail.png"
import call from "../img/call.png"
import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
import twitter from "../img/twitter.png"

const Contact = () => {
    return(
<div className="contact-container">
<div className="title-contact">
    <h2 className="form-title">Contact us</h2>
<p className="form-desc">We love questions and feedback - and we're always happy to help!</p>
<p className="form-desc">Here are some ways to contact us.</p>
</div>
<div className="form">
    <form action="">

        <div className="form-title-container">
        <h4 className="form-title">Send us a message</h4>
        <p className="form-desc">Send us a message and we'll respond within 24 hours.</p>
        </div>
        <div className="form-inputs-1">
            <div className="label-input"><label htmlFor="">Full name</label><input placeholder="Type full name here" id="name" className="form-input" type="text" /></div>
            <div className="label-input"><label htmlFor="">Email</label><input placeholder="Type email here" id="email" className="form-input" type="text" /></div>
            </div>
            <div className="form-inputs-2">
            <div className="label-input"><label htmlFor="">Telephone</label><input placeholder="Phone number" id="telephone" className="form-input" type="text" /></div>
            <div className="label-input"><label htmlFor="">Organisation</label><input placeholder="Organisation name" id="organisation" className="form-input" type="text" /></div>
            </div>
            <textarea placeholder="Type your message here" className="label-input form-input-2" rows="4"></textarea>
   
            <div className="form-btn">
                <button id="form-btn">Submit</button>

        </div>
    </form>
    <div className="extra-info">
<div className="extra-title"><h3>Contact information</h3></div>
<div className="extra-desc">
    <div className="flex">
<img className="info-extra" width={24} src={gps} alt="" /><p>177 Huntington Ave Ste 1703</p></div>
<div className="flex">
<img className="info-extra" width={24} src={gmail} alt="" /><p>contact-us@company.com</p>
</div>
<div className="flex">
<img className="info-extra" width={24} src={call} alt="" /><p>+1-617-555-0108</p>
</div>
</div>
<div className="extra-rrss">
    <img src={facebook} alt="" />
    <img src={instagram} alt="" />
    <img src={twitter} alt="" />
</div>
    </div>
</div>

</div>
    )
}

export default Contact;