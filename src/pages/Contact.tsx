import { useState, type FormEvent } from 'react';
import styles from './Contact.module.css';
import { ContactCard } from '../components/ContactCard';
import { Reveal } from '../components/Reveal';
import { scrollToId } from '../hooks/useScrollToId';

const categories = [
  {
    id: 'styrelsen',
    title: 'Styrelsen',
    description: 'Är du osäker på vem du ska kontakta kan du alltid skicka ett DM på instagram, eller kontakta kommunikationsutskottet för vidare hänvisning. Annars hittar du kontaktuppgifter till hela styrelsen här.',
    contact: [
      {
        name: 'Ture Åström Säfsten',
        email: 'ordf@cssektionen.se',
        role: 'Ordförande',
      },
      {
        name: 'Cedric Strand',
        email: 'ekonomi@cssektionen.se',
        role: 'Kassör',
      },
      {
        name: 'Lukas Walther',
        email: 'vice@cssektionen.se',
        role: 'Vice Ordförande',
      },
      {
        name: 'Kevin Molin',
        email: 'sekreterare@cssektionen.se',
        role: 'Sekreterare',
      },
      {
        name: 'Vakant',
        email: 'arbetsmarknad@cssektionen.se',
        role: 'Arbetsmarknadsutskottet',
      },
      {
        name: 'Manar Al-Latifi',
        email: 'kommunikation@cssektionen.se',
        role: 'Kommunikationsutskottet',
      },
      {
        name: 'Elias Svensson',
        email: 'studiesocial@cssektionen.se',
        role: 'Studiesociala utskottet',
      },
      {
        name: 'Ellinor Rosenberg',
        email: 'utbildning@cssektionen.se',
        role: 'Utbildningsbevakningsutskottet',
      },
      {
        name: 'Hannes Svonni',
        email: 'cego@cssektionen.se',
        role: 'C-ego',
      },
      {
        name: 'Hannes Nilsson',
        email: 'dvego@cssektionen.se',
        role: 'DV-ego',
      },
      {
        name: 'Lukas Melin',
        email: 'idego@cssektionen.se',
        role: 'ID-ego',
      },
    ],
  },
  {
    id: 'undergrupper',
    title: 'Undergrupper',
    description: 'Är du nyfiken på att vara med i en undergrupp? Har du frågor om vad undergrupperna arbetar med eller har du ett förslag på något event du skulle vilja att de höll i? Här finns kontaktuppgifter till dem som ansvarar för våra undergrupper.',
    contact: [
      {
        name: 'Lukas Walther',
        role: 'LANbyCS projektledare',
        email: 'lanbycs@gmail.com',
      },
      {
        name: 'Alvar Sjögren',
        email: 'dics@cssektionen.se',
        role: 'DiCS projektledare',
      },
       {
        name: 'Emelie Lindahl',
        role: 'Ansvarig märkesgruppen',
        email: 'emielindahl@gmail.com',
      },
      {
        name: 'Vakant (Tidigare Ellinor Rosenberg)',
        email: 'gibdata2@gmail.com',
        role: 'GIB ordförande',
      },
    ],
  },
]

export function Contact() {
  const [formStatus, setFormStatus] = useState<string | null>(null);

  // contact.php redirects to /kontakt?formular=skickat or ?formular=fel.
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      const response = await fetch(form.action, { method: 'POST', body: new FormData(form) });
      setFormStatus(new URL(response.url).searchParams.get('formular') ?? 'fel');
    } catch {
      setFormStatus('fel');
    }
    scrollToId('#motioner');
  }

  return (
    <div className={styles.page}>
      <div className={`heading-frame ${styles['heading-frame']}`}>
        <div className={`heading-card ${styles['heading-card']}`}>
          <h1>Kontakt</h1>
          <div className={styles['heading-card-content']}>
            <p>
              {' '}
              Har du frågor, funderingar eller förslag? Kontakta oss gärna! Ingen fråga är för liten eller för stor, och vi svarar så fort vi kan.
            </p>
          </div>
        </div>
        <svg className="diagonal-line" preserveAspectRatio="none">
          <line x1="0" y1="85%" x2="100%" y2="100%" stroke="var(--border-blue)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <main id="main">        
        <div className={styles['contact-subgroup']}>
          <div className={styles['board-squares']}>
            {categories.map((category) => (
              <Reveal className={styles['board-category']} key={category.title} id={category.id}>
                <div className={styles['category-description']}>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>

                <div className={styles['contact-cards']}>
                  {category.contact.map((member) => (
                    <ContactCard key={member.name + member.role} {...member} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className={styles['form-and-text']} id="motioner">
          <h2>Motioner och förslag</h2>
          <p>
            Har du ett förslag eller en motion som du vill att styrelsen ska ta upp på ett styrelsemöte? Fyll i formuläret nedan så kommer det att skickas till kommunikationsutskottet som vidarebefordrar det till styrelsen.
          </p>

          <div className={`contact-container ${styles['contact-container']}`}>
            {formStatus === 'skickat' ? (
              <>
                <p>Tack! Ditt meddelande har skickats till kommunikationsutskottet.</p>
                <div className={styles['submit-button']}>
                  <button type="button" className="filled-button" onClick={() => setFormStatus(null)}>
                    Skicka ett nytt meddelande
                  </button>
                </div>
              </>
            ) : (
              <>
                {formStatus === 'fel' && (
                  <p role="alert">Något gick fel och meddelandet skickades inte. Försök igen, eller mejla motioner@cssektionen.se direkt.</p>
                )}

                <form action="/contact.php" method="post" onSubmit={handleSubmit}>
                  <label htmlFor="name">För- och efternamn</label>
                  <input type="text" id="name" name="name" autoComplete="name" maxLength={100} placeholder="Ditt namn..." required />

                  <label htmlFor="email">Mejladress</label>
                  <input type="email" id="email" name="email" autoComplete="email" maxLength={254} placeholder="Din mejladress..." required />

                  <label htmlFor="program">Program</label>
                  <select id="program" name="program" required defaultValue="">
                    <option disabled value="">
                      Välj ditt program
                    </option>
                    <option>Civiling. Interaktion &amp; Design</option>
                    <option>Civiling. Datavetenskap</option>
                    <option>Kandidatprogrammet i Datavetenskap</option>
                    <option>Masterprogrammet i Datavetenskap</option>
                    <option>Masterprogrammet i AI</option>
                  </select>

                  <label htmlFor="topic">Ärende</label>
                  <select id="topic" name="topic" required defaultValue="">
                    <option disabled value="">
                      Vad gäller ditt ärende?
                    </option>
                    <option>Motion till styrelsemöte</option>
                    <option>Fråga eller fundering</option>
                    <option>Förslag</option>
                    <option>Annat</option>
                  </select>

                  <label htmlFor="message">Meddelande</label>
                  <textarea id="message" name="message" maxLength={5000} placeholder="Meddelande..." required></textarea>

                  {/* Honeypot, see contact.php */}
                  <div className={styles['honeypot']} aria-hidden="true">
                    <label htmlFor="website">Lämna tomt</label>
                    <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className={styles['submit-button']}>
                    <div className="filled-button">
                      <input type="submit" value="Skicka" />
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </main>
    </div>
  );
}
