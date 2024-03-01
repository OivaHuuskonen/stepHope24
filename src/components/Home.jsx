import { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


{/*const PageHeader = ({ title }) => (

    <div className="max-w-[1000px] mx-auto w-full flex flex-col justify-center h-full ">
      <h1 className="text-4xl sm:text-7xl font-bold text-[#679186]">
        {title}
      </h1>
    </div>  
);

const PageContent = ({ children }) => (
  <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 scroll-px-4">
    {children}
  </div>
);

const Home = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (



    <div name='home' className='w-full bg-[#fdebd3]'> 
  
      <div className='max-w-[1000px] mx-auto px-8 lg:px-8 py-8 '>
      <br></br> <br></br> <br></br> <br></br> 
      <br></br> <br></br> <br></br> <br></br> 
      <p className='text-[white]-600 pl-3 sm:text-pl-0'>Hei, tervetuloa sivullemme</p>
      <br></br>
      <PageHeader title="Toivon askel,"/>
      <PageHeader title="Alkoholistien aikuiset lapset Tampere"/>
      <br></br>
      <PageContent>
      <div className='text-[white]-700 text-justify'>
      <p>Olemme valtakunnallisen ACA alaisuudessa toimiva, 2023 perustettu pienryhmä joka kokoontuu joka tiistai klo: 18.30 Tampereen Hervannan seurakuntatalolla osoitteessa Lindforsinkatu 7, toinen kerros. Kokouksiin voi osallistua kuka tahansa mutta toivomme että ilmoittaisit tulostasi etukäteen emailla tai WhatsApp chatilla. Toimintamme on ehdottoman luottamuksellista ja se perustuu ACA:n on <a className='underline decoration-[#f9b4ab] 0.5 underline-offset-4' href="https://www.aal.fi/toipumisohjelma/12askelta/" target="_blank" rel="noopener noreferrer" onClick={handleClick}>12 askeleen</a> ja <a className='underline decoration-[#f9b4ab] 0.5 underline-offset-4' href="https://www.aal.fi/toipumisohjelma/12perinnetta/" target="_blank" rel="noopener noreferrer" onClick={handleClick}> 12 perinteen</a> ohjelmaan miehille ja naisille, jotka kasvoivat alkoholistiperheessä tai muutoin toimintahäiriöisessä kodissa.</p>
          </div>
        </PageContent>

        <br></br>
         
         <div className='linkbott pl-6'>
        <Link to='contact' smooth={true} duration={500}>
        <button className='text-[#679186] group border-2 py-3 px-6 my-2 flex items-center hover:bg-[#f5eadc] hover: border-[#f9b4ab]'>
        ota yhteyttä!  
        <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button> 
        </Link>
      </div>
     </div>
     <br></br>  <br></br>  <br></br>  <br></br>  <br></br>

     </div>  
  );
};*/}

const PageHeader = ({ title }) => (

  <div className="max-w-[1000px] mx-auto w-full flex flex-col justify-center h-full ">
    <h1 className="text-4xl sm:text-7xl font-bold text-[#679186]">
      {title}
    </h1>
  </div>  
);

const PageContent = ({ children }) => (
<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 scroll-px-4">
  {children}
</div>
);

const Home = () => {

const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);

return (



  <div name='home' className='w-full bg-[#fdebd3]'> 

    <div className='max-w-[1000px] mx-auto px-8 lg:px-8 py-8 '>
    <br></br> <br></br> <br></br> <br></br> 
    <br></br> <br></br> <br></br> <br></br> 
    <p className='text-[#000000]-600 pl-3 sm:text-pl-0'>Hei, tervetuloa sivullemme</p>
    <br></br>
    <PageHeader title="Toivon askel,"/>
    <PageHeader title="Alkoholistien aikuiset lapset Tampere"/>
    <br></br>
    <PageContent>
    <div className='text-[#000000]-700 text-justify'>
    
    <p>Olemme valtakunnallisen ACA alaisuudessa toimiva, 2023 perustettu pienryhmä joka kokoontuu joka tiistai klo: 18.30 Tampereen Hervannan seurakuntatalolla osoitteessa Lindforsinkatu 7, toinen kerros. Kokouksiin voi osallistua kuka tahansa mutta toivomme että ilmoittaisit tulostasi etukäteen emailla tai WhatsApp chatilla. Toimintamme on ehdottoman luottamuksellista ja se perustuu ACA:n on <a className='underline decoration-[#f9b4ab] 0.5 underline-offset-4' href="https://www.aal.fi/toipumisohjelma/12askelta/" target="_blank" rel="noopener noreferrer" onClick={handleClick}>12 askeleen</a> ja <a className='underline decoration-[#f9b4ab] 0.5 underline-offset-4' href="https://www.aal.fi/toipumisohjelma/12perinnetta/" target="_blank" rel="noopener noreferrer" onClick={handleClick}> 12 perinteen</a> ohjelmaan miehille ja naisille, jotka kasvoivat alkoholistiperheessä tai muutoin toimintahäiriöisessä kodissa.</p>
        </div>
      </PageContent>

      <br></br>
       
       <div className='linkbott pl-6'>
      <Link to='contact' smooth={true} duration={500}>
      <button className='text-[#000000] group border-2 py-3 px-6 my-2 flex items-center hover:bg-[#f5eadc] hover: border-[#f9b4ab]'>
      ota yhteyttä!  
      <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3 ' />
        </span>
      </button> 
      </Link>
    </div>
   </div>
   <br></br>  <br></br>  <br></br>  <br></br>  <br></br>

   </div>  
);
};


export default Home;

