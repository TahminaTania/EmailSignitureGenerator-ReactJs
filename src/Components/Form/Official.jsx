import React from 'react'
const Official = ({page, setPage,formData, setFormData}) => {
    return (
      <div className="box">
        {/* <div className="step-title">Personal Info</div> style={{ backgroundColor:"#f0f8ff",borderRadius:0}}*/}
        <input
          type="text"
          placeholder={formData.occupation}
          className="form-group"
          // value={formData.occupation}
          onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
        />
        <input
          type="text"
          placeholder={formData.companyname}
          className="form-group"
          // value={formData.companyname}
          onChange={(e) => setFormData({ ...formData, companyname: e.target.value })}
        />
        <input
          type="text"
          placeholder={formData.Qualification}
          className="form-group"
          // value={formData.Qualification}
          onChange={(e) => setFormData({ ...formData, Qualification: e.target.value })}
        />
        <input
          type="text"
          placeholder={formData. department}
          className="form-group"
          // value={formData. department}
          onChange={(e) => setFormData({ ...formData,  department: e.target.value })}
        />
        <input
          type="text"
          placeholder={formData.address}
          className="form-group"
          // value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
         <br />
        
      </div>
    );
  };
  
  export default Official