



const Footer = ({ title }) => (
    <div className="bg-[#fdebd3] italic font-light text-center text-[#679186]">
        <br></br><br></br>
       <em>{title}</em> 
        <br></br><br></br><br></br><br></br>
    </div>
)

const PageHeader = ({ title }) => (
  <div className="mx-auto px-4 max-w-[1000px] w-full grid grid-cols-2 gap-8">
    <div className="sm:text-right pb-8">
      <p className="text-4xl font-bold text-[#679186] inline border-b-2 border-[#f9b4ab]">
        {title}
      </p>
    </div>
  </div>
);

const Contact = () => {
 
  return (



    <div style={{ minHeight: '100vh' }} className='bg-[#fdebd3] flex flex-col justify-between'>
    <div>
    <div name='contact' className='w-screen h-screen flex justify-center items-center p-4'>
        <br></br><br></br>
        <br></br><br></br>
       <form action={`https://getform.io/f/${import.meta.env.VITE_REACT_APP_GETFORM_ID}`} method='POST' className='flex flex-col mx-auto max-w-[600px] w-full'>
            <div className='pb-4'>
                <PageHeader title="Yhteydenotto"/>
                <p className='text-[#000000] text-justify py-4'>Jos haluat osallistua ryhmän kokoukseen, lähetä meille yhteydenotto alla olevalla lomakkeella tai Whatsappilla</p>
                </div>
                <input className='bg-white' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email' />
                <textarea className='bg-white' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-[#679186] group border-2 px-6 py-3 my-8 hover:bg-[#f5eadc] hover: border-[#f9b4ab] mx-auto flex items-center'>Nähdään pian!</button>
        </form>
       
        </div> 
       {/* <a
        href="https://wa.me/number here"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>*/}
         </div>
       
        <Footer title="This website was made dysfunctionally by an @Adult children of Alcoholics"/>

      </div>
  
  )
}

export default Contact