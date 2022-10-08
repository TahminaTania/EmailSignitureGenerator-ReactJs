import React from 'react'

const Others = ({page, setPage,formData, setFormData}) => {
    return (
      <div className="card" style={{ backgroundColor:"#f1f8ff",borderRadius:0}}>
        {/* <div className="step-title">Other Info</div> */}
        <input
          type="text"
          placeholder="Highest Qualification"
          className="form-group"
        />
        <input
          type="text"
          placeholder="Occupation"
          className="form-group"
        />
        <input
          type="file"
          placeholder="upload your photo"
          className="form-group file"
        />
        <input
          type="file"
          placeholder="upload your photo"
          className="form-group file"
        />
        <br />
        <button onClick={() => { setPage(0);}}>
          Previous
        </button>
      </div>
    );
  };
  
  export default Others;