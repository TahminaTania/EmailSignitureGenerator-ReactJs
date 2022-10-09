import React from 'react'

const Others = ({previewPic,formData, setFormData}) => {
    return (
      <div className="box" style={{ backgroundColor:"#f1f8ff",borderRadius:0}}>
        {/* <div className="step-title">Other Info</div> */}
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
        <input
          type="file"
          placeholder="upload your photo"
          className="form-group file"
          onChange={previewPic}
        />
        {/* <input
          type="file"
          placeholder="upload your photo"
          className="form-group file"
        /> */}
        <br />
        {/* <button onClick={() => { setPage(0);}}>
          Previous
        </button> */}
      </div>
    );
  };
  
  export default Others;