import React, { useState } from 'react'
import Signeture from './Signetures/Signeture';
import Form from './Form/Form';
import profile from '../Images/pic.jpg'

export default function Generate() {
    const [name,setName]=useState("Robert Long")
    const [formData, setFormData] = useState({
        fullname: "Robert Long",
        email: "contact@robertlong.com",
        website:"www.robertlong.com",
        address: "7743 Street, Blue Park, Suite 233, Smalltown, Stateville, USA 774386",
    
        
        occupation: "Designer",
        companyname: "Goggle",
        Qualification: "Phd's Psychology",
        department:"Marketing",
        
    
        linkedin: "https://www.linkedin.com/robertlong/",
        facebook: "https://www.facebook.com/robartlong/",
        twitter: "https://www.twitter.com/robartlong/",
        youtube: "https://www.youtube.com/robartlong/",
        instagram: "https://www.instagram.com/robartlong/",
    
        image:profile,
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
                    <div className='col-md-4'>
                        <Form name={name} setName={setName} formData={formData} setFormData={setFormData}/>
                    
                    </div>
                    <div className='col-md-2'></div>
                
                    <div className='col-md-6'>
                        <Signeture name={name} setName={setName} formData={formData} setFormData={setFormData}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
