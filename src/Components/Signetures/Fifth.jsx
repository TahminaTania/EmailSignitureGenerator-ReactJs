import React from 'react'
import profile from '../../Images/pic.jpg';

export default function Fifth({file,formData, setTemplateID,Copy,  thmColor, fntColor}) {
  return (
    <div style={{backgroundColor:"white", padding:"10px 5px"}}>
      <div className='firstFornt' id='templateID-1'>
 <div class="row">
  <div class="col-3 text-center"><img className='img-fluid' src={file? file:profile} height="125" alt=""/></div>
  <div class="col-7" style={{display:"flex", alignItems:'center',justifyContent:"center"}}>
    <div style={{marginLeft:"5px"}}>
    <div class="row" >
      <div class="col" style={{ fontSize:"16px", color:"#333333" ,lineHeight:"25px"}}>{formData.fullname}<span style={{fontSize:"11px",color:thmColor,paddingLeft:"2px"}}>{formData.occupation}</span></div>
    </div>
    <div class="row">
      <div class="col" style={{fontSize:"11px",color:fntColor, lineHeight:"18px", marginRight:"1px"}}>{formData.address}</div>
    </div>
    <div class="row">
      <div class="col" style={{fontSize:"11px",color:fntColor,lineHeight:"20px",paddingTop:"3px"}}><span  style={{color:thmColor}}>t</span> {formData.phone}<span>  |  </span><span style={{color:thmColor}}>m</span> {formData.mobile}</div>
    </div>
    <div class="row">
      <div class="col" style={{fontSize:"11px",color:"#999999",lineHeight:"18px"}}><span style={{color:thmColor}}>e</span> <a href='/' style={{color:fntColor,textDecoration:"none"}}>{formData.email}</a><span> | </span><span  style={{color:thmColor}}>w</span> <a href='/'  style={{color:fntColor,textDecoration:"none"}}>{formData.website}</a></div>
    </div>
   </div>
   </div>
   <div class='col-2' style={{ color:fntColor ,borderLeft:"1px solid",display:"flex", alignItems:'center',justifyContent:"center"}}>
      <div class="row">
        <div><a href={formData.facebook} style={{ color:"#007fe6"}}><img className='img-fluid' src={formData.fb} height="15" width="15" alt=""/></a></div>
        <div><a href={formData.instagram} style={{ color:"#007fe6"}}><img className='img-fluid' src={formData.ig} height="15" width="15" alt=""/></a></div>
        <div><a href={formData.linkedin} style={{ color:"#007fe6"}}><img className='img-fluid' src={formData.li} height="15" width="15" alt=""/></a></div>
        <div><a href={formData.twiteer} style={{ color:"#007fe6"}}><img className='img-fluid' src={formData.tw} height="15"  width="15" alt=""/></a></div>                                           
      </div>
    </div>

  </div>
</div>
</div> 



    
  )
}
