import React from 'react';

const PageHeader = ({ title }) => (
  <div className="mx-auto px-4 max-w-[1000px] w-full gap-8">
    <div className="sm:text-left pb-2 md:text-center">
      <p className="text-4xl font-bold text-[#679186] inline border-b-2 border-[#f9b4ab] sm:text leading-normal">
        {title}
      </p>
    </div>
  </div>
);
const PageContent = ({ children }) => (
  <div className="mx-auto max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
    {children}
  </div>
);

const About = () => {
  return (
  <div name="about" className="w-full bg-[#fdebd3]">

  <PageHeader title="Adult Children of Alcoholics" />
  <PageContent>
    <div className='text-[#679186] sm:text-right text-4xl font-bold'>
      <p>on maailmanlaajuinen <br></br>ohjelma, joka perustuu <br></br>12 askeleeseen ja <br></br>12 perinteeseen.</p>
    </div>
    <div>
      <p className="text-[#000000] text-justify text-base md:text-lg">Ohjelma on tarkoitettu ihmisille jotka kasvoivat alkoholistisissa tai toimintahäiriöisissä 
            perheissä ja jotka haluavat eheytyä ja tiedostaa itselleen tuhoisat käyttäytymismallinsa jakamalla
            keskenään kokemuksensa, voimansa ja toivonsa. Toiminnan periaatteita ovat vapaaehtoisuus, anonymiteetti 
            ja luottamuksellisuus. Ohjelma tunnetaan Suomessa myös nimellä Alkoholistien aikuiset lapset.
            Jokaisella ryhmällä on vain yksi ensisijainen tarkoitus - saattaa sanomansa vielä kärsivälle aikuiselle lapselle.
            ACA ei halua syyttää ketään vaan pikemminkin ymmärtää alkoholismin tai toimintahäiriön luonne perheen sairautena 
            ja täten vapautua kasvamaan ja ottamaan vastuu elämästä. Ryhmissä jäsenet jakavat kokemuksensa elämästä alkoholismin 
            tai muun toimintahäiriön vaikutuspiirissä.
            ACA -ryhmät ovat pääsääntöisesti kaikille avoimia (poislukien esim. nimenomaan naisille suunnatut ryhmät). 
            Ainoa vaatimus ACA:n jäsenyydelle on halu toipua vaikutuksista, jotka kasvaminen alkoholistisessa tai muulla 
            tavoin toimintahäiriöisessä perheessä aiheutti.
            ACA ei ole sitoutunut mihinkään kirkkokuntaan, uskontoon, poliittiseen ryhmittymään, järjestöön 
            tai yhteiskunnalliseen laitokseen. Tervetuloa mukaan toimintaan!  </p>
        </div>
      </PageContent>
      <br></br><br></br> 
    </div> 
  );
};

export default About;

