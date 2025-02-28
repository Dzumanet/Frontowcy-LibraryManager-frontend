
---

### 📄 `README_EN.md` (English version)


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
![image](https://github.com/user-attachments/assets/db52798e-53b5-40c3-bc3d-dd3670e9eeb7)
![image](https://github.com/user-attachments/assets/12cbbfa2-ab80-4190-a3ad-c922fce09b36)
![image](https://github.com/user-attachments/assets/6dafeb11-6e7f-46e3-a14f-0ecb242ffadb)
![image](https://github.com/user-attachments/assets/3a30f747-0f4b-43ce-a6cb-142c778a1ee9)
![image](https://github.com/user-attachments/assets/f6934244-315a-4e42-877b-b37402a6ea31)
![image](https://github.com/user-attachments/assets/4f62d8f0-6571-4c84-8a0c-9405453878f9)
![image](https://github.com/user-attachments/assets/37c10895-437c-4ff5-92e3-2f4b2d3e3dbe)
![image](https://github.com/user-attachments/assets/e772f80c-4e62-4e59-94a4-c9f56d4c06ea)
![image](https://github.com/user-attachments/assets/3d790d15-f1e1-4ad5-9ef4-9db34f75ad77)
![image](https://github.com/user-attachments/assets/3955a960-b16c-4c6f-9a82-cea632f6767b)
![image](https://github.com/user-attachments/assets/9c67b7eb-685b-4a45-95ef-e07e8a81c34f)
![image](https://github.com/user-attachments/assets/2ea6c7f2-fc2f-4011-85cc-5b7ca064bcab)
![image](https://github.com/user-attachments/assets/e91a45a4-2514-4a70-a1b5-5f355032e495)
![image](https://github.com/user-attachments/assets/3f5c0dfd-5c1f-45f1-a01a-3aa5a2430cd1)
![image](https://github.com/user-attachments/assets/883e9a74-97ba-4b1a-8b73-615c7aa47bd0)
![image](https://github.com/user-attachments/assets/537e6555-8934-4dd1-a625-52e36d3a5444)











