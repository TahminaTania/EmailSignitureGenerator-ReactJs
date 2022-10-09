import React from "react";

const Social = ({page, setPage,formData, setFormData}) => {
    return (
        <div className="box" style={{ backgroundColor:"#d7ecff",borderRadius:0}}>
            <input
                type="text"
                placeholder={formData.facebook}
                className="form-group"
                // value={formData.facebook}
                onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}   
            />
            <input
                type="text"
                placeholder={formData.linkedin}
                className="form-group"
                // value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            />
            <input
                type="department"
                placeholder={formData.twitter}
                className="form-group"
                // value={formData.twitter}
                onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}   
            />
            <input
                type="address"
                placeholder={formData.instagram}
                className="form-group"
                // value={formData.youtube}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
            />

            <button onClick={() => { setPage(page + 1);}}>
                Next
            </button>
            <br />
            <button onClick={() => { setPage(page - 1);}}>
                Previous
            </button>
        </div>
    );
  };
    
  export default Social;
  