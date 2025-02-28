
---

### 📄 `README_EN.md` (English version)

```md
# Library Manager

This application was created as the final project for the Frontowcy course.

## Project Status
Unfortunately, the project is not fully completed. The following elements are missing:

Unit tests and E2E tests.
User deletion functionality.
Some components are not properly modularized.
Lack of full responsiveness for mobile and desktop devices.
Despite these shortcomings, the application is functional and fulfills most of the intended features. Further improvements and development are planned.

## Project Description

Library Manager is an online library management system. It allows users to register, browse available books, borrow and return books, and enables administrators to manage the library.

## Features

### Registration & Login
- Users can register by providing their first name, last name, and email address.
- After registration, they receive a unique library card ID.
- Login is performed using the library card ID and password.

### Book List
- Publicly accessible list of books displaying:
  - Title, author, publication year, category, cover image, and available copies.
- Logged-in users can borrow books.
- Borrowing a book decreases the number of available copies.
- Maximum borrowing period: **14 days**.
- Users can view detailed book descriptions.

### Admin Panel
- Book management (add, edit, delete).
- Books that are currently borrowed cannot be deleted.
- Admins can view borrowing history:
  - User’s name, library card ID, and borrowing status.
  - Warning for overdue books.
  - Ability to force book returns.
  - After return, the status is updated with the return date.

### User Panel
- Borrowing statistics:
  - Number of books borrowed in the current month.
  - Number of books returned on time and overdue.
  - Currently borrowed books.
- Users can return books with a single click.

### System Logs
- Admins can view the full history of system actions.

### Additional Features
- Pagination in tables.
- Access control based on user permissions.

## Technologies

- **Frontend**: React, TypeScript, Zustand, TanStack Query, TanStack Router, MUI.
- **Backend**: NestJS (described separately).
- **Database**: MySQL.

## Screenshots



