import React from 'react';
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter} from 'react-icons/fa'

export default function Third({file,formData, setTemplateID,Copy , thmColor, fntColor,setTheme ,setFont}) {
  console.log("Third page", thmColor)
  return (
    <div style={{backgroundColor:"white", padding:"10px 5px"}}>
      <div style={{fontFamily:"Montserrat, Arial, Helvetica, sans-serif"}}>
        <div class="row" style={{marginLeft:"20px"}}>
          <div class="col" style={{fontSize:"26px", color:"#007fe6", lineHeight:"25px"}}>
            <div>
            <div class="row">
              <div class="col" style={{fontSize:"20px", color:thmColor, lineHeight:"25px"}}>{formData.fullname}</div>
            </div>
            <div class="row">
              <div class="col" style={{paddingTop:"5px",color:"#333333",letterSpacing:"12px", fontSize:"12px", fontWeight:"bold"}}>{formData.occupation}</div>
            </div>
            <div class="row">
        <div class="col" valign="bottom" style={{paddingTop:"12px"}}>
                <a href={formData.facebook} style={{paddingRight:"20px",fontSize:"18px", color:thmColor }}><FaFacebookF style={{border:"1px solid", padding:"2px", borderRadius:"50%"}}/></a>
                <a href={formData.instagram} style={{paddingRight:"20px", fontSize:"18px", color:thmColor}}><FaInstagram style={{border:"1px solid", padding:"2px", borderRadius:"50%"}}/></a>
                <a href={formData.linkedin} style={{paddingRight:"20px", fontSize:"18px", color:thmColor}}><FaLinkedinIn style={{border:"1px solid", padding:"2px", borderRadius:"50%"}}/></a>
                <a href={formData.twitter} style={{paddingRight:"20px", fontSize:"18px", color:thmColor}}><FaTwitter style={{border:"1px solid", padding:"2px", borderRadius:"50%"}}/></a>                        
                                    
              </div>
            </div>
            </div></div>
        </div>    
      </div>

    </div>
  )
}
