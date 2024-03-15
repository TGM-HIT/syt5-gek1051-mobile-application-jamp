# syt5-gek1051-mobile-application-jamp
Dieses Projekt ist eine Shopping-Listen-App, die von uns im Rahmen des SYT-Unterrichts entwickelt wird. Sie stellt eine Shopping-Liste dar, bei der Nutzer Shopping-Listen erstellen und verwalten können. Außerdem können sie kollaborativ mit anderen Nutzern an einer Shopping-Liste arbeiten. Diese Applikation soll eine Quality-of-life Verbesserung sein, indem die traditionellen Einkaufslisten durch eine digitale Variante ersetzt werden.

## Deployment

Die Web-App wird auf [https://magnificent-conkies-14ea88.netlify.app](https://magnificent-conkies-14ea88.netlify.app) gehostet.

## Team
- **PO** Pfeiler
- **TA** Akalin
- **Dev** Mirauta
- **Dev** Janits

## Startpoints

Unsere Applikation verwendet eine FastAPI als Backend, in Kombination mit einer CouchDB, um die User-Verwaltung durchzuführen. Die API ist im Ordner `/api`. Als Frontend verwenden wir eine mit vue.js implementierte Fertiglösung einer Shopping-Liste. Diese ist im Ordner `/app` zu finden und muss verbessert bzw. angepasst werden. Die Daten von der Webapp werden in einer PouchDB gespeichert und mit einer CouchDB synchronisiert.

## Setup

1. `docker-compose up -d` (compose Datei ist noch tbd)
2. FastAPI server starten
3. Vue.js Web-App starten 

## Wie wir auf Github arbeiten

siehe [CONTRIBUTION.md](./CONTRIBUTION.md)
