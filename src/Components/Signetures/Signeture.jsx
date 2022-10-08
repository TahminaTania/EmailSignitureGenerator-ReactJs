import React, {useState}from 'react'
import '../Form/Form.css'
import First from './First';
import './Signature.css';
import layout1 from '../../Images/layout1.svg'



export default function Signeture({formData,setFormData,name,setName}){
 const [page, setPage] = useState(0);
 
  
  return (
    <div className='Container'>
        <div className='signature-container'>
            <div className='signature-box'><First formData={formData} setFormData={setFormData} name={name} setName={setName}/></div>
        </div>
        <div className="srollBar">
            <div className='scroll'>
                <div className='p' onClick={() => {''}}><img src={layout1}/></div>
                <div className='p' onClick={() => {''}}><img src={layout1}/></div>
                <div className='p' onClick={() => {''}}><img src={layout1}/></div>
                <div className='p' onClick={() => {''}}><img src={layout1}/></div>
                <div className='p' onClick={() => {''}}><img src={layout1}/></div>
                <div className='p' onClick={() => {''}}><img src={layout1}/></div>
                <div className='p' onClick={() => {''}}><img src={layout1}/></div>
                <div className='p' onClick={() => {''}}><img src={layout1}/></div>
                <div className='p' onClick={() => {''}}><img src={layout1}/></div>
                <div className='p' onClick={() => {''}}><img src={layout1}/></div>
           
            </div>
        </div>
    </div>
  )
}
