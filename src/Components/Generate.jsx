import React, { useState,useEffect } from 'react'
import Signeture from './Signetures/Signeture';
import Form from './Form/Form';
import profile from '../Images/pic.jpg';
import fb from '../Images/temp-img/icon_fb.png'
import ig from '../Images/temp-img/ig.jpeg'
import li from '../Images/temp-img/icon_li.png'
import tw from '../Images/temp-img/icon_tw.png'

export default function Generate() {

    const [file, setFile] = useState();
    function previewPic(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [formData, setFormData] = useState({
        fullname: "Robert Long",
        email: "contact@robertlong.com",
        website:"www.robertlong.com",
        address: "7743 Street, Blue Park, Suite 233, Smalltown, Stateville, USA 774386",
    
        
        occupation: "Designer",
        companyname: "Goggle",
        Qualification: "Phd's Psychology",
        department:"Health",
        
    
        linkedin: "https://www.linkedin.com/robertlong/",
        facebook: "https://www.facebook.com/robartlong/",
        twitter: "https://www.twitter.com/robartlong/",
        instagram: "https://www.instagram.com/robartlong/",
        li:li,ig:ig,tw:tw,fb:fb,

    
        image:file,
        logo:"",
        mobile:"0123 - 456 - 789",
        phone:"+1 (234) 567 - 890"
      });
  return (
    <section>
        <div className='container mt-4'>
            <div className='col-md-12'>
                {/* <h2 className='text-center alert alert-danger'>this is my full Container</h2> */}
                <div className='row'>
                    <div className='col-md-5'>
                        <Form previewPic={previewPic} file={file} formData={formData} setFormData={setFormData}/>
                    
                    </div>
                    <div className='col-md-1'></div>
                
                    <div className='col-md-6'>
                        <Signeture file={file} formData={formData} setFormData={setFormData}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
