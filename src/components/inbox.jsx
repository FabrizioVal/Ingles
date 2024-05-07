import React, { useState, useRef } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import teacher from '../assets/teacher_cat.png';
import bow from '../assets/bow.png';
import '../animation/floating.css';
import { Button } from "@material-tailwind/react";

const Inbox = () => {

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

// Get the values from the form inputs
const name = form.current.name.value;
const email = form.current.email.value;
const title = form.current.title.value;
const message = form.current.message.value;

// Check if any of the input fields are empty
if (!name || !email || !title || !message) {
  alert('Please fill in all the fields');
  return;
}

try{

  // Fetch credentials from the backend
  const response = await axios.get('http://localhost:3000/credentials');
  const { serviceId, templateId, userId } = response.data;
    
    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        userId
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    } catch (error) {
      console.error('Error fetching credentials:', error);
    }

  };

  return (
   
<div>

<div className='flex bg-slate-900' style={{ fontSize: '18px' }}>

  
  <div className='w-1/2 p-10'>

  <div className=' flex-col bg-gray-200 p-4 w-full flex justify-center items-center rounded-md' style={{ color:'#000000'}}>
  <h2 className="text-lg font-bold mb-4" style={{ fontSize: '20px' }} >¿Preparado para pedir tu clase?</h2>

   
      <p className="text-sm" style={{ fontSize: '16px' }}>Si todavia tienes alguna duda o 
quieres consultar por tu primera clase, 
puedes preguntarme por esta 
seccion. Respondere tu mensaje
a traves del email que escribas aqui, 
asi que no olvides estar atento.  
</p>
<img src={bow} style={{ width: '35px', height: 'auto', display: 'inline-block', verticalAlign: 'middle' }} className='right-0'></img>
  
  </div>
  
<div className='flex-col flex justify-center items-center mt-20'>
<img src={teacher} style={{ width: '50%', height: 'auto' }} className='floating-image'></img>
</div>

  </div>

  <div className='w-1/2 p-10'>

  <h1 className='text-center text-4xl mb-8'>Contacto</h1>

  <form ref={form} onSubmit={sendEmail} className="flex flex-col" >
  <div className="mb-4 flex flex-col">
    <label htmlFor="name" className="mb-2">Nombre</label>
    <input type="text" id="name" name="name" className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
  </div>
  <div className="mb-4 flex flex-col">
    <label htmlFor="email" className="mb-2">Email</label>
    <input type="email" id="email" name="email" className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
  </div>
  <div className="mb-4 flex flex-col">
    <label htmlFor="title" className="mb-2">Titulo del mensaje</label>
    <input type="text" id="title" name="title" className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
  </div>
  <div className="mb-4 flex flex-col">
    <label htmlFor="message" className="mb-2">Mensaje</label>
    <textarea id="message" name="message" rows="4" className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
  </div>
  <Button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded">Enviar</Button>

</form>

  </div>

      </div>
      </div>
  );
};
  

export default Inbox;

