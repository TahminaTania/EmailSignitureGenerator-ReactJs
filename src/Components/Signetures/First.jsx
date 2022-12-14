import React,{useState,useRef} from 'react';
import { Link , NavLink } from 'react-router-dom';
import {FiCopy} from 'react-icons/fi';
import profile from '../../Images/pic.jpg';



export default function First({file,formData, setTemplateID,Copy,setTheme,setFont,thmColor, fntColor}) {

 
  return (
<div>
 <div className='firstFornt' id='templateID-1' style={{backgroundColor:"white", padding:"10px 5px"}}>
 <div class="row">
  <div class="col-4 text-center"><img className='img-fluid' src={file? file:profile} height={100} width={125} alt=""/></div>
  <div class="col-8"  style={{borderLeft:"3px solid" ,color:thmColor}}><div style={{marginLeft:"5px"}}>
    <div class="row" >
      <div class="col" style={{ fontSize:"16px", color:thmColor  ,lineHeight:"25px"}}>{formData.fullname}<span style={{fontSize:"11px",color:"#333333",paddingLeft:"2px"}}>{formData.occupation}</span></div>
    </div>
    <div class="row">
      <div class="col" style={{fontSize:"11px",color: fntColor, lineHeight:"18px", marginRight:"1px"}}>{formData.address}</div>
    </div>
    <div class="row">
      <div class="col" style={{fontSize:"11px",color:fntColor,lineHeight:"20px",paddingTop:"3px"}}><span  style={{color:thmColor}}>t</span> {formData.phone}  |  <span style={{color:thmColor}}>m</span> {formData.mobile}</div>
    </div>
    <div class="row">
      <div class="col" style={{fontSize:"11px",color:"#999999",lineHeight:"18px"}}><span style={{color:thmColor}}>e</span> <a href='/' style={{color:fntColor,textDecoration:"none"}}>{formData.email}</a> | <span  style={{color:thmColor}}>w</span> <a href='/'  style={{color:fntColor,textDecoration:"none"}}>{formData.website}</a></div>
    </div>
   
    <div class="row" valign="bottom" style={{paddingTop:"5px"}}>
      <div class="col" style={{display:"flex"}}>
        <div><a href={formData.facebook} style={{paddingRight:"10px", color:"#007fe6"}}><img className='img-fluid' src={formData.fb} height="15" width="15" alt=""/></a></div>
        <div><a href={formData.instagram} style={{paddingRight:"10px", color:"#007fe6"}}><img className='img-fluid' src={formData.ig} height="15" width="15" alt=""/></a></div>
        <div><a href={formData.linkedin} style={{paddingRight:"10px", color:"#007fe6"}}><img className='img-fluid' src={formData.li} height="15" width="15" alt=""/></a></div>
        <div><a href={formData.twiteer} style={{paddingRight:"10px", color:"#007fe6"}}><img className='img-fluid' src={formData.tw} height="15"  width="15" alt=""/></a>   </div>                                           
      </div>
    </div>
  </div></div>
</div> 


</div> 
    </div>
  )
}
