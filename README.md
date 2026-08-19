# Claude Login Page - Playwright Testing

This project contains an interactive dark-themed Login Page created using Claude AI, along with manual test cases and Playwright automation tests.

## Project Overview

The Login Page includes:

- Email/username validation
- Password validation
- Password show/hide functionality
- Successful login flow
- Success page with toast notification
- Responsive design for desktop and mobile

## Installation

Clone the repository:

git clone https://github.com/rahafashqar/claude-login-page-playwright.git

Open the project folder:

cd claude-login-page-playwright

Install the project dependencies:

npm install

Install Playwright browsers (if needed):

npx playwright install

## Run Tests

Run all Playwright tests:

npx playwright test

Run tests in a specific browser:

npx playwright test --project=chromium

npx playwright test --project=firefox

npx playwright test --project=webkit

## HTML Report

Open the HTML report after running the tests:

npx playwright show-report

## Automated Tests

The project includes automated tests for:

- Successful Login
- Login Validation with Empty Fields
- Password Show and Hide

The tests are configured to run on:

- Chromium
- Firefox
- WebKit

## Manual Testing

A total of 16 test cases were designed and executed manually to verify the Login Page functionality, validation, password requirements, responsiveness, and login flow.
