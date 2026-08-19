# WCB HTML CSS JavaScript Assignment

This repository contains my solution for the WCB Frontend Assignment using:

- HTML
- CSS
- JavaScript

## Exercises

### Exercise 1 – Worker Progress Report

Recreated the provided Worker Progress Report PDF using HTML, CSS and JavaScript.

#### Features

- WCB-style header and contact information
- Claim number
- Dynamic worker information
- Return-to-work information
- Work status
- Recovery status
- Pain rating
- Medical treatment information
- Medication information
- Exercise information
- Certification and privacy information
- Footer and page numbers
- Print / Save as PDF support
- Dynamic datasets using JavaScript
- Demo 1 and Demo 2 for demonstrating different data

Open:

`exercise-1/index.html`

---

### Exercise 2 – Medical & Travel Expense Request

Recreated the provided Medical & Travel Expense Request PDF using HTML, CSS and JavaScript.

#### Features

- WCB-style header and contact information
- Claim number
- Dynamic worker information
- Prescription Drugs table
- Over-the-Counter Drugs table
- Medical Supplies table
- Parking expenses
- Mileage expenses
- Bus and Taxi expenses
- Dynamic table rows using JavaScript arrays
- Demo 1 and Demo 2
- Add Prescription Row functionality
- Footer and page numbers
- Print / Save as PDF support

Open:

`exercise-2/index.html`

---

## Dynamic Data

The assignment requires the solution to work with different datasets.

The application uses JavaScript objects and arrays instead of hardcoding all values directly into the HTML.

For example, the expense tables in Exercise 2 are generated dynamically from JavaScript data. This allows the same table structure to display one row or multiple rows.

The Demo 1 and Demo 2 buttons demonstrate different datasets.

---

## Project Structure

```text
wcb-html-css-js-assignment/
│
├── exercise-1/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│       └── wcb-logo.png
│
├── exercise-2/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│       └── wcb-logo.png
│
├── ai-prompts/
│   ├── exercise-1-prompts.md
│   └── exercise-2-prompts.md
│
├── videos/
│   ├── exercise-1-demo.mp4
│   └── exercise-2-demo.mp4
│
└── README.md
