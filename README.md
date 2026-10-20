# CS-sektionens hemsida

Hemsidan för CS-sektionen vid Umeå universitet — [cssektionen.se](https://cssektionen.se)

Gamla hemsidan hittas vid — [legacy-cs-hemsida](https://github.com/CS-Sektionen/legacy-cs-hemsida)

## Struktur

Hemsidan är byggd med React, TypeScript och Vite.

- `src/`: sidor, komponenter och stilar
- `public/`: bilder och andra filer som kopieras rakt in i builden, bland annat
  `.htaccess` med Apache-konfigen för servern
- `deploy/`: extra konfig som bara används på dev.cssektionen.se

## Komma igång

```bash
npm install
npm run dev
```

Sidan kommer upp på `http://localhost:5173`.

## Branches

- **`dev`** — standardbranch. Allt arbete bör göras här. Publiceras på
  [dev.cssektionen.se](https://dev.cssektionen.se) för testning, inte på hemsidan.
- **`main`** — det som ligger live just nu.

Jobba aldrig direkt i `dev`. Skapa en egen branch, och gör en pull request mot `dev`:

```bash
git checkout dev
git pull
git checkout -b fix/short-description
```

På varje pull request körs build och lint automatiskt. Är builden röd går den inte att merga.

Hur vi jobbar i repot står i [CONTRIBUTING](CONTRIBUTING.md).

## Publicering

**Att merga `dev` → `main` publicerar sidan direkt.** GitHub Actions kör en build och laddar
upp allt till Loopia via FTP. Läs igenom hela diffen i pull requesten innan du mergar.

Sidan körs på Loopias Unix-plattform (Apache). `public/.htaccess` skickar alla adresser
som inte är riktiga filer till React-appen, så nya sidor behöver bara läggas till i `src/App.tsx`.

Varje merge till `dev` publiceras på samma sätt till
[dev.cssektionen.se](https://dev.cssektionen.se). Kolla att allt ser rätt ut där innan
du gör en pull request från `dev` till `main`. Dev-sidan ska inte synas i sökmotorer.

Använd alltid **merge commit** när du mergar `dev` → `main`. Aldrig squash eller rebase:
det får brancherna att glida isär permanent, och varje kommande release visar då upp gamla
ändringar igen.

Att `main` ligger en commit före `dev` efter en release är normalt. Det är själva
merge-commiten. **Merga aldrig tillbaka `main` in i `dev`** för att "synka" dem.

Behöver du fixa något akut som redan ligger live, utgå från `dev` och publicera direkt
efteråt:

```bash
git checkout dev
git pull
git checkout -b hotfix/short-description
# fixa, pusha, PR mot dev, merga
# därefter direkt: PR från dev till main, merga → publiceras
```
