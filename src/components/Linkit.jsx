
/*import AL from '../assets/acalogo.jpg';
import ACA from '../assets/aca.jpg';
import ACA2 from '../assets/acalogo2.jpg';
import ACANAV from '../assets/acanav.jpg';
import JKZ from '../assets/JKZ.png';*/
/*import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"

  const PageHeader = ({ title }) => (
    <div className="mx-auto px-4 max-w-[1000px] w-full grid grid-cols-2 gap-8">
      <div className="sm:text-right pb-8 pl-4">
        <p className="text-4xl font-bold text-[#778899] inline border-b-2 border-[#778899]">
          {title}
        </p>
      </div>
      <div></div>
    </div>
  );*/



  const PageHeader = ({ title }) => (
    <div className="mx-auto px-4 max-w-[1000px] w-full">
      <div className={`sm:text-center pb-8 ${window.innerWidth <= 768 ? 'pl-4' : ''}`}>
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

const Linkit = () => {
    return (
      <div name='Linkit' className='w-full bg-[#ffdb99] text-[#008B8B]'>
        {/* Container */}
        <div className='container mx-auto max-w-[1000px] px-4 lg:px-8 py-8 '>
        <PageHeader title="Linkkejä ACA aineistoihin"/>
                <br></br>
                <PageContent>
                <div className='py-4 max-w-[700] text-[#000000]'>
                <p className='py-4 inline border-b-1'><a href="https://www.aal.fi/">ACA Suomi</a></p>
                <p className='py-4'><a href="https://adultchildren.org/">ACA World</a></p>
                <p className='py-4'><a href="https://fi.wikipedia.org/wiki/Tietoisuustaito">Mindfullness</a> </p>
                <p className='py-4'><a href="https://youtu.be/7WnZisfYMsE?si=qyrIhsAPSFnE-r1K">5-minute Guided Mediation with Jon Kabat-Zinn</a></p>
                </div>
                </PageContent>
                <br></br>

                {/*<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                      <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                          <img className='w-20 mx-auto' src={AL} alt="HTML icon" />
                          <p className='my-4'>ACA</p>
                      </div>
                      <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                          <img className='w-20 mx-auto' src={ACA} alt="HTML icon" />
                          <p className='my-4'>Toivon askel</p>
                      </div>
                      <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                          <img className='w-20 mx-auto' src={ACA2} alt="HTML icon" />
                          <p className='my-4'>ACA WWW</p>
                      </div>
                      <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                          <img className='w-20 mx-auto' src={ACANAV} alt="HTML icon" />
                          <p className='my-4'>ACANAV</p>
                      </div>
                      <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                          <img className='w-20 mx-auto' src={JKZ} alt="HTML icon" />
                          <p className='my-4'>5-minute Guided Mediation with Jon Kabat-Zinn</p>
                      </div>
                  </div> */}
        </div>
      </div>
    );
  };
  
  export default Linkit;