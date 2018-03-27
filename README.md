[![Build Status](https://travis-ci.org/stiftungswo/izivi.svg?branch=master)](https://travis-ci.org/stiftungswo/izivi)
[![codecov](https://codecov.io/gh/stiftungswo/izivi/branch/master/graph/badge.svg)](https://codecov.io/gh/stiftungswo/izivi)
[![Waffle.io - Columns and their card count](https://badge.waffle.io/stiftungswo/izivi.svg?columns=all)](https://waffle.io/stiftungswo/izivi)



# SWO iZivi #

iZivi ist ein Tool um Schweizer Zivildienstleistende in einem Einsatzbetrieb zu verwalten.

https://izivi.stiftungswo.ch/

## Ordnerstruktur

Ordner | Verwendung
--- | ---
[api](api/readme.md) | Backend
[web-client](web-client/readme.md) | Frontend
migration | Datenmigration von altem iZivi

Die Ordner „api“ und „web-client“ haben jeweils eine Datei REAME.md mit einer Installationsanleitung. Fürs Backend gibt es eine Anleitung für Arbeiten an der Datenmigration. Diese ist nach dem Rollout 2017 nicht mehr relevant.

## Frameworks und Dependencies

### Backend
| Name | Verwendung |
| --- | --- |
| Lumen | PHP Micro-Framework zur Datenbank-Abstraktion, MVC-konform. Lumen ist eine leichtere Version vom Laravel-Framework |
| Artisan	| Artisan ist Teil des Laravel Frameworks und bietet ein Konsolen-Interface mit nützlichen Befehlen. Wir verwenden „artisan serve“ beim Entwickeln und „artisan migrate“ für die Datenmigration. |
| Composer | Composer ist ein serverseitiger Package Manager und verwaltet das Lumen-Framework mit allen Abhängigkeiten |
| YWT-Auth | Tokens und Authentifizierung für Laravel |

### Frontend
| Name                    | Verwendung       |
| --- | --- |
| InfernoJS                  | Fork von React JS mit besserer Performance. Interface ist fast immer gleich wie React -> Bei Problem hilft eine Suche, wie das bei React funktioniert |
| Yarn                       | Paketverwaltung und Entwicklungsserver ($yarn run watch) |
| Babel                      | ES6 backwards compatibility |
| Webpack                    | Bundeling JS, CSS, SASS modules |
| IZI Toast                  | Snackbar for Error and Feedback http://izitoast.marcelodolce.com/ |
| Survey JS                  | Darstellung der User Feedbacks |

## Code Formatierung

Das Backend und Frontend sollen immer sauber formatiert sein (wird von Travis überprüft).

Vor dem commiten sollten immer die formatier-tools ausgeführt werden.

Die Anleitungen dafür befinden sich in den jeweiligen [READMES](#ordnerstruktur).

## Komponenten

### Profil
Zivis können Ihre Informationen über den Menupunkt „Profil“ anpassen. Admins haben Zugriff auf alle Profile anpassen (Menupunkt „Mitarbeiterliste“) und haben zusätzlich die Möglichkeit, interne Bemerkungen zu schreiben und Benutzerrollen anzupassen.

### Mission
Im alten Izivi waren das die Einsätze. Darin werden alle Einsätze aufgeführt die einem Pflichtenheft sowie einem Zivi zugeteilt wurden.

### ReportSheet
Diese Komponente entspricht der Planung. Darin werden alle Zivis aufgeführt in einer Tabelle mit allen Arbeitswochen für dieses Jahr. Somit hat man einen schnellen Überblick ob zu einem bestimmten Zeitpunkt noch Platz frei für weitere Zivis ist oder nicht.

### UserFeedback
Nach dem Einsatz sollen die Zivis jeweils ein Feedback zum Betrieb, den Einsatzleitern und allgemein dem Einsatz bei der SWO abgeben. Diese werden Anonym gespeichert und in einer Gesamtauswertung für das Jahr dargestellt. Einsicht hat hier nur der Admin, resp. der Zivi hat einsicht auf sein eigenes Feedback.

Die Darstellung des Feedback-Moduls basiert auf SurveyJS.io

#### FeedbackController::getJSONbyQuestionType()

Hier wird ein JSON string aus den user_feedback_questions in der Datenbank zusammengestellt. Das Feld 'type' wird dabei verwendet, um den Fragetyp zu defninieren:

1. Frage mit Antwort 1-4
2. Überschrift (vor Unterfragen)
3. Unterfrage
4. Text-Frage / Kommentar
5. Ja/Nein-Frage
6. Frage mit 6 Antworten, Antworden werden im 'custom_info' angegeben

#### UserFeedback (Frontend)

Im Frontend wird der JSON string vom Backend angezogen. Dieser String wird an die surveyjs library weitergegeben. Surveyjs rendert dann das HTML und setzt es in den Container „surveyContainer

## Deployment

Travis kann das Projekt mit seinen [deploy Skript](https://github.com/stiftungswo/izivi/blob/master/ci/deploy.sh) per SSH auf einem beliebigen Webhosting automatisch deployen. Dafür müssen auf dem Zielserver unter `~/deploy` folgende Files liegen:

* izivi.prod.env (orientiert sich an [.env.example](https://github.com/stiftungswo/izivi/blob/master/api/.env.example)

### Sentry

Fehler auf Produktivsystemen werden auf Sentry geloggt wenn eine valide  `SENTRY_DSN` gesetzt ist. Siehe [Config](https://github.com/stiftungswo/izivi/blob/master/api/.env.example)

Die Variablen werden im Travis Build abgefüllt.

### Deployment at SWO

Weitere Informationen im [privaten Wiki](https://wiki.stiftungswo.ch/it:sw:izivi#deployment)


## License

iZivi is licensed under the GNU General Public License v3.0 (GPLv3). [LICENSE](LICENSE)
