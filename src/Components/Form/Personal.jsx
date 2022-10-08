import React from "react";

const Personal = ({page, setPage,formData, setFormData,name,setName}) => {
  console.log("Personal page",name)
    return (
      <div className="card" style={{ backgroundColor:"#bde0ff" ,borderRadius:0}}>
        {/* <div className="step-title">Sign Up</div> */}
        <input
          type="text"
          placeholder="Full Name"
          className="form-group"
          value={formData.fullname}
          onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
        />
         <input
          type="text"
          placeholder="Occupation"
          className="form-group"
          value={formData.occupation}
          onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
        />
         <input
          type="text"
          placeholder="Email"
          className="form-group"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
         <input
          type="Website"
          placeholder="Occupation"
          className="form-group"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
        <button onClick={() => { setPage(page + 1);}}>
          Next
        </button>
      </div> 
        
    );
  };
  
  export default Personal;
  