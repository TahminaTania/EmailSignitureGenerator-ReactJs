import React from 'react';
import {FaFacebook, FaInstagram,FaYoutube,FaLinkedin,FaTwitter} from "react-icons/fa"
import logo from '../../Design/logo.png'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <footer style={{ backgroundColor:"#753f2f", color:"azure"}}>
    <MDBFooter className='text-center'>
      <MDBContainer className='p-4'>
        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' placeholder='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn backgroundColor='primary' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mt-3'>
          <MDBRow>
            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              {/* <img className='image-fluid' height={100} width={250} src={logo}/> */}
            </MDBCol>
            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'></h5>
              <MDBRow className='mb-5'>
                <MDBCol><a><FaFacebook/></a></MDBCol>
                <MDBCol><a><FaInstagram/></a></MDBCol>
                <MDBCol><a><FaLinkedin/></a></MDBCol>
                <MDBCol><a><FaTwitter/></a></MDBCol>
                <MDBCol><a><FaYoutube/></a></MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        {/* © 2020 Copyright: */}
        <a className='text-white' href='https://mdbootstrap.com/'>
          {/* MDBootstrap.com */}
        </a>
      </div>
    </MDBFooter>
    </footer>
  );
}