import React from 'react'

export default function Second({file,formData, setTemplateID,Copy, thmColor, fntColor}) {
  // #007fe6= thnColor
  return (
    <div style={{backgroundColor:"white"}}>
    <div id='templateID-2' style={{ display:"flex",padding:"10px 15px",width:"100%",fontFamily:"Montserrat, Arial, Helvetica, sans-serif"}}>
        <div class="row">
          <div class="col"><div>
            <div class="row">
              <div class="col" style={{fontSize:"26px", color:thmColor, lineHeight:"25px", fontWeight:900}}>{formData.fullname}</div>
            </div>
            <div class="row">
              <div class="col" style={{paddingTop:"5px", color:"#333333", letterSpacing:"2px", fontWeight:'lighter'}}>{formData.occupation}</div>
            </div>
            <div class="row">
              <div class="col" style={{fontSize:"11px" , color:fntColor, lineHeight:"20px", paddingTop:"12px"}}><span style={{color:thmColor}}>t</span>{formData.phone} <span> | </span><span style={{color:thmColor}}>m </span>{formData.mobile}</div>
            </div>
            <div class="row">
            <div class="col" style={{fontSize:"11px" , lineHeight:"16px", paddingBottom:"18px",borderBottom:"3px solid", color:thmColor}}><span style={{color:thmColor}}>e</span> <a href="#"  style={{ color:fntColor, textDecoration:"none"}}>{formData.email}</a> <span style={{color:"#999999"}}> | </span><span style={{color:thmColor}} >w</span> <a href="#"  style={{ color:fntColor, textDecoration:"none"}}>{formData.website}</a></div>
            </div>
          </div></div>
        </div>
          
        </div>
    </div>
  )
}
