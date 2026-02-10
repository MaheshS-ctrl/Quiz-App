# Quiz App

An interactive, browser-based quiz application built with modern JavaScript.  
The app focuses on clean architecture, modular design, and testable logic while delivering an engaging user experience with timed questions and real-time scoring.

---

## Overview

This project demonstrates practical usage of JavaScript fundamentals along with modern ES6+ features.  
The application dynamically renders quiz questions, handles user interactions, tracks time and score, and provides instant UI feedback.

The codebase is structured to promote separation of concerns and maintainability, with reusable utilities and unit-tested core logic.

---

## Features

- Dynamic quiz rendering
- Timer-based question flow
- Real-time score calculation
- Interactive and responsive UI
- Modular, maintainable JavaScript code
- Unit-tested business logic

---

## Technical Highlights

- ES6+ syntax and modules (`import / export`)
- DOM manipulation and event-driven programming
- Separation of data, utilities, and UI logic
- Node.js tooling with npm
- Jest-based unit testing
- Over 60% unit test coverage for reusable logic

---

## Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Node.js**
- **npm**
- **Jest** (unit testing)

---

## Project Structure

quiz-app/
├── src/
│   ├── data/
│   │   └── questions.js
│   ├── utils/
│   │   ├── timer.js
│   │   └── score.js
│
├── tests/
│   ├── score.test.js
│   └── timer.test.js
│
├── index.html
├── script.js
├── style.css
├── package.json
├── jest.config.js
└── README.md


## How to Run

1. Install dependencies:
   npm install

2. Start local server:
   npx serve .

3. Open browser at:
   http://localhost:3000

## Run Tests

npm test

