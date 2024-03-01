

/*const PageHeader = ({ title }) => (
    /*<div className=" px-4 max-w-[1000px] w-full"> 
       <div className="sm:text-left">
    */
      /* <div className="max-w-[1000px] mx-auto w-full flex flex-col justify-center h-full ">
   
         <h1 className="text-4xl sm:text-7xl font-bold text-[#778899]">
           {title}
         </h1>
       </div>
   );*/

  
   const PageHeader = ({ title }) => (
    <div className="mx-auto px-4 max-w-[1000px] w-full grid grid-cols-2  gap-8">
     {/*</div> <div className="sm:text-right pb-8 pl-4">*/}
      <div className={`sm:text-center pb-8 ${window.innerWidth <= 768 ? 'pl-4' : ''}`}>
       {/* <p className="text-4xl font-bold text-[#778899] inline border-b-2 border-[#778899]">*/}
        <p className={`text-4xl font-bold text-[#778899] inline ${window.innerWidth > 768 ? 'border-b-2 border-[#778899]' : ''}`}>
          {title}
        </p>
      </div>
    </div>
  );

   const PageContent = ({ children }) => (
     <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
       {children}
     </div>
   );

const yhteys = () => {
  return (
    <div name='home' className='w-full bg-[#ffdb99]'>
      <br></br><br></br>
         <PageHeader title="joitain linkkejä"/>
      

         <br></br>
      <PageContent>
      {/*<div className='py-4 max-w-[700px] text-[#000000]'>*/}
      <div className='text-[#000000]-700 mx-auto'>

      <p className='py-4 inline border-b-2 text-[#008B8B] border-[#778899]'><a href="https://www.aal.fi/"  target="_blank" rel="noopener noreferrer">
        Alkoholistien aikuiset lapset SUumi
      </a> </p> <br></br>


      <p className='py-4 inline border-b-2 text-[#008B8B] border-[#778899]'><a href="https://adultchildren.org/"  target="_blank" rel="noopener noreferrer">
        Adult Children of Alcoholics
      </a> </p>

          </div>
        </PageContent>

        <br></br><br></br><br></br><br></br><br></br>


    </div>
  )
}

export default yhteys