Motivering av val av databas
Jag valde att använda MongoDB för det här projektet på grund av dess flexibilitet och förmåga att hantera ostrukturerad data. MongoDB är en NoSQL-databas som sparar data i ett JSON-liknande format (BSON), vilket gör den idealisk för projekt där datans struktur kan förändras över tid. Eftersom vi hanterar användare och uppgifter som kan ha olika typer av information kopplad till sig, passar MongoDB
mer flexibla struktur bra. Den gör det också lättare att skala applikationen när datamängden växer.

Ett par andra fördelar med MongoDB inkluderar:

Ingen strikt schematvång: Man kan enkelt uppdatera och ändra datamodellen utan att det påverkar hela databasen.
Skalbarhet: MongoDB är byggd för att hantera stora datamängder och presterar bra när applikationen växer.
Enkel integration med Node.js: Det finns bra npm-paket (som Mongoose) som gör det smidigt att koppla upp sig mot MongoDB från en Node.js-applikation.
Tekniker och verktyg
För att bygga den här backend-applikationen använde jag flera olika verktyg och npm-paket som underlättar utvecklingen och gör koden mer robust.

Node.js: Node.js är själva plattformen som kör applikationen. Eftersom Node.js är asynkront och eventdrivet, passar det bra för applikationer som hanterar många I/O-operationer (som att skicka och ta emot data från en databas).

Express.js: Express är ett minimalt ramverk för att bygga webbservrar i Node.js. Det används här för att skapa API
och hantera HTTP-förfrågningar, som att skapa (POST), läsa (GET), uppdatera (PUT) och ta bort (DELETE) användare och uppgifter.

Mongoose: Detta är ett bibliotek som hjälper till att modellera och interagera med MongoDB. Genom Mongoose kan vi skapa modeller för användare och uppgifter, vilket gör att vi kan validera och strukturera datan innan den sparas i databasen.

TypeScript: TypeScript är en vidareutveckling av JavaScript med stöd för statisk typning. Genom att använda TypeScript kan vi undvika vissa typer av buggar som lätt kan uppstå i vanlig JavaScript. Det gör också koden lättare att förstå och underhålla eftersom vi tydligt kan definiera vilka typer av data som ska användas.

Nodemon: Detta är ett utvecklingsverktyg som automatiskt startar om servern varje gång en kodändring görs. På så sätt slipper jag starta om applikationen manuellt varje gång, vilket sparar tid under utvecklingen.

Postman: Postman är ett verktyg för att testa API
. Jag använde Postman för att skicka HTTP-förfrågningar till applikationen och säkerställa att allt fungerar som det ska, till exempel att man kan skapa och hämta användare och uppgifter korrekt.

Applikationens funktion
Applikationen är en enkel backend som hanterar användare och uppgifter genom ett REST API. Här är en kort översikt över hur applikationen fungerar:

Databasanslutning: När applikationen startar ansluter den till MongoDB via Mongoose. Om anslutningen lyckas kommer servern börja lyssna på HTTP-förfrågningar på en specifik port.

API-rutter: Det finns två huvudsakliga rutter, en för användare (userRoutes) och en för uppgifter (taskRoutes). Genom dessa rutter kan vi:

Skapa (POST): Lägga till nya användare eller uppgifter.
Läsa (GET): Hämta en lista över användare eller uppgifter från databasen.
Uppdatera (PUT): Uppdatera en specifik användare eller uppgift genom att skicka med deras ID.
Ta bort (DELETE): Radera en specifik användare eller uppgift från databasen.
Datahantering: När en förfrågan skickas (t.ex. via Postman) till API
, tar servern emot datan, bearbetar den och kommunicerar med databasen via Mongoose-modellerna. Vid felhantering returnerar servern lämpliga felmeddelanden till klienten.

Felsökning: Varje databasoperation omges av try-catch-block för att hantera eventuella fel. Om något går fel, som ett misslyckat försök att spara en användare, skickar servern ett felmeddelande och statuskod tillbaka till klienten.