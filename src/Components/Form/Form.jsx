import React, {useState}from 'react'
import './Form.css'
import Social from './Social'
import Others from './Others'
import Official from './Official'
import Personal from './Personal'


export default function Form({thmColor, fntColor,setTheme ,setFont,previewPic,formData ,setFormData}) {
 const [page, setPage] = useState(0);

 const componentList = [
    <Personal 
    formData={formData}
    setFormData={setFormData}
    />,

    <Official
    formData={formData}
    setFormData={setFormData}
    />,
    <Social
    formData={formData}
    setFormData={setFormData}
     />,
    <Others
    formData={formData}
    setFormData={setFormData}
    previewPic={previewPic}
    thmColor={thmColor} 
    fntColor ={fntColor}
    setTheme={setTheme} setFont={setFont}
    />,
  ];

  return (
    <div className='Container'>
        <div className='formPage'>
            <div className="row sections">
                <button className='col-4 p' onClick={() => { setPage(0);}}>Personal</button>
                <button className='col-4 p' onClick={() => { setPage(1);}}>Official</button>
                <button className='col-4 p' onClick={() => { setPage(2);}}>Social</button>
                <button className='col-4 p' onClick={() => { setPage(3);}}>Others</button>
            </div>
            <div className='form-box'>{componentList[page]}</div>
        </div>
    </div>
  )
}



// https://blog.openreplay.com/multi-step-forms-with-transition-effects-in-react/