import React from 'react'

const Others = ({previewPic,formData, setFormData, setTheme,setFont,thmColor, fntColor}) => {
    return (
      <div className="box">
        {/* <div className="step-title">Other Info</div> style={{ backgroundColor:"#f1f8ff",borderRadius:0}}*/}
        <div className='level mb-2'>Upload your DP:</div>
        <input
          type="file"
          placeholder="upload your photo"
          className="form-group file"
          onChange={previewPic}
        />

        <div className='color-choose mt-3'>
          <div className='level mb-2'>Choose Theme Color:</div>
          <div className='row' style={{height:"35px"}}>
            <div className='col-2' style={{backgroundColor:"black"}} onClick={(e)=> setTheme("black")}></div>
            <div className='col-2' style={{backgroundColor:"#996666"}} onClick={(e)=> setTheme("#996666")}></div>
            <div className='col-2' style={{backgroundColor:"#CCFF66"}} onClick={(e)=> setTheme("#CCFF66")}></div>
            <div className='col-2' style={{backgroundColor:"#FFFF33"}} onClick={(e)=> setTheme("#FFFF33")}></div>
            <div className='col-2' style={{backgroundColor:"#003366"}} onClick={(e)=> setTheme("#003366")}></div>
            <div className='col-2' style={{backgroundColor:"cyan"}} onClick={(e)=> setTheme("cyan")}></div>
          </div>
          <div className='row' style={{height:"35px"}}>
            <div className='col-2' style={{backgroundColor:"#FF3366"}} onClick={(e)=> setTheme("#FF3366")}></div>
            <div className='col-2' style={{backgroundColor:"#CC9966"}} onClick={(e)=> setTheme("#CC9966")}></div>
            <div className='col-2' style={{backgroundColor:"#007fe6"}} onClick={(e)=> setTheme("#007fe6")}></div>
            <div className='col-2' style={{backgroundColor:"#6600FF"}} onClick={(e)=> setTheme("#6600FF")}></div>
            <div className='col-2' style={{backgroundColor:"#999900"}} onClick={(e)=> setTheme("#999900")}></div>
            <div className='col-2' style={{backgroundColor:"#660066"}} onClick={(e)=> setTheme("#660066")}></div>
          </div>
        </div>

        <div className='color-choose mt-4'>
          <div className='level mb-2'>Choose Text Color:</div>
          <div className='row' style={{height:"35px"}}>
            <div className='col-2' style={{backgroundColor:"black"}} onClick={(e)=> setFont("black")}></div>
            <div className='col-2' style={{backgroundColor:"darkred"}} onClick={(e)=> setFont("darkred")}></div>
            <div className='col-2' style={{backgroundColor:"Green"}} onClick={(e)=> setFont("Green")}></div>
            <div className='col-2' style={{backgroundColor:"#999999"}} onClick={(e)=> setFont("#999999")}></div>
            <div className='col-2' style={{backgroundColor:"Blue"}} onClick={(e)=> setFont("Blue")}></div>
            <div className='col-2' style={{backgroundColor:"cyan"}} onClick={(e)=> setFont("Cyan")}></div>
          </div>
          <div className='row' style={{height:"35px"}}>
            <div className='col-2' style={{backgroundColor:"#F80000 "}} onClick={(e)=> setFont("#F80000")}></div>
            <div className='col-2' style={{backgroundColor:"#CC9966"}} onClick={(e)=> setFont("#CC9966")}></div>
            <div className='col-2' style={{backgroundColor:"#00CCFF"}} onClick={(e)=> setFont("#00CCFF")}></div>
            <div className='col-2' style={{backgroundColor:"#330033"}} onClick={(e)=> setFont("#330033")}></div>
            <div className='col-2' style={{backgroundColor:"#6633FF"}} onClick={(e)=> setFont("#6633FF")}></div>
            <div className='col-2' style={{backgroundColor:"#CC3399"}} onClick={(e)=> setFont("#CC3399")}></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Others;