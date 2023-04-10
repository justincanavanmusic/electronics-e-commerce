import React from "react";
import "./footer.css"
import { FcElectronics } from 'react-icons/fc'
import { GoLogoGithub} from 'react-icons/go'
import '../../index.css'


function Footer() {
    return (
        
     <div className="btm-footer product-font">

<div className="d-flex fixed-bottom align-items-center footer-color justify-content-between footerDiv">
<p className="pt-3 created-by">Site created by Dom, Matt, Ricardo, Justin</p>

<FcElectronics className="icon"/>

<p className='contact pt-3'>Contact us for inquiries on
<a className="github-icon" href="https://github.com/justincanavanmusic/electronics-e-commerce" > <GoLogoGithub className='icon'/></a>
</p>

</div>


     </div>


    )
}

export default Footer;