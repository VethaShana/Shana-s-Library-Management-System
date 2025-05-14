# Shana-s-Library-Management-System

## Overview

The Library Management System (LMS) will be a full-stack application designed to efficiently manage books, users, reservations, and donations. It will include modules for user profiles, book catalogs, reservation history, and donation tracking, ensuring a smooth experience for both users and library administrators.

## Key Features

### Users and User Profiles:

User registration and login (with JWT-based authentication)

User profile management (view and update profile)

Role-based access (User, Admin, Librarian)


### Books and Categories:

Book catalog with search and filters

Categorization of books (e.g., Fiction, Non-fiction, Science, History)

Book details including title, author, ISBN, and availability

Book cover image and rating support


### Reservations and History:

Reserve a book to read (with time limits)

View reservation history

Track currently borrowed books


### Book Donations:

Allow users to donate books

Review and approve donations by admin



## High-Level Architecture

### Frontend:

Framework: React.js (with Tailwind CSS for styling)

State Management: Context API / Redux

Authentication: Firebase / JWT-based authentication

Responsive Design: Mobile and Desktop views


### Backend:

Framework: Node.js (Express.js) or Spring Boot (Java)

Database: MongoDB or Firebase Firestore

APIs: RESTful APIs with role-based access control

File Storage: Cloud Storage for book covers and user profile pictures


### Database Schema:

#### Users:

ID (Auto-generated)

Name

Email

Password (Hashed)

Role (User, Admin, Librarian)

Profile Picture

Created At, Updated At


#### Books:

ID (Auto-generated)

Title

Author

ISBN

Category

Cover Image URL

Availability Status

Rating (Optional)

Created At, Updated At


#### Categories:

ID (Auto-generated)

Name

Description

Created At, Updated At


#### Reservations:

ID (Auto-generated)

User ID (Foreign Key)

Book ID (Foreign Key)

Reservation Date

Status (Active, Completed, Canceled)

Return Date


#### Donations:

ID (Auto-generated)

User ID (Foreign Key)

Book Title

Author

Condition (New, Like New, Used)

Status (Pending, Approved, Rejected)

Donation Date



### API Endpoints:

Authentication: Login, Register, Logout

User Management: View Profile, Update Profile, Change Password

Book Management: Add Book, Update Book, Delete Book, List Books, View Book Details

Category Management: Add Category, Update Category, List Categories

Reservation Management: Reserve Book, Cancel Reservation, View History

Donation Management: Donate Book, Approve Donation, Reject Donation, List Donations

Security and Scalability:

Authentication: JWT for secure API access

Authorization: Role-based access control

Data Security: Input validation, password hashing, and secure data storage

Scalability: Containerized microservices (optional) with Docker and Kubernetes support for scaling


### Optional Add-ons:

Notifications: Email/SMS notifications for reservations and due dates

Search and Filters: Full-text search and category filters for better book discovery

Analytics: Dashboard for admins to track system usage and donations


### User Interfaces using Figma :  
https://www.figma.com/proto/aaV44hD9t7lI6y2rdRAu8G/Library-Management-System?node-id=0-1&t=SoKDwDiNWl44mLUU-1
