import { AlertTriangle, ExternalLink } from "lucide-react";

const SourceLink = ({ url, text }: { url: string; text: string }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-primary hover:text-primary/80 underline text-sm"
  >
    {text}
    <ExternalLink className="h-3 w-3" />
  </a>
);

const ArticleContent = () => {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="prose prose-lg max-w-none">
        
        {/* Intro */}
        <p className="text-lg text-muted-foreground leading-relaxed">
          Veel mensen willen een klein huis op eigen erf: voor ouders, (volwassen) kinderen, of iemand die zorg nodig heeft. 
          Tot nu toe zit je dan vaak in een doolhof van bestemmingsplannen, vergunningen en uitzonderingen.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Vanaf 2026 komt er meer ruimte. Met de <strong>Wet versterking regie volkshuisvesting (Wvrv)</strong> en een nieuw 
          Besluit daaronder wil de overheid het mogelijk maken om onder voorwaarden vergunningsvrij een mantelzorgwoning of 
          familiewoning op eigen erf te plaatsen.
          <span className="block mt-1 text-sm">
            <SourceLink url="https://www.houtbouwholland.nl" text="Houtbouw Holland" />
          </span>
        </p>

        <div className="bg-muted/50 rounded-xl p-6 my-8">
          <h3 className="text-xl font-semibold mb-4">Op deze pagina krijg je een actuele samenvatting (stand: december 2025):</h3>
          <ul className="space-y-2 text-foreground/80">
            <li>wat de Wet versterking regie volkshuisvesting precies is;</li>
            <li>welke plannen er liggen voor mantelzorg- en familiewoningen op eigen erf;</li>
            <li>hoe de vergunningsvrije regels er waarschijnlijk uit gaan zien;</li>
            <li>wat nu al geldt onder de Omgevingswet en de bruidsschat;</li>
            <li>hoe jij je plan slim kunt voorbereiden richting 2026.</li>
          </ul>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Belangrijk</p>
              <p className="text-amber-700 dark:text-amber-300">
                De grote lijnen liggen vast, maar een deel is nog ontwerp / in behandeling bij de Eerste Kamer en in besluiten. 
                Ik geef dus steeds aan wat nu al geldt, wat voorgesteld is en wat nog kan verschuiven.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            1. Stand van zaken: waar staan we eind 2025?
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
            1.1 De Wet versterking regie volkshuisvesting
          </h3>

          <p>
            De Wet versterking regie volkshuisvesting geeft Rijk, provincies en gemeenten extra instrumenten om te sturen op 
            hoeveel, waar en voor wie er wordt gebouwd, met als doel ieder jaar ca. 100.000 woningen te realiseren, waarvan 2/3 betaalbaar.
            <span className="block mt-1 text-sm">
              <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
            </span>
          </p>

          <p>
            Het wetsvoorstel is op 3 juli 2025 door de Tweede Kamer aangenomen.
            <span className="block mt-1 text-sm">
              <SourceLink url="https://eerstekamer.nl" text="eerstekamer.nl" />
            </span>
          </p>

          <p>
            De wet ligt nu (eind 2025) bij de Eerste Kamer, mét een aparte novelle om een paar juridisch problematische 
            amendementen te repareren (o.a. over voorrang voor statushouders).
            <span className="block mt-1 text-sm">
              <SourceLink url="https://rijksoverheid.nl" text="rijksoverheid.nl" /> | <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
            </span>
          </p>

          <p className="font-medium mt-4">Het doel blijft:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>meer regie op woningbouw;</li>
            <li>kortere procedures;</li>
            <li>en extra ruimte voor bijzondere woonvormen, zoals mantelzorg- en familiewoningen op eigen erf.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
            1.2 Het onderliggende Besluit (ontwerp)
          </h3>

          <p>
            De details over vergunningsvrij bouwen op eigen erf staan niet in de wet zelf, maar in het 
            <strong> Besluit versterking regie volkshuisvesting</strong> (AMvB):
          </p>

          <p>
            Dit ontwerpbesluit is in april 2025 opnieuw in internetconsultatie geweest.
            <span className="block mt-1 text-sm">
              <SourceLink url="https://rijksoverheid.nl" text="rijksoverheid.nl" />
            </span>
          </p>

          <p>
            Daarin staat o.a. dat naast mantelzorgwoningen ook woningen voor eerstegraads familie op eigen erf vergunningsvrij moeten worden.
            <span className="block mt-1 text-sm">
              <SourceLink url="https://rijksoverheid.nl" text="rijksoverheid.nl" /> | <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
            </span>
          </p>

          <p>De consultatie is afgerond; het besluit wordt nu verder uitgewerkt voordat het formeel wordt vastgesteld.</p>

          <div className="bg-muted/50 rounded-lg p-4 mt-4">
            <p className="font-medium">Kortom:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>de richting is duidelijk (meer vergunningsvrij op eigen erf),</li>
              <li>de exacte tekst kan nog iets schuiven, maar de hoofdpunten zijn inmiddels vrij concreet.</li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            2. Tiny house als mantelzorgwoning of familiewoning: wat verandert er?
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
            2.1 Nu al veel mogelijk voor mantelzorgwoning
          </h3>

          <p>Onder de huidige regels (Omgevingswet + "bruidsschat" in het tijdelijk deel van het omgevingsplan):</p>

          <p>
            Een mantelzorgwoning kan in veel gevallen nu al vergunningsvrij worden gebouwd als bijbehorend bouwwerk, 
            mits aan de voorwaarden wordt voldaan.
            <span className="block mt-1 text-sm">
              <SourceLink url="https://iplo.nl" text="Informatiepunt Leefomgeving" />
            </span>
          </p>

          <p>
            De regels zijn grotendeels gebaseerd op de oude Wabo-regeling (vergunningvrije mantelzorgwoning) die is overgezet 
            naar de Omgevingswet. Dat staat beschreven in IPLO-publicaties en VNG-handreikingen.
            <span className="block mt-1 text-sm">
              <SourceLink url="https://omgevingsweb.nl" text="omgevingsweb.nl" /> | <SourceLink url="https://vng.nl" text="vng.nl" />
            </span>
          </p>

          <p className="font-medium mt-4">Belangrijk nu al:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Het bouwwerk moet op het achtererf staan;</li>
            <li>Er geldt een maximale oppervlakte voor bijbehorende bouwwerken;</li>
            <li>
              De woning moet voldoen aan de technische eisen (Bbl: veiligheid, gezondheid, brandveiligheid).
              <span className="block mt-1 text-sm">
                <SourceLink url="https://iplo.nl" text="Informatiepunt Leefomgeving" /> | <SourceLink url="https://vng.nl" text="vng.nl" />
              </span>
            </li>
          </ul>

          <p className="mt-4">
            Een update van oktober 2025 verduidelijkt zelfs dat een mantelzorgwoning ook vergunningsvrij kan zijn als je nét 
            niet aan één van de maatvoeringsregels voldoet: dan gelden vervangende eisen, zodat je niet ineens vergunningplichtig wordt.
            <span className="block mt-1 text-sm">
              <SourceLink url="https://iplo.nl" text="Informatiepunt Leefomgeving" />
            </span>
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
            2.2 Nieuw: familiewoning op eigen erf als aparte categorie
          </h3>

          <p className="font-medium">Wat nieuw is in de ontwerp-regels bij de Wvrv:</p>

          <p>
            Niet alleen mantelzorgwoningen, maar óók familiewoningen voor eerstegraads familie (ouders/kinderen, inclusief 
            adoptie- en pleegrelaties) kunnen vergunningsvrij worden.
            <span className="block mt-1 text-sm">
              <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" /> | <SourceLink url="https://goedverblijven.nl" text="Goed Verblijven" />
            </span>
          </p>

          <p>
            Het gaat nadrukkelijk om wonen op het achtererf bij een bestaande woning, onder duidelijke voorwaarden voor 
            oppervlakte en hoogte.
            <span className="block mt-1 text-sm">
              <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
            </span>
          </p>

          <p>Volgens de officiële uitleg op VolkshuisvestingNederland:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Mantelzorg- en familiewoningen worden gezien als bijbehorende bouwwerken op het achtererf;</li>
            <li>
              Ze worden vergunningsvrij als aan een reeks bebouwings- en stedenbouwkundige voorwaarden wordt voldaan.
              <span className="block mt-1 text-sm">
                <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
              </span>
            </li>
          </ul>

          <p className="mt-4 font-medium text-primary">
            Voor tiny houses betekent dit: een compact huis in de tuin voor ouders, kinderen of pre-mantelzorg schuift 
            van "grijs gebied" naar een erkende vergunningsvrije vorm.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            3. De voorgenomen vergunningsvrije regels op hoofdlijnen
          </h2>

          <p>
            In het ontwerp-Besluit wordt tot in detail uitgewerkt wanneer een mantelzorg- of familiewoning vergunningvrij is. 
            De belangrijkste punten (zoals nu voorgesteld):
            <span className="block mt-1 text-sm">
              <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
            </span>
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">3.1 Waar mag het staan?</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Het moet gaan om een bijbehorend bouwwerk bij een woning (dus op een erf waar al een hoofdwoning staat).</li>
            <li>Het bouwwerk moet op het achtererf van de woning worden geplaatst.</li>
            <li>Op het voorerf kun je dit niet vergunningvrij doen.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">3.2 Voor wie is de woning bedoeld?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Mantelzorgwoning:</strong> voor een zorgbehoevende óf voor de mantelzorger zelf.</li>
            <li>
              <strong>Familiewoning:</strong> voor eerstegraads familie van de bewoners van het hoofdgebouw (ouders, kinderen, 
              adoptieouders/-kinderen, pleegkinderen).
              <span className="block mt-1 text-sm">
                <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" /> | <SourceLink url="https://goedverblijven.nl" text="Goed Verblijven" />
              </span>
            </li>
          </ul>

          <p className="mt-4">
            Familiewoningen mogen ook worden gebruikt voor <strong>pre-mantelzorg</strong>: bijvoorbeeld een ouder die alvast 
            dichtbij gaat wonen voordat de zorgvraag zwaar wordt, of een kind dat zelfstandig wil wonen maar geen woning vindt.
            <span className="block mt-1 text-sm">
              <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" /> | <SourceLink url="https://opus-pods.com" text="OPUS - home office pods" />
            </span>
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">3.3 Maximale oppervlakte (per erf)</h3>
          <p>Het ontwerp koppelt de vergunningsvrije ruimte aan de grootte van het bebouwingsgebied (je achtererf). De regels:</p>
          
          <div className="bg-muted/50 rounded-lg p-4 mt-4 space-y-2">
            <p><strong>Bij een bebouwingsgebied ≤ 100 m²:</strong> maximaal 50% van dat gebied mag bebouwd worden.</p>
            <p><strong>Bij 100–300 m²:</strong> maximaal 50 m², plus 20% van het deel boven 100 m².</p>
            <p><strong>Bij &gt; 300 m²:</strong> maximaal 90 m², plus 10% van het deel boven 300 m², tot een absoluut maximum van 100 m².</p>
            <span className="block mt-2 text-sm">
              <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
            </span>
          </div>

          <p className="mt-4 font-medium">Let op:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Dit is de som van alle bijbehorende bouwwerken (schuren, aanbouwen, mantelzorg/familiewoningen) samen.</li>
            <li>Een tiny house van bijvoorbeeld 50–70 m² is dus vaak goed in te passen, maar niet "oneindig" groot.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">3.4 Maximale hoogte</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>De maximale bouwhoogte wordt <strong>5 meter</strong>.</li>
            <li>
              Als hoger dan 3 meter wordt gebouwd, moet het dak schuin zijn (geen volledig platte bak van 5 meter hoog).
              <span className="block mt-1 text-sm">
                <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
              </span>
            </li>
          </ul>

          <p className="mt-4">Voor veel tiny houses betekent dit:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Eén woonlaag met eventueel een verdiepte vloer of kleine vide,</li>
            <li>of een compact huisje met kap binnen 5 meter, wat prima haalbaar is.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">3.5 Aantal woningen op het erf</h3>
          <p>
            De minister wil mogelijk maken dat je meerdere mantelzorg- en familiewoningen op je achtererf kunt plaatsen, bijvoorbeeld:
            een woning voor een zorgbehoevende ouder én een woning voor een kind.
          </p>

          <p className="mt-2">Wel:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>gelden alle voorwaarden per erf,</li>
            <li>
              en geldt de maximale oppervlakte (bijv. totaal 80–100 m²) voor alle woningen samen.
              <span className="block mt-1 text-sm">
                <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
              </span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">3.6 Meld- of informatieplicht?</h3>
          <p>
            Het bouwen en gebruiken wordt vergunningsvrij, maar er wordt onderzocht of er een <strong>informatieplicht</strong> komt: 
            je zou dan aan de gemeente moeten melden dat je een mantelzorg- of familiewoning plaatst.
          </p>

          <p className="mt-2">
            De bekende mantelzorgverklaring lijkt te gaan verdwijnen als harde voorwaarde; de gedachte is dat gemeenten de 
            zorgrelatie vaak al kennen en anders achteraf info kunnen opvragen.
            <span className="block mt-1 text-sm">
              <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" /> | <SourceLink url="https://lokaleregelgeving.overheid.nl" text="lokaleregelgeving.overheid.nl" />
            </span>
          </p>

          <p className="mt-2">
            Dit maakt het in de praktijk minder bureaucratisch: minder papier, minder wachttijd en meer vertrouwen, 
            terwijl de gemeente wel zicht houdt op wat er gebeurt.
            <span className="block mt-1 text-sm">
              <SourceLink url="https://mantelzorg.nl" text="MantelzorgNL" />
            </span>
          </p>
        </section>

        {/* Section 4 */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            4. Wat blijft hetzelfde, ook in 2026?
          </h2>

          <p>Ook als alle nieuwe regels ingaan, verandert een aantal basiselementen niet:</p>

          <h4 className="font-semibold text-foreground mt-6 mb-2">Omgevingswet + omgevingsplan blijven de basis</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Elke gemeente heeft een omgevingsplan waarin staat wat er op jouw locatie mag.</li>
            <li>
              De landelijke regels geven ruimte, maar de gemeente werkt dat lokaal uit.
              <span className="block mt-1 text-sm">
                <SourceLink url="https://iplo.nl" text="Informatiepunt Leefomgeving" />
              </span>
            </li>
          </ul>

          <h4 className="font-semibold text-foreground mt-6 mb-2">Technische bouwregels (Bbl) blijven gelden</h4>
          <p>
            Ook een tiny house moet voldoen aan de eisen voor veiligheid, gezondheid, brandveiligheid, geluid enz.
            <span className="block mt-1 text-sm">
              <SourceLink url="https://vng.nl" text="vng.nl" /> | <SourceLink url="https://lingewaard.nl" text="Gemeente Lingewaard" />
            </span>
          </p>

          <h4 className="font-semibold text-foreground mt-6 mb-2">Geen vrijbrief voor willekeurige extra huurwoning</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>De vergunningsvrije regeling is gericht op mantelzorg en eerstegraads familie.</li>
            <li>
              "Ik zet een extra huis achterin de tuin en ga het commercieel verhuren aan onbekenden" is precies niet de bedoeling.
              <span className="block mt-1 text-sm">
                <SourceLink url="https://goedverblijven.nl" text="Goed Verblijven" />
              </span>
            </li>
          </ul>

          <h4 className="font-semibold text-foreground mt-6 mb-2">Gemeenten houden speelruimte</h4>
          <p>
            Ze moeten de landelijke regels volgen, maar kunnen in hun omgevingsplan en beleid nog accenten zetten 
            (bijv. over parkeerdruk, ruimtelijke kwaliteit).
            <span className="block mt-1 text-sm">
              <SourceLink url="https://lokaleregelgeving.overheid.nl" text="lokaleregelgeving.overheid.nl" />
            </span>
          </p>
        </section>

        {/* Section 5 */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            5. Tiny house nu (2024–2025) vs. tiny house na inwerkingtreding
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Nu (situatie t/m 2025)</h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">Mantelzorgwoning</h4>
              <p>
                In veel gemeenten nu al vergunningsvrij mogelijk als bijbehorend bouwwerk, via de bruidsschat en lokale beleidsregels.
                <span className="block mt-1 text-sm">
                  <SourceLink url="https://iplo.nl" text="Informatiepunt Leefomgeving" /> | <SourceLink url="https://lokaleregelgeving.overheid.nl" text="lokaleregelgeving.overheid.nl" />
                </span>
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Familiewoning</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Soms via lokale beleidsregels voor generatiewonen of pre-mantelzorg;</li>
                <li>
                  vaak nog via een omgevingsvergunning (BOPA) voor afwijken van het omgevingsplan.
                  <span className="block mt-1 text-sm">
                    <SourceLink url="https://lokaleregelgeving.overheid.nl" text="lokaleregelgeving.overheid.nl" />
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Tiny house op eigen erf</h4>
              <p>
                Sterk afhankelijk van de gemeente: pilots, maatwerk, losse besluiten, veel verschil per regio.
                <span className="block mt-1 text-sm">
                  <SourceLink url="https://tinyhousehub.nl" text="Tinyhousehub.nl" />
                </span>
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
            Na inwerkingtreding van wet + besluit (beoogd rond 2026)
          </h3>

          <p className="text-sm text-muted-foreground mb-4">
            Op basis van de officiële stukken en toelichtingen:
            <span className="ml-1">
              <SourceLink url="https://schulinck.nl" text="Schulinck" /> | <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" /> | <SourceLink url="https://rijksoverheid.nl" text="rijksoverheid.nl" />
            </span>
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">Mantelzorgwoning op eigen erf</h4>
              <p>Wordt landelijk, binnen duidelijke voorwaarden, vergunningsvrij (achtererf, max. m², max. 5 m hoog, gebruik voor mantelzorg).</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Familiewoning op eigen erf</h4>
              <p>Wordt als extra categorie toegevoegd: een tiny house voor ouders/kinderen of pre-mantelzorg, eveneens vergunningsvrij onder voorwaarden.</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Procedures</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Minder noodzaak voor langdurige vergunningstrajecten als je binnen de vergunningsvrije kaders blijft;</li>
                <li>nog wel toetsing achteraf mogelijk als je buiten de regels valt, maar de route naar "ja" wordt veel helderder.</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 rounded-xl p-6 mt-6">
            <p className="font-semibold text-foreground mb-2">Belangrijk:</p>
            <p>
              De daadwerkelijke ingangsdatum hangt af van de Eerste Kamer, de novelle en de publicatie in het Staatsblad. 
              De overheid werkt er zichtbaar naartoe om dit rond 2026 in werking te laten treden, maar een exacte datum kan nog schuiven.
              <span className="block mt-1 text-sm">
                <SourceLink url="https://eerstekamer.nl" text="eerstekamer.nl" /> | <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
              </span>
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            6. Hoe bereid je nu al slim een tiny house op eigen erf voor?
          </h2>

          <div className="space-y-8">
            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Stap 1 – Check je erf en bestemming</h3>
              <p>Vraag bij de gemeente of via het Omgevingsloket:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>de bestemming van je perceel (bijv. "Wonen");</li>
                <li>de grenzen van je bebouwingsgebied (achtererf);</li>
                <li>hoeveel m² al is bebouwd (schuur, aanbouw, etc.).</li>
              </ul>
              <p className="mt-2">
                Dat heb je nodig om te zien of je straks binnen de vergunningsvrije oppervlakte (vaak max. 100 m²) kunt blijven.
                <span className="block mt-1 text-sm">
                  <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
                </span>
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Stap 2 – Bepaal je scenario</h3>
              <p>Koppel je plan aan één van deze routes:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Familiewoning:</strong> Tiny house voor je kind of ouders zonder directe zorgvraag, maar wel als permanente woonplek.</li>
                <li><strong>Mantelzorgwoning:</strong> Tiny house voor iemand met (toekomstige) zorgbehoefte, of voor jou als mantelzorger.</li>
              </ul>
              <p className="mt-3">Schrijf kort op:</p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>wie er gaat wonen;</li>
                <li>wat de relatie is;</li>
                <li>of er nu al, of later, sprake is van een zorgvraag.</li>
              </ul>
              <p className="mt-2 text-muted-foreground">Dat helpt enorm in het gesprek met de gemeente.</p>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Stap 3 – Ontwerp binnen de kaders</h3>
              <p>Ontwerp je tiny house zo dat het (naar verwachting) binnen de toekomstige regels past:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Plaatsing in het achtererfgebied;</li>
                <li>Oppervlakte van bijvoorbeeld 40–70 m², zodat je ruim onder de max. 100 m² blijft;</li>
                <li>Bouwhoogte tot max. 5 meter, met een schuin dak als je hoger dan 3 meter gaat;</li>
                <li>Eén bouwlaag, eventueel met vide;</li>
                <li>
                  Aansluiting op de eisen van het Bbl (brandveiligheid, vluchtroutes, ventilatie, daglicht).
                  <span className="block mt-1 text-sm">
                    <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" /> | <SourceLink url="https://iplo.nl" text="Informatiepunt Leefomgeving" />
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Stap 4 – Leg je plan vroegtijdig bij de gemeente neer</h3>
              <p>Stuur een korte mail met:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>een situatietekening van je erf;</li>
                <li>een grove plattegrond en afmetingen van het tiny house;</li>
                <li>uitleg: familiewoning of mantelzorgwoning, nu of vanaf 2026.</li>
              </ul>
              <p className="mt-3">
                Verwijs naar de voorgenomen vergunningsvrije regeling in het Besluit versterking regie volkshuisvesting 
                (mantelzorg- en familiewoningen op achtererf).
                <span className="block mt-1 text-sm">
                  <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" /> | <SourceLink url="https://rijksoverheid.nl" text="rijksoverheid.nl" />
                </span>
              </p>
              <p className="mt-3">Vraag expliciet:</p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Hoe kijken jullie als gemeente tegen zo'n plan aan?</li>
                <li>Zien jullie dit straks als vergunningsvrij binnen de nieuwe regels?</li>
                <li>Wat raden jullie aan qua timing (nu al bouwen of wachten op definitieve inwerkingtreding)?</li>
              </ul>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Stap 5 – Bouw juridisch én praktisch slim</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Leg alle antwoorden van de gemeente schriftelijk vast (mail bewaren).</li>
                <li>
                  Kies een bouwer/leverancier die gewend is te werken binnen de regels voor bijbehorende bouwwerken en 
                  mantelzorg/familiewoningen.
                  <span className="block mt-1 text-sm">
                    <SourceLink url="https://biobasedhousing.com" text="biobasedhousing.com" /> | <SourceLink url="https://goedverblijven.nl" text="Goed Verblijven" />
                  </span>
                </li>
                <li>Bouw zo dat je later niet hoeft te slopen als de functie verschuift (bijv. van logeerplek naar familiewoning of mantelzorgwoning).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7 - FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            7. Veelgestelde vragen (stand: eind 2025)
          </h2>

          <div className="space-y-6">
            <div className="border-b border-border pb-4">
              <h4 className="font-semibold text-foreground mb-2">
                1. Is het al 100% zeker dat ik in 2026 zonder vergunning een tiny house op eigen erf mag bouwen?
              </h4>
              <p>
                Nog niet. De richting ligt vast (Tweede Kamer akkoord, ontwerpbesluit openbaar), maar de wet is nog in behandeling 
                in de Eerste Kamer en er loopt een novelle. De verwachting is dat vergunningsvrij bouwen van mantelzorg- en 
                familiewoningen op eigen erf er komt, maar details en exacte datum kunnen nog verschuiven.
                <span className="block mt-1 text-sm">
                  <SourceLink url="https://eerstekamer.nl" text="eerstekamer.nl" /> | <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
                </span>
              </p>
            </div>

            <div className="border-b border-border pb-4">
              <h4 className="font-semibold text-foreground mb-2">
                2. Geldt dit alleen binnen de bebouwde kom?
              </h4>
              <p>
                Nee, de regels richten zich op wonen op eigen erf bij een woning, ongeacht bebouwde kom. Wel kan de ruimtelijke 
                context (landelijk gebied vs. stedelijk) een rol spelen in hoe gemeenten het omgevingsplan inrichten.
                <span className="block mt-1 text-sm">
                  <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" /> | <SourceLink url="https://rijksoverheid.nl" text="rijksoverheid.nl" />
                </span>
              </p>
            </div>

            <div className="border-b border-border pb-4">
              <h4 className="font-semibold text-foreground mb-2">
                3. Kan ik de familiewoning verhuren aan iemand die geen familie is?
              </h4>
              <p>
                De vergunningsvrije regeling is specifiek bedoeld voor eerste-graads familie en mantelzorg. Verhuur aan derden 
                past daar niet bij en kan in strijd zijn met het omgevingsplan of de doelgroep van de regeling.
                <span className="block mt-1 text-sm">
                  <SourceLink url="https://goedverblijven.nl" text="Goed Verblijven" />
                </span>
              </p>
            </div>

            <div className="border-b border-border pb-4">
              <h4 className="font-semibold text-foreground mb-2">
                4. Moet een mantelzorgwoning nog weg als de zorg stopt?
              </h4>
              <p>
                Nu schrijven sommige gemeenten nog dat een mantelzorgwoning moet worden verwijderd of omgebouwd als de zorgrelatie 
                eindigt. Nieuwe landelijke lijnen gaan nadrukkelijk richting meer flexibiliteit, waarbij het bouwwerk kan blijven 
                staan, maar het gebruik wel moet aansluiten bij de regels. Hoe dat precies wordt vastgelegd, volgt in het definitieve 
                besluit en lokale uitwerking.
                <span className="block mt-1 text-sm">
                  <SourceLink url="https://iplo.nl" text="Informatiepunt Leefomgeving" /> | <SourceLink url="https://mantelzorg.nl" text="MantelzorgNL" /> | <SourceLink url="https://lokaleregelgeving.overheid.nl" text="lokaleregelgeving.overheid.nl" />
                </span>
              </p>
            </div>

            <div className="pb-4">
              <h4 className="font-semibold text-foreground mb-2">
                5. Is het slim om te wachten tot alles definitief is?
              </h4>
              <p>
                Niet per se. Je kunt nu al veel voorbereidend werk doen: erf analyseren, scenario kiezen, ontwerp laten maken, 
                met gemeente spreken. Hoe beter je voorbereid bent, hoe sneller je kunt schakelen zodra de regels formaliseren.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 - Further Reading */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            8. Verder lezen: stap voor stap de diepte in
          </h2>

          <p className="mb-6">
            Wil je het niet bij deze samenvatting laten en alles rustig uitpluizen? Dan kun je op je andere microsites 
            per deelonderwerp verder gaan:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <a 
              href="https://tinyhousewet.nl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-muted/50 rounded-xl p-6 hover:bg-muted/70 transition-colors"
            >
              <h4 className="font-semibold text-primary mb-2">tinyhousewet.nl</h4>
              <p className="text-sm text-muted-foreground">
                Uitleg in gewone taal over hoe de wet naar tiny houses kijkt: Omgevingswet, omgevingsplan, definities van 
                hoofdwoning, bijgebouw, familiewoning en mantelzorgwoning.
              </p>
            </a>

            <a 
              href="https://tinyhousevergunningsvrij.nl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-muted/50 rounded-xl p-6 hover:bg-muted/70 transition-colors"
            >
              <h4 className="font-semibold text-primary mb-2">tinyhousevergunningsvrij.nl</h4>
              <p className="text-sm text-muted-foreground">
                Focus op vergunningsvrij bouwen: huidige en toekomstige regels, voorbeelden, grensgevallen en veelgestelde vragen.
              </p>
            </a>

            <a 
              href="https://tinyhouseopeigengrond.nl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-muted/50 rounded-xl p-6 hover:bg-muted/70 transition-colors"
            >
              <h4 className="font-semibold text-primary mb-2">tinyhouseopeigengrond.nl</h4>
              <p className="text-sm text-muted-foreground">
                Alles over tiny houses op eigen grond: bestemmingen, kopen vs. pachten, erf indelen, erfgrenzen en rechten/plichten.
              </p>
            </a>

            <a 
              href="https://tinyhousescompleet.nl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-muted/50 rounded-xl p-6 hover:bg-muted/70 transition-colors"
            >
              <h4 className="font-semibold text-primary mb-2">tinyhousescompleet.nl</h4>
              <p className="text-sm text-muted-foreground">
                Het overkoepelende stappenplan: van droom tot oplevering, inclusief kosten, checklists en verwijzingen naar 
                al je andere microsites.
              </p>
            </a>
          </div>
        </section>

      </div>
    </article>
  );
};

export default ArticleContent;
