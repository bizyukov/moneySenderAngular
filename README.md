# Parrot Wings – Angular 8 Finance Client (Demo)

[![Angular](https://img.shields.io/badge/Angular-8-red.svg)](https://angular.io/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4-purple.svg)](https://getbootstrap.com/)
[![Status: Archived](https://img.shields.io/badge/status-archived-lightgrey.svg)](https://github.com/yourusername/parrot-wings-angular)

> **⚠️ EDUCATIONAL DEMO – NOT FOR PRODUCTION**  
> This repository contains a **simple Angular 8 frontend** for a payment/wallet system (often called "Parrot Wings"). It was built as a **learning exercise or coding challenge** and is preserved **for portfolio reference only**.

## 📖 Overview

This application provides a basic interface for:

- **User authentication** (sign in / sign up).
- **Viewing a list of registered users** and their balances.
- **Creating payment transactions** between users.
- **Viewing transaction history** with running balance.

The frontend communicates with a REST API (not included) and uses JWT tokens stored in `sessionStorage` for authorization.

## 🛠️ Technology Stack

- **Framework**: Angular 8
- **UI**: Bootstrap 4
- **HTTP**: Angular `HttpClient`
- **Routing**: Angular Router
- **State Sharing**: Simple `EventEmitter` service (`ShareService`)

## 📁 Project Structure (Simplified)
```bash
src/app/
├── components/
│ ├── login/ # Sign in / sign up form
│ ├── header/ # Navigation bar with user balance
│ ├── users/ # User list and search
│ ├── transactions/ # Transaction history table
│ └── new-transaction/ # Form to send money
├── http-request.service.ts # API client (hardcoded localhost URL)
├── share.service.ts # Shared state between components
└── app.module.ts
```

## ✅ Implemented Features

- **Login / Registration** forms with basic validation.
- **JWT token** storage and automatic attachment via `HttpHeaders`.
- **User search** (by username).
- **Transaction creation** with amount validation.
- **Transaction history** with colour‑coded amounts (incoming/outgoing).
- **Repeat transaction** functionality.

## 🚫 Limitations & Security Notes

- **Hardcoded API URL** (`https://localhost:44330`).
- **No proper error handling** – errors are stringified and shown in an alert.
- **Outdated Angular version** (8 is EOL).
- **No route guards** – navigation relies only on token presence.
- **State management** is rudimentary (no NgRx).
- **No unit tests** (only auto‑generated files).
- **Plain HTTP** – JWT sent over unencrypted channel (unless backend enforces HTTPS).

**Do not deploy this application without significant improvements.**

## 📚 Educational Value

This project is a straightforward example of:

- **Angular forms** (template‑driven).
- **HTTP interceptors** (manual header injection in each request).
- **Basic routing** and navigation.
- **Component communication** via a shared service with `EventEmitter`.

It can serve as a **baseline** for comparing with more advanced Angular applications (e.g., Workee, delivcontr) in my portfolio.

## 🔧 How to Run

```bash
npm install
ng serve
```
Navigate to http://localhost:4200/. The app expects a backend API at https://localhost:44330. You may need to run a compatible backend or mock the responses.

📄 License
MIT – use freely for learning purposes.

👤 Author & EB‑1A Context
GitHub: @yourusername
This repository is part of a documented portfolio showcasing 15+ years of software development, supporting an EB‑1A extraordinary ability visa petition under the original contributions criterion.

“Talk is cheap. Show me the code.” – Linus Torvalds