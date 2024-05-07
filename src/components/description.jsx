import React from 'react';
import CDNI from '../assets/MercadoPagoLogo.png';
import MP from '../assets/logoCDNI.png';
import zoom from '../assets/zoom.png'

const Description = () => {
  return (

    <div className='bg-slate-900' style={{ fontSize: '19px' }}>
    <div className='p-10'>
      <h2 className='mt-10 text-center text-4xl'>¿Como funcionan las clases?</h2>

      <div className='flex justify-between mt-10 mb-20'>
        <div className='w-1/2 p-4 flex-none pr-10'>
          <p>
            Usualmente la mayoría de cursos de inglés que uno puede encontrar en línea suelen ser para obtener títulos, y abarcan grandes cantidades de tiempo. 
Es por eso mismo que los cursos que doy son para ayudarte en la situación específica que necesites, sin tener que gastar tiempo innecesario. 
Las clases son por <a href="https://zoom.us/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Zoom</a> <img src={zoom} alt="CDNI Logo" style={{marginBottom:'7px', width: '18px', height: 'auto', display: 'inline-block', verticalAlign: 'middle'}} /> , y los temas se acomodan a tus necesidades. Desde una entrevista laboral, hasta un examen importante.
</p>
</div>
        <div className='w-1/2 p-4 flex-none pl-10'>
          
          <p>
            Para poder hacer una consulta o pedir una clase, hay una sección de formulario al final de la página. Después de preguntarme, voy a describir la estructura que tendrán las clases en base a los temas consultados, los horarios disponibles y los precios correspondientes.
Los pagos se realizan de forma virtual, y se puede usar mercado pago y cuenta DNI. En caso de querer tomar las clases, el momento para abonar es después de la consulta.
</p>

<div className='flex justify-center mt-8'>
  <img src={CDNI} alt="Mercado Pago Logo" className="w-24" />
  <img src={MP} alt="CDNI Logo" className="w-24" />
</div>

</div>
      </div>
    </div>
    </div>
  );
};

export default Description;
