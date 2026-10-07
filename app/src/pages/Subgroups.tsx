import { Link } from 'react-router-dom';
import styles from './Subgroups.module.css';
import { MemberCard } from '../components/MemberCard';
import { Reveal } from '../components/Reveal';

const subgroups = [
  {
    image: '/images/lan-by-cs-logo.png',
    imageAlt: 'Bild på LANbyCS logga',
    title: 'LANbyCS',
    description: (
      <>
        LANbyCS är en projektgrupp som håller LAN-partyn för CS-sektionen och övriga studenter.
        Vi är en grupp som brinner för gaming och vill skapa en rolig och social upplevelse för alla deltagare.
        Vi anordnar LAN varje vår- och hösttermin, och ibland samarbetar vi med andra campus runtom i Sverige för att skapa Cross-Country LAN.
        Vår vision är att skapa en gemenskap kring gaming och ge studenterna möjlighet att träffas, spela tillsammans och ha kul!
      </>
    ),
  },
  {
    image: '/images/join-computer-science.jpg',
    imageAlt: 'Bild på DiCS logga',
    title: 'DiCS (Dataintresserade i CS)',
    description: (
      <>
        Äntligen så har undergruppen DiCS dragit igång! DiCS är en undergrupp som vill främja intresset för data och programmering bland medlemmarna i sektionen.
        Undergruppen kommer att anordna olika aktiviteter och evenemang som är relaterade till data och programmering, såsom workshops, föreläsningar och hackathons.
        DiCS vill skapa en gemenskap kring data och programmering och ge medlemmarna möjlighet att lära sig mer om ämnet. Har du kanske ett hobbyprojekt som du vill
        genomföra tillsammans med andra och vill ha hjälp med resurser? Då är DiCS undergruppen för dig!
      </>
    ),
  },
  {
    image: '/images/macs-logo.png',
    imageAlt: 'Bild på märkesgruppens logga',
    title: 'MaCS (Märken av CS)',
    description: (
      <>
        MaCS är en undergrupp som ansvarar för att designa och märken till CS-sektionen.
        Har du en idé på ett märke som du vill att sektionen ska ha? Då är det MaCS du ska kontakta!
        De ser till att sektionen har riktigt snygga märken att sälja på märkestisdagen.
      </>
    ),
  },
  {
    image: '/images/gib-logo.png',
    imageAlt: 'Bild på GIBs logga',
    title: 'Gäris & Ickebinäris (GIB)',
    description: (
      <>
        Gäris &amp; Ickebinäris (GIB) är en undergrupp som arbetar för att främja jämställdhet och inkludering inom CS-sektionen.
        De riktar sig främst till kvinnor och ickebinära personer, men alla är välkomna på deras aktiviteter.
      </>
    ),
  },
];

const projectLeads = [
  {
    image: '/images/board/undated/vice-chair.jpg',
    imageAlt: 'LANbyCS projektledare',
    name: 'Lukas Walther',
    role: 'LANbyCS',
    description: (
      <>
        Jag heter Lukas! Datavetare på mitt tredje år, och jag är även vice ordförande för sektionen.
        <br />
        <br />
        Som projektledare är min uppgift att anordna minst ett LAN per år, efter möjlighet, samt sammarbeta med
        Styrelsen för att främja studentlivet på sektionen. Rollen innebär mycket kommunikation mellan Styrelsen,
        projektgruppen, NTK samt eventuella andra organisationer kopplade till eventet, som exempelvis sponsorer.
      </>
    ),
  },
  {
    image: '/images/alvar-dics.jpg',
    imageAlt: 'Projektledare för DiCS',
    name: 'Alvar Sjögren',
    email: 'dics@cssektionen.se',
    role: 'DiCS',
    description: (
      <>
        Hej! Jag heter Alvar och går tredje året på ID. Jag har nyss tagit över rollen som projektledare för DiCS,
        så just nu försöker jag skaffa mig en lägesbild om hur vi ska jobba och vilka som är intresserade av att vara med.
        Som projektledare är min uppgift att hålla kontakt med styrelsen och ordna DiCS-aktiviteter.
        <br />
        <br />
        Jag håller också ett öga på hemsidan. På fritiden labbar jag gärna med min hemmaserver eller 3D-printar något
        helt onödigt. Jag har också en svag punkt för torra ordvitsar. Har du någon idé om vad DiCS ska hålla på med,
        vill du engagera dig i undergruppen, eller har du bara en riktigt torr ordvits? Hör av dig, jag finns både på
        mail och i CS-discorden!
      </>
    ),
  },
  {
    image: '/images/emie.jpg',
    imageAlt: 'Ansvarig för MaCS',
    name: 'Emelie Lindahl',
    email: 'emielindahl@gmail.com',
    role: 'MaCS',
    description: (
      <>
        Har du en idé på ett märke som du vill att sektionen ska ha? Då är det mig du ska kontakta! Jag är ansvarig
        för märkesgruppen och ser till att sektionen har riktigt snygga märken att sälja på märkestisdagen.
      </>
    ),
  },
  {
    image: '/images/placeholder.jpg',
    imageAlt: 'GIB ordförande',
    name: 'Vakant',
    email: 'gibdata2@gmail.com',
    role: 'GIB',
    description: (
      <>
        Ansvarig för Gäris & Ickebinäris (GIB) är vakant. Om du vill engagera dig i undergruppen eller har frågor om
        deras verksamhet, kontakta styrelsen för vidare hänvisning.
      </>
    ),
  },
];

export function Subgroups() {
  return (
    <>
      <div className={`heading-frame ${styles['heading-frame']}`}>
        <div className={`heading-card ${styles['heading-card']}`}>
          <h1>Undergrupper</h1>
          <div className={styles['heading-card-content']}>
            <h2>Hur blir jag engagerad?</h2>
            <p>
              {' '}
              Undergrupper är grupper som är en del av CS-sektionen och som arbetar med olika projekt och aktiviteter.
              De har som syfte att engagera medlemmar i sektionen och skapa en gemenskap kring olika intressen. 
              Vill du starta en undergrupp eller engagera dig i någon av de befintliga undergrupperna?
            </p>
          </div>
        </div>
        <svg className="diagonal-line" preserveAspectRatio="none">
          <line x1="0" y1="85%" x2="100%" y2="100%" stroke="var(--border-blue)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <main id="main">
        <div className={styles['existing-subgroups']}>
          {subgroups.map((group) => (
            <Reveal key={group.title} className={styles.subgroup}>
              <img src={group.image} alt={group.imageAlt} />
              <div className={styles['subgroup-text']}>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles['project-lead-cards']}>
          <h2>Projektledare</h2>
          {projectLeads.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </Reveal>

        <Reveal className={`program-card ${styles['program-card']}`}>
          <div className={styles['create-subgroup']}>
            <div className="create-subgroup-text">
              <h3>Vill du starta en undergrupp?</h3>
              <p>
                Vad roligt! Om du har en idé på en undergrupp som du tycker borde finnas så vill vi höra om den.
                Kontakta ordförande för mer information om hur det fungerar att starta en undergrupp och vilket
                stöd sektionen kan ge dig.
              </p>
            </div>
            <Link className="filled-button" to="/kontakt#styrelsen">
              Kontaktuppgifter
            </Link>
          </div>
        </Reveal>
      </main>
    </>
  );
}
