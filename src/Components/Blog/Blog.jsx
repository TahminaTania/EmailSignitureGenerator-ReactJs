import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import './Blog.css'

export default function Blog() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div className='container-fluid mt-5 pb-5'>
    <div className='Blog'>
        <div data-aos="fade-right" className='firstBlog'>
          <h1 >Email Signature Generator</h1>
          <p >Create a professional email signature with our best email signature generator here for free. Customize it according to your branding and use it in your Gmail, Outlook, Apple Mail, Yahoo and Office 365 email account.</p>
        </div>
        <div data-aos="fade-up" className='secondBlog'>
          <h1>What Is an Email Signature?</h1>
          <p>An email signature is a part of a brand image, which contains general information such as your name, your business name, phone number, website URL, company’s logo, company’s name, social media accounts, etc. It will be added at the end of the email when you send it to any person.<br/><br/> 
          An email signature can reflect the personality and professionalism of your business. That’s why many business people start setting up their own unique email signatures in their email. If the signature needs to be professionally used in the name of the company, you should make sure you add the basic information of the company, including the company phone number, company address, and company’s social media accounts.<br/><br/>
          We are here to offer the best email signature generator with all the latest features to add colors, fonts, styles, designs, etc. It's based on the concept of making personalized free email signatures anywhere and anytime. You can also select from a variety of email signature templates to create your own signature within minutes.</p>
        </div>
        <div data-aos="fade-right" className='thirdBlog'>
          <h1 >What Are the Benefits of Using Email Signature?</h1>
          <div><p>Research shows that business people need to send emails at an average of 35 emails per day. In this case, an effective email plays an important role in getting marketing opportunities. Therefore, adding an email signature can make your email look more professional and shows your company’s personality.
            <br/> <br/>
            Other than that, there are a lot more benefits of email signatures;
            <br/> <br/>
            <li data-aos="zoom-in-down">An email signature is a way to connect with your customers and express your openness to communication.</li>
            <li data-aos="zoom-in-down">Adding an email signature with detailed information allows the recipients to make a personal association and connection with you.</li>
            <li data-aos="zoom-in-down">It helps to build brand recognition for every person your employees send emails to.</li>
            <li data-aos="zoom-in-down">It creates and reinforces who you are as an organization.</li>
            <li data-aos="zoom-in-down">Email signature increases the trust in you when your leads read your email.</li>
          </p></div>

        </div>
    </div>
    </div>
  )
}
