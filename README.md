# syt5-gek1051-mobile-application-jamp
Dieses Projekt ist eine Shopping-Listen-App, die von uns im Rahmen des SYT-Unterrichts entwickelt wird. Sie stellt eine Shopping-Liste dar, bei der Nutzer Shopping-Listen erstellen und verwalten können. Außerdem können sie kollaborativ mit anderen Nutzern an einer Shopping-Liste arbeiten. Diese Applikation soll eine Quality-of-life Verbesserung sein, indem die traditionellen Einkaufslisten durch eine digitale Variante ersetzt werden.

## Deployment

Die Web-App wird auf [https://main--magnificent-conkies-14ea88.netlify.app](https://main--magnificent-conkies-14ea88.netlify.app) gehostet.
Die CouchDB ist auf jamp.textminr.tech erreichbar. Für mehr Info zur CouchDB, bitte an der offiziellen CouchBD Dokumentation orientieren: [https://github.com/apache/couchdb](https://github.com/apache/couchdb)

## Team
- **PO** Pfeiler
- **TA** Akalin
- **Dev** Mirauta
- **Dev** Janits

## Technical Documentation

Die Technical Documentation wird auf Overleaf geschrieben. Das Dokument.pdf kann in Overleaf gelesen werden: [https://www.overleaf.com/read/swdfqkhksmqs#97f29d](https://www.overleaf.com/read/swdfqkhksmqs#97f29d)

## Testing

Als Test-Tool benutzen wir cypress. Für mehr Info zu cypress, bitte die Technical Documentation durchlesen.

## Startpoints

Unsere Applikation verwendet eine FastAPI als Backend, in Kombination mit einer CouchDB, um die User-Verwaltung durchzuführen. Die API ist im Ordner `/api`. Als Frontend verwenden wir eine mit vue.js implementierte Fertiglösung einer Shopping-Liste. Diese ist im Ordner `/app` zu finden und muss verbessert bzw. angepasst werden. Die Daten von der Webapp werden in einer PouchDB gespeichert und mit einer CouchDB synchronisiert.

## Wie wir auf Github arbeiten

siehe [CONTRIBUTION.md](./CONTRIBUTION.md)
