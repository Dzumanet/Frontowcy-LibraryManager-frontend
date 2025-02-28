# Library Manager

Aplikacja stworzona jako projekt końcowy kursu Frontowcy.


## Status projektu
Niestety, projekt nie został w pełni ukończony. Brakuje następujących elementów:

Testów jednostkowych oraz testów E2E.
Możliwości usuwania użytkowników.
Nie wszystkie komponenty zostały odpowiednio podzielone.
Brak pełnej responsywności dla urządzeń mobilnych i desktopowych.
Mimo tych braków aplikacja działa i spełnia większość założonych funkcji. Planowane są dalsze poprawki i rozwój projektu.

## Opis projektu

Library Manager to aplikacja do zarządzania biblioteką online. Umożliwia rejestrację użytkowników, przeglądanie dostępnych książek, wypożyczanie i zwracanie książek oraz zarządzanie biblioteką przez administratorów.

## Funkcjonalności

### Rejestracja i logowanie
- Użytkownik może się zarejestrować, podając imię, nazwisko oraz adres e-mail.
- Po rejestracji otrzymuje unikalny kod karty bibliotecznej.
- Logowanie odbywa się za pomocą identyfikatora karty bibliotecznej i hasła.

### Lista książek
- Publicznie dostępna lista książek zawierająca:
    - Tytuł, autor, rok wydania, kategorię, zdjęcie okładki oraz liczbę dostępnych egzemplarzy.
- Zalogowani użytkownicy mogą wypożyczać książki.
- Wypożyczenie książki zmniejsza liczbę dostępnych egzemplarzy.
- Maksymalny okres wypożyczenia: **14 dni**.
- Możliwość przejścia do szczegółowego opisu książki.

### Panel administracyjny
- Zarządzanie książkami (dodawanie, edytowanie, usuwanie).
- Nie można usunąć książki, jeśli jest wypożyczona.
- Administrator widzi historię wynajmów:
    - Imię i nazwisko użytkownika, kod karty, status wypożyczenia.
    - Ostrzeżenie dla wypożyczeń przekraczających termin zwrotu.
    - Możliwość wymuszenia zwrotu książki.
    - Po zwrocie zmienia się status i zapisuje data zwrotu.

### Panel użytkownika
- Przegląd statystyk wynajmów:
    - Ilość wypożyczonych książek w danym miesiącu.
    - Ilość zwrotów w terminie i po terminie.
    - Aktualnie wypożyczone książki.
- Możliwość zwrotu książki jednym kliknięciem.

### Logi systemowe
- Administrator ma dostęp do historii operacji w systemie.

### Dodatkowe funkcje
- Paginacja w tabelach.
- Kontrola dostępu w zależności od uprawnień użytkownika.

## Technologie

- **Frontend**: React, TypeScript, Zustand, TanStack Query, TanStack Router, MUI.
- **Backend**: NestJS (opisany osobno).
- **Baza danych**: MySQL.

## Screenshoty






