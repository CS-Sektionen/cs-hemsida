import { useRef } from 'react';
import styles from './Documents.module.css';
import './Documents.css';
import { Terminal } from '../components/Terminal';
import { useIsDesktop } from '../hooks/useIsDesktop.ts';

const folders = [
  {
    href: 'https://drive.google.com/drive/folders/18nn8CXZPUMXxE5nWr9930r6BYqNYgvht?usp=sharing',
    icon: '/images/xp-icons/folder-closed.ico',
    alt: 'Styrelsesammanträde',
    label: 'Styrelse- sammanträden',
  },
  {
    href: 'https://drive.google.com/drive/folders/1-cmVgLf14crox7Jitd8yGbUqtaiL9IC4?usp=sharing',
    icon: '/images/xp-icons/folder-closed.ico',
    alt: 'Stormöten',
    label: 'Stormöten',
  },
  {
    href: 'https://drive.google.com/drive/folders/1u_CjUKSgANE8ZdxMW_SGv2Og3Hlv2m8C?usp=sharing',
    icon: '/images/xp-icons/file.ico',
    alt: 'Stadgar',
    label: 'Stadgar',
  },
  {
    href: 'https://drive.google.com/drive/folders/1QoDMtBfuEvcVum74LFe59QzdkXYjRi_n?usp=sharing',
    icon: '/images/xp-icons/file.ico',
    alt: 'Reglemente',
    label: 'Reglemente',
  },
  {
    href: 'https://drive.google.com/drive/folders/1D-7AAxa5SShZ9lf0nW7WN6yVvMkwNmiq?usp=sharing',
    icon: '/images/xp-icons/folder-closed.ico',
    alt: 'Verksamhetsberättelser',
    label: 'Verksamhets- berättelser',
  },
  {
    href: 'https://drive.google.com/drive/folders/1seENi5IkYojOc9z5U_A4ocRklgCgvbzr?usp=sharing',
    icon: '/images/xp-icons/folder-closed.ico',
    alt: 'Arkiv',
    label: 'Arkiv',
  },
  {
    href: 'https://drive.google.com/drive/folders/0B9hIrqCGZj9zb1R6d2NNeFd0Mnc?resourcekey=0-eDOSiVA4_C86Rcp4E_Gcxg&usp=sharing',
    icon: '/images/xp-icons/folder-closed.ico',
    alt: 'Pluggmatrial',
    label: 'Pluggmatrial',
  },
];

export function Documents() {
  const screenRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useIsDesktop();

  return (
    <>
      <div className={`heading-frame ${styles['heading-frame']}`}>
        <div className={`heading-card ${styles['heading-card']}`}>
          <h1>Dokument</h1>
          <div className={styles['heading-card-content']}>
            <h2>Arkiverat material och information</h2>
            {isDesktop ? (
            <p>
              När dagarna är långa och det inte finns mycket annat att göra går det alltid att fördriva tiden i CS
              egna dator. Lite gammal må den vara men innehållar mycket arkiverat material från sektionen. Du kan
              hitta allt från mötesprotokoll, stadgar, reglemente, och andra trevligheter. Söker du ett dokument
              som ej finns att hitta på denna sida så kan du kontakta någon i styrelsen. På grund av lågt minne på
              denna relik skickas du vidare till CS drive då du går in i någon av mapparna.
            </p>
             ) : (
            <p>
              Här kan du hitta allt från mötesprotokoll, stadgar, reglemente, och andra trevligheter. Söker du ett dokument
              som ej finns att hitta på denna sida så kan du kontakta någon i styrelsen.
            </p>
             )}
          </div>
        </div>
        <svg className="diagonal-line" preserveAspectRatio="none">
          <line x1="0" y1="85%" x2="100%" y2="100%" stroke="var(--border-blue)" strokeWidth={4} vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <main id="main" className={styles.main}>
        {isDesktop ? (
        <div id="computer-container">
          <div id="computer-frame">
            <div id="computer-screen" ref={screenRef}>
              <div id="folder-grid">
                {folders.map((folder) => (
                  <a href={folder.href} target="_blank" rel="noreferrer" key={folder.label}>
                    <button className="folder-button">
                      <img src={folder.icon} alt={folder.alt} />
                      <p>{folder.label}</p>
                    </button>
                  </a>
                ))}
              </div>

              <Terminal screenRef={screenRef} />

              <div id="computer-footer">
                <img src="/images/windows-xp-icon.png" alt="windows logga" />
              </div>
            </div>
            <div id="post-it">
              <p>Lösen: password123</p>
            </div>
          </div>
          <img id="keyboard" src="/images/keyboard.png" alt="bild på tangentbord" />
        </div>
        ) : (
          <div className={styles['document-cards']}>
            {folders.map((folder) => (
              <a
                key={folder.label}
                href={folder.href}
                target="_blank"
                rel="noreferrer"
                className={`small-info-card ${styles['document-card']}`}
              >
                <img src={folder.icon} alt={folder.alt} />
                <span>{folder.label.replace(/- /g, '')}</span>
              </a>
            ))}
            <h3>Tips: Gå in på denna sida på en dator!</h3>
          </div>
        )}
      </main>
    </>
  );
}
