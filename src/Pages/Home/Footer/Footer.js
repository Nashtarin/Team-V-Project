import React from 'react';
import { faEnvelope, faLandmark, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../images/logoST.png'

const Footer = () => {

    const date = new Date().toLocaleString();
    console.log(date);
    return (
        <div className="mt-5" style={{ backgroundColor: 'dodgerblue', color: 'navy' }}>
            <div className="row text-start p-3">
                <div className="col-lg-8 col-sm-4 col-8">
                    {/* <h6>53/2, Sukrabad, DHanmondi</h6>
                    <h6>Phone:01752637789</h6>
                    <h6>Email: tazeenehsan73@gmail.com</h6> */}
                    <div className="m-1 ms-2">
                        <img style={{ height: "150px" }} src={logo} alt="" />
                        <p className="text-blue "><i class="me-1 fas fa-phone"></i>01678877987,01786656768</p>
                        <p className="text-blue "><i class="me-1 fas fa-envelope"></i>info@stblogs.com</p>
                        <p className="text-blue "><i className="me-1 fas fa-home"></i> 5/3, Block-D,Tajamahal Road ,Mohammadpur,Dhaka-1207</p>

                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-4 mt-5">
                    <h4>Follow me on </h4>
                    <p className='fs-5'><i className="fab fa-github"></i> Github</p> 
                    <p className='fs-5'><i className="fab fa-linkedin"> LinkedIn</i></p>
                    <p className='fs-5'><i className="fab fa-facebook"> Facebook</i></p>
                </div>
                {/* <div className="col-lg-4 col-sm-4">

                </div> */}

            </div>
        </div>
    );
};

export default Footer;