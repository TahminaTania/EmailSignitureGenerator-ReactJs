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
          placeholder={formData.occupation}
          className="form-group"
          // value={formData.occupation}
          onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
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
        <button onClick={() => { setPage(page + 1);}}>
          Next
        </button>
      </div> 
        
    );
  };
  
  export default Personal;
  