import { data } from "../data/data.js";




const PageHeader = ({ title }) => (
  <div className="mx-auto px-4 max-w-[1000px] w-full grid grid-cols-2 gap-8">
    <div className="sm:text-right pb-8">
      <p className="text-4xl font-bold text-[#778899] inline border-b-2 border-[#778899]">
        {title}
      </p>
    </div>
    <div></div>
  </div>
);



const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' className='w-full md:h-screen  py-35 text-[#F0FFFF] bg-[#ffdb99]'>


    {/*<a href="https://www.aal.fi/" target="_blank" rel="noopener noreferrer">
      alkoholistien aikuiset lapset SUomi
  </a>*/} 

      
       
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-2 text-[#008B8B] border-[#778899]'>
             <PageHeader title="joitain linkkejä"/>
          </p>
        </div>

{/* container for projects   <div className='container mx-auto max-w-[1000px] px-4 lg:px-8 py-8'> */}
<div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 mx-auto">

          
          {/* Gird Item */}
          {project.map((item, index) => (
            <div className="zzz">
   <a href={item.linkki} target="_blank">
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#778899] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
    >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      {/* <div className="pt-8 text-center ">
        eslint-disable-next-line */}
  
        {/* eslint-disable-next-line */}
           {/*<a href={item.linkki} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#ffdb99] text-[#778899] font-bold text-lg"
          >
            Linkki
          </button>
        </a> 
      </div>*/}
    </div>
  </a> 
  </div>
))}


</div>
      </div>
      <br></br><br></br><br></br><br></br>
    </div>

  );
};

export default Work;