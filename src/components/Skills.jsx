{/*import React from 'react';
import HTML from '../assets/html.png';
*/}

  const PageHeader = ({ title }) => (
    <div className="mx-auto px-4 max-w-[1000px] w-full">
      <div className={`sm:text-center pb-8 ${window.innerWidth <= 768 ? 'pl-4' : ''}`}>
        <p className={`text-4xl font-bold text-[#679186] inline ${window.innerWidth > 768 ? 'border-b-2 border-[#f9b4ab]' : ''}`}>
          {title}
        </p>
      </div>
    </div>
  );
  
  const PageContent = ({ children }) => (
    <div className="mx-auto max-w-[1000px] text-[#000000] w-full grid sm:grid-cols-2 gap-8 px-4">
      {children}
    </div>
  );
  
const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#fdebd3]'>
      {/* Container */}
   
     {/*<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>*/}
   
      <div className='container mx-auto max-w-[1000px] px-4 lg:px-8 py-8'>
       
              <PageHeader title="12 ASKELTA"/>
              <br></br>
              <PageContent>
              
              <p className='py-1 text-justify'>1. Myönsimme, että olimme voimattomia alkoholismin tai perheen muun toimintahäiriön vaikutusten edessä, että elämämme oli muuttunut hallitsemattomaksi. </p>
              <p className='py-1 text-justify'>2. Päädyimme uskomaan, että jokin itseämme suurempi Voima voisi palauttaa mielenterveytemme.</p>
              <p className='py-1 text-justify'>3. Teimme päätöksen luovuttaa tahtomme ja elämämme Jumalan huomaan, niin kuin Jumalan käsitämme. </p>
              <p className='py-1 text-justify'>4. Teimme itsestämme perusteellisen ja pelottoman moraalisen inventaarion.</p>
              <p className='py-1 text-justify'>5. Myönsimme Jumalalle, itsellemme ja jollekin toiselle ihmiselle vääryyksiemme täsmällisen luonteen.</p>
              <p className='py-1 text-justify'>6. Olimme täysin valmiit antamaan Jumalan poistaa kaikki nämä luonteen puutteet.</p>
              <p className='py-1 text-justify'>7. Nöyrästi pyysimme Jumalaa poistamaan vajavuutemme.</p>
              <p className='py-1 text-justify'>8. Teimme luettelon kaikista vahingoittamistamme henkilöistä ja tulimme halukkaiksi hyvittämään heitä kaikkia.</p>
              <p className='py-1 text-justify'>9. Hyvitimme suoraan näitä ihmisiä milloin vain mahdollista, ellei sen tekeminen olisi vahingoittanut heitä tai muita.</p>
              <p className='py-1 text-justify'>10. Jatkoimme henkilökohtaisen inventaarion tekemistä ja kun olimme väärässä, myönsimme sen viipymättä.</p>
              <p className='py-1 text-justify'>11. Yritimme rukouksen ja meditaation avulla parantaa tietoista yhteyttämme Jumalaan, niin kuin Jumalan käsitämme, rukoillen ainoastaan tietoa Jumalan tahdosta meidän suhteemme ja voimaa sen toteuttamiseen.</p>
              <p className='py-1 text-justify'>12. Koettuamme hengellisen heräämisen näiden askelten tuloksena yritimme saattaa tämän sanoman toisille, jotka vielä kärsivät, sekä harjoittaa näitä periaatteita kaikissa toimissamme.</p>
              
              </PageContent>
              <br></br><br></br>
          </div>
              <br></br><br></br>
              

        {/* <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#679186] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
  </div> */}
      </div>
  
   
  );
};

export default Skills;