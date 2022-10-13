import React from "react";

const Personal = ({page, setPage,formData, setFormData,name,setName}) => {
  console.log("Personal page",name)
    return (
      <div className="box">
        {/* <div className="step-title">Sign Up</div>  style={{ backgroundColor:"#bde0ff" ,borderRadius:0}}*/}
        <input
          type="text"
          placeholder={formData.fullname}
          className="form-group"
          // value={formData.fullname}
          onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
        />
         <input
          type="text"
          placeholder={formData.email}
          className="form-group"
          // value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
         <input
          type="Website"
          placeholder={formData.website}
          className="form-group"
          // value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
         <input
          type="text"
          placeholder={formData.phone}
          className="form-group"
          // value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder={formData.mobile}
          className="form-group"
          // value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />

      </div> 
        
    );
  };
  
  export default Personal;
  