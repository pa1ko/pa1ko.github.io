<!--
.. title: OAuth 2.0
.. slug: oauth2
.. date: 2019-07-30 11:24:29 UTC+02:00
.. tags: web
.. category: snippet
.. link:
.. description:
.. type: text
-->

OAuth 2.0 to otwarty standard autoryzacji, wykorzystywany między innymi przez Googla do ich wszystkich usług.

## Podstawowe pojęcia

* Resource owner / user (właściciel zasobów / użytkownik) - osoba lub inny podmiot będący włascicielem chronionych zasobów
* Client (klient) - aplikacja, która chce uzyskać dostęp
* Access token (token) - Token wystawiany przez serwer autoryzujący, klient wykorzystuje go do uzyskania dostępu do zasobów.
* Scope (zakres) - zakres uprawnień
* Authorization server (serwer autoryzacji) - aplikacja zarządzająca przydzielaniem kluczy, tokenów i kodów dostępu. Kontroluje prawidłowe przydzielanie uprawnień
* Resource server (serwer zasobów) - aplikacja lub serwer, do którego dostęp chce uzyskać klient.
* Authorization code () - pośredni token, jest wymieniany na prawdziwy token
* client id (identyfikator) - identyfikator przyznawany przy rejestracji, jest informacją publiczną
* Client secret (sekret) - sekret jest informacją niejawną i musi być chronione.
* Redirect URIs () - serwis przekierowywuje

## Schematy procesu autoryzacji

Wyróżniane są 4 podstawowe metody autoryzacji.

1. Authorization Code Grant - dla web serverów, przeglądarką i mobilinich aplikacji
1. Implicit Grant -
1. Client Credential Grant - dostęp dla aplikacji, bez udziału użytkownika
1. Password Grant - logowanie przez login i hasło


##### Odwołania

* [aaronparecki.com](https://aaronparecki.com/oauth-2-simplified/)
* [adam.wroclaw.pl](http://adam.wroclaw.pl/2014/10/oauth2-wyjasniony-po-ludzku/)
* [sekurak.pl](https://sekurak.pl/oauth-2-0-jak-dziala-jak-testowac-problemy-bezpieczenstwa/)
* [thephpleague.com](https://oauth2.thephpleague.com/terminology/)
