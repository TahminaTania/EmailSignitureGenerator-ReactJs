import React, {useState}from 'react'
import './Form.css'
import Social from './Social'
import Others from './Others'
import Official from './Official'
import Personal from './Personal'


export default function Form({previewPic,formData ,setFormData}) {
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
    <Others
    formData={formData}
    setFormData={setFormData}
    previewPic={previewPic}
    />,
    <Social
    formData={formData}
    setFormData={setFormData}
     />,
  ];
  
  return (
    <div className='Container'>
        <div className='formPage'>
            <div className="sections">
                <button className='p' onClick={() => { setPage(0);}}>Personal</button>
                <button className='p' onClick={() => { setPage(1);}}>Official</button>
                <button className='p' onClick={() => { setPage(2);}}>Others</button>
                <button className='p' onClick={() => { setPage(3);}}>Social</button>
            </div>
            <div className='form-box'>{componentList[page]}</div>
        </div>
    </div>
  )
}



// https://blog.openreplay.com/multi-step-forms-with-transition-effects-in-react/