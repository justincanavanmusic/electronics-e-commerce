import React from "react";
import "./footer.css"
import { FcElectronics } from 'react-icons/fc'
import '../../index.css'


function Footer() {
    return (
        
     <div className="btm-footer product-font">

<div className="d-flex fixed-bottom align-items-center footer-color justify-content-between footerDiv">
<p className="pt-3 created-by">Site created by Dom, Matt, Ricardo, Justin</p>

<FcElectronics className="icon"/>

<p className='contact pt-3'>Contact us for inquiries at gamercircuit@gmail.com!</p>
</div>


     </div>


    )
}

export default Footer;