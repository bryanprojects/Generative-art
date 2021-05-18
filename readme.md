<!-- Vergeet je niet de comments uit te zetten voordat je begint met typen? 💬 -->

# Procesverslag

## Over
* **Naam:** `Bryan Jansen`
* **Klas:** `vid-1`
* **Minor:** `Visual Interface Design`
* **Favoriete dier:** `Panda`
* **Startniveau:** `blauw`

## Concept

Ik ben een persoon die vaak te veel taken op zich neemt. Hierdoor raak ik vaak het overzicht kwijt.
Toch probeer ik hier vaak weer overzicht in te krijgen door planningen te maken waardoor ik het overzicht weer terug krijg. Dit wilde
ik vertalen naar een generatief kunstwerk. Ik wil daarbij graag een doolhof maken. Een doolhof is onoverzichtelijk en als je 
soms denk dat je er bijna bent, dan is dat vaak nog niet eens het geval. Dat is iets wat ik me bij mezelf herken. Dan denk ik 
dat ik een goede stap heb gezet om verder te komen, maar dan vergeet ik soms nog kleine stapjes waardoor het nog steeds niet helemaal 
lukt. Daarom wil ik dus de focus leggen op een generatief doolhoof. Het concept is daarom een ingewikkeld doolhof die bij elke keer 
dat je de pagina refresh veranderd door een random. Wanneer je dan op het doolhof drukt, kun je het makkelijker maken door lijnen 
weg te halen. Hierdoor krijg je steeds meer overzicht en zal het doolhof steeds makkelijker worden. Als extra interactie kun je op het linker
pijltje drukken om het moeilijker te maken. Lees hieronder mijn proces.

## Features

Wat zijn de features in het project dat je gemaakt hebt? Waar kan ik op klikken? Waar zit de interactie?
Ik heb een random gemaakt die het doolhof veranderd wanneer je op de refresh knop drukt. Je kunt als gebruiker ook interacteren met het doolhof door er op te drukken. Dan worden er steeds minder lijnen zichtbaar. Ook kun je op het linkerpijltje drukken. Het doolhof zal dan weer steeds moeilijker worden.


## Onderzoek & inspiratie
In de eerste 2 weken van het vak ben ik onderzoek naar Generative art gaan doen. Waar wordt het voor gebruikt en hoe wordt het gemaakt?
Ik ben wat informatie gaan verzamelen om het helder voor mijzelf te krijgen.

Wat is generative art? (uit bronnen).
Generative art is ook wel generatieve kunst. Het is kunst dat gedeeltelijk of als geheel gemaakt is door een zelfsturend systeem. 
Hierbij wordt er vaak gewerkt met p5.js. Dat is een javascript bibliotheek die programmeren toegankelijker maakt voor artists.

Hoe werkt het?
In generative art wordt er weel gebruik gemaakt van coördinaten en lijnen. Als je de code : ellips (50,50,100) schrijft wordt er een cirkel zichtbaar. 
De cijfers naast het commando geven informatie over hoe het commando moet worden uitgevoerd.
De haakjes gebruiken we om een functie aan te roepen. De ellipse functie kan 3 soorten informatie bevatten. De x-coördinaat, een y-coördinaat en een diameter.

Het coördinatensysteem bestaat bijvoorbeeld uit 400px. Dat is het canvas.
Hoe groter de x-coördinaat is je aan vormen meegeeft, hoe verder ze naar rechts zullen zijn. Voor de Y zullen ze verder naar beneden zijn.

Er zijn 4 stukjes informatie nodig: de startpositie x, de startpositie y, de eindpositie x en de eindpositie y.

Na wat informatie over vak ben ik gaan nadenken over een concept wat ik bij mijzelf vind passen. Ik ben mij als persoon gaan beschrijven en kwam daardoor door een aantal interessante inzichten. 

## Concept bedenken

Wat voor generative art past bij bij? (idee-generatie)
Ik ben een best wel sportief persoon die soms te veel taken op me wilt nemen omdat ik soms denk dat ik dit wel aan kan. Hierdoor raak ik soms het overzicht een beetje kwijt waardoor ik de controlle soms een beetje kan verliezen. Dit is niet wat ik wil, maar het komt best vaak voor. Hierdoor wil ik een kunstwerk maken met vormen die kunnen lijken op een doolhof wat constant veranderd. Hierdoor raak je het overzicht snel kwijt waardoor ik denk dat het een kunstwerk zou kunnen zijn wat best goed past bij mij als persoon.

Bij dit kunstwerk wil ik gebruik maken van groene en oranje kleuren omdat dit voor mij staat voor natuur, buitenlucht en gezondheid, maar ook voor actief wat ik heel erg bij mijzelf terug vind. Qua stijl hou ik meer van ronde, dikkere hoeken en moet het niet te strak en serieus zijn. Ik ben meer van een levendige stijl met ronde vormen en kleuren. Te veel kleuren vind ik ook niet fijn. Complementaire kleuren spreken me wel aan waardoor ik aan de slag wil gaan met groen en oranje.

## Voortang in het kort

In de eerste week ben ik aan de slag gegaan met het maken van het canvas en random lijnen.
In de tweede week ben ik aan de slag gegaan met het maken van een loop. Daardoor vult het canvas zich met random lijnen.
In de derde week ben ik aan de slag gaan met de stijl en interactie. Hierdoor kan de gebruiker op het doolhof drukken waardoor het makkelijker word.
Deze stappen onderbouw ik hieronder verder.

### Week-1
In de eerste week ben ik onderzoek naar generative art gaan doen. Ik heb me een beetje ingelezen over p5 en ben naar wat voorbeelden gaan kijken. In deze week had ik wel al besloten wat ik wilde gaan doen. Een ingewikkeld doolhof maken wat onoverzichtelijk oogt met een stijl wat bij mij past. In deze week hebben we ook nog een keer feedback kunnen krijgen op ons concept. In deze feedback hoorde ik dat ik wel goed moest nadenken over hoe ik mijn kunstwerk interactief wil gaan maken. Dat is iets waar ik nog over na moest denken.

Daarna ben ik in deze week begonnen met het schrijven van code in p5. Ik ben eerst lijnen gaan tekenen en het canvas gaan tekenen. De volgende stap die ik voor mijzelf wilde zetten is een random toevoegen waardoor lijnen op verschillende plekken zichtbaar worden. Dat vond ik namelijk een goed begin voor de eerste week. Ik was eerst bang dat de lijnen niet goed zichtbaar zouden worden, maar daar wilde ik zelf ook mee experimenteren. Daarom ben ik toen aan de gang gegaan met het maken van een if else statement. Hierdoor heb ik als eerst een if else statement gemaakt waarbij je als je refreshd een horizonatele lijn of verticale lijn random op het canvas ziet. Dit lukte en vond ik een goed begin voor deze week.


### Week-2
In de tweede week ben ik dieper in mijn code gedoken. Ik heb nu een horizontale of verticale lijn die random in het canvas komt, maar ik wil het canvas vullen met deze random lijnen. Daarom ben ik in deze week aan de slag gegaan met het maken van een loop. Dit vond ik makkelijker dan het if else statement, alleen wist ik nog niet precies hoe groot ik het canvas wilde maken. Ik had eerst een kleiner canvas van 400 bij 400 px om mee te oefenen, maar heb dit vergroot en over het hele scherm laten lopen. Toen ik de loop had gemaakt begon het al echt een gaaf project te worden. Ik zag nu het complete doolhof alleen was het nog kaal en heb ik er nog niet mijn eigen stijl in gestopt. Ook is het nog niet interactief, maar dit is iets wat ik in de 3e week van het project wil oppakken.

### Week-3
In de derde week ben ik aan de slag gegaan met het toepassen van mijn eigen stijl en het interactief maken van mijn doolhof. Ik ben de groene en oranje kleur gaan toevoegen en ik heb de strokeWeight veranderd om dikkere lijnen te krijgen. Dit waren de makkelijkste stappen. Echter ben ik daarna aan de slag gegaan met de interactie en dat was een punt wat mij iets minder goed af ging. Ik wilde een mouseClicked function maken, waarbij ik de afstand tussen de lijnen wilde vergroten, maar op één of andere manier kreeg ik dit niet goed werkend. Ik heb meerdere dingen geprobeerd, maar heb het toen daarna even links laten liggen om misschien nog wat feedback van andere studenten te krijgen wat ook heel interessant zou kunnen zijn. 

Voor deze feedback sessie mochten we ook naar school en dat vond ik wel heel erg leuk. Ik vond het leuk om mijn klasgenoten weer een keer te zien, maar wilde wel actief met de les bezig zijn om zelf ook verder te komen met mijn project. Ik heb iedereen van feedback voorzien en het viel me op dat mensen die naar mijn project keken, ook aan een interactie dachten om het doolhof makkelijker te maken wanneer je er op drukt. Dat zorgde er voor dat ik dat idee wel echt wilde doorzetten.

### Naar het einde
In de laatste week ben ik nog aan de slag gegaan met de interactie en het is me gelukt om dit te maken. Ik heb nu de code geschreven afstand = afstand + 50 en daarna de function redraw geschreven. Dat zorgt ervoor dat er opnieuw een canvas getekend wordt en er zo dus minder lijnen zichtbaar worden. Best wel veel frustratie en tegenslag, maar het is uiteindelijk gelukt! Daaranaast heb ik nog een interactie gemaakt door met de left arrow te werken. Als je nu op het linkerpijltje drukt, komen er weer meer lijnen bij. Zo kun je het doolhof makkelijker en moeilijker maken.

Al met al kijk ik goed terug op dit vak. Ik heb veel nieuwe dingen geleerd omdat ik zelf eerst ook nog niet bekend was met p5. Ook was het fijn om met een webeditior te werken waardoor ik veel kon experimenteren en mijn werk aan andere kon laten zien voor nieuwe ideeën. Ik ben trots op het eindresultaat en wil dit project zeker meenemen in mijn portfolio.

## Bronnenlijst
* `https://cmda-generative-art.netlify.app/pages/1/`
* `https://p5js.org/get-started/`
* `https://kellylougheed.medium.com/generative-art-with-p5-js-program-your-own-art-6a6ac7e57d87`
* `https://blog.dennisokeeffe.com/blog/2021-02-12-a-first-look-at-generative-art-with-p5js/`
* `https://www.youtube.com/watch?v=bEyTZ5ZZxZs&ab_channel=TheCodingTrain`
* `https://www.youtube.com/watch?v=8j0UDiN7my4&t=128s&ab_channel=TheCodingTrain`