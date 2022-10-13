import React, {useState}from 'react'
import '../Form/Form.css'
import First from './First';
import Second from './Second'
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth'
import './Signature.css';
import layout1 from '../../Images/layout1.svg';
import layout2 from '../../Images/layout2.svg'
import layout3 from '../../Images/layout3.svg'
import layout4 from '../../Images/layout4.svg'
import layout5 from '../../Images/layout5.svg'
import layout6 from '../../Images/layout6.svg'
import Sixth from './Sixth';



export default function Signeture({thmColor, fntColor,setTheme ,setFont,formData,setFormData,file}){
 const [templateID, setTemplateID] = useState(0);  
 const [temp, setTemp] = useState(0);
 const Copy=()=>{
    var range = document.createRange();
   range.selectNode(document.getElementById(templateID));
   window.getSelection().removeAllRanges(); 
   window.getSelection().addRange(range); 
   document.execCommand("copy")
   "templateID".select();
  }
 const signetureList = [
    <First file={file} formData={formData} setFormData={setFormData} Copy={Copy} setTemplateID={setTemplateID} thmColor={thmColor} fntColor ={fntColor}/>,
    <Second formData={formData} setFormData={setFormData} Copy={Copy} setTemplateID={setTemplateID} thmColor={thmColor} fntColor ={fntColor}/>,
    <Third formData={formData} setFormData={setFormData} Copy={Copy} setTemplateID={setTemplateID} thmColor={thmColor} fntColor ={fntColor} setTheme={setTheme} setFont={setFont}/>,
    <Fourth file={file} formData={formData} setFormData={setFormData} Copy={Copy} setTemplateID={setTemplateID} thmColor={thmColor} fntColor ={fntColor}/>,
    <Fifth file={file}  formData={formData} setFormData={setFormData} Copy={Copy} setTemplateID={setTemplateID} thmColor={thmColor} fntColor ={fntColor}/>,
    <Sixth thmColor={thmColor} fntColor ={fntColor}setTheme={setTheme} setFont={setFont}/>
    

 ];

  return (
    <div className='Container'>
        <div className='signature-container'>
            <div className='signature-box'>
            {signetureList[temp]}</div>
        </div>
        <div className="srollBar">
            <div className='scroll'>
                <button onClick={() => { setTemp(0);}}><span onClick={(e)=>setTemplateID("templateID-1")}><img src={layout2}/></span></button>
                <button onClick={() => { setTemp(1);}}><img src={layout2}/></button>
                <button onClick={() => { setTemp(2);}}><img src={layout3}/></button>
                <button onClick={() => { setTemp(3);}}><img src={layout4}/></button>
                <button onClick={() => { setTemp(4);}}><img src={layout5}/></button>
                <button onClick={() => {setTemp(5);}}><img src={layout6}/></button>
                <button onClick={() => {''}}><img src={layout1}/></button>
                <button onClick={() => {''}}><img src={layout1}/></button>
                <button onClick={() => {''}}><img src={layout1}/></button>
                <button onClick={() => {''}}><img src={layout1}/></button>
           
            </div>
        </div>
         <div className="copy text-center mt-5">
             <div className='btn btn-danger' onClick={Copy}>Copy This Template</div>
        </div>
    </div>
  )
}
