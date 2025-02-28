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

![image](https://github.com/user-attachments/assets/caa16305-6946-412a-a9c1-e2f293c2bdf7)
![image](https://github.com/user-attachments/assets/c6b14def-7cff-435c-9047-24c91d114aa2)
![image](https://github.com/user-attachments/assets/415939de-b075-4d25-b5b8-4d132823fc16)
![image](https://github.com/user-attachments/assets/9aaab412-fcc0-4067-b050-42e05978977c)
![image](https://github.com/user-attachments/assets/9783fe33-2acf-4757-a6f3-247186a6bcc6)
![image](https://github.com/user-attachments/assets/7a9ded8b-344c-4a84-b8bb-9a121ebda5e9)
![image](https://github.com/user-attachments/assets/c4c0cc53-b92c-4b55-898f-493d6d7ee69c)
![image](https://github.com/user-attachments/assets/c4047893-906d-44a5-b4e2-c0a32214250a)
![image](https://github.com/user-attachments/assets/3327a7bf-7e2a-45d6-8b60-a79ca1ff8801)
![image](https://github.com/user-attachments/assets/300c93c9-8a6a-4b19-8725-77f82fbc5aa4)
![image](https://github.com/user-attachments/assets/69a932ea-cf01-476c-98a3-d67b468635b6)
![image](https://github.com/user-attachments/assets/eb5311f7-dba9-4cf5-8bee-208493504931)
![image](https://github.com/user-attachments/assets/917ef397-a0ba-45f2-b340-312b2375b262)
![image](https://github.com/user-attachments/assets/a52c65a5-1618-4993-8909-fa9b190c027f)
![image](https://github.com/user-attachments/assets/05a0a4af-629a-4290-9917-8613490e0a42)
![image](https://github.com/user-attachments/assets/56a36c17-ba7a-4bf8-90f7-2b228afe8abc)









