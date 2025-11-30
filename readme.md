# Playwright Automation Project (TypeScript)

![Build](https://img.shields.io/github/actions/workflow/status/username/repo/playwright.yml?style=flat-square)
![Node.js](https://img.shields.io/node/v/v?style=flat-square)
![License](https://img.shields.io/github/license/username/repo?style=flat-square)

> Automated testing project using Playwright and TypeScript with multi-environment support, logging, screenshots, and videos.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Utilities](#utilities)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This project demonstrates a robust **automation framework** using **Playwright** with **TypeScript**. It includes:

- Browser and page fixtures with automatic setup/cleanup
- Multi-environment support (e.g., Recette, Preprod, Prod)
- Logging for test execution
- Screenshots and video recording on test failure
- Page Object Model (POM) implementation
- Utility classes for actions (`goto`, `fill`, `click`) and assertions (`expectVisible`, `expectText`, etc.)

---

## Features

- ✅ Multi-environment testing (configurable via constants)
- ✅ Logging using a centralized Logger class
- ✅ Automatic screenshots and videos for debugging
- ✅ Reusable PageActions and PageAssertions utilities
- ✅ Fixture-based setup for browser contexts and pages
- ✅ TypeScript with strict typing for safety

---

## Project Structure

playwright-project/
│
├─ tests/ # Test specs
│ ├─ login.spec.ts
│ └─ ...
│
├─ pages/ # Page Object Model classes
│ ├─ LoginPage.ts
│ └─ ...
│
├─ utils/ # Utilities (logger, actions, assertions, hooks)
│ ├─ logger.ts
│ ├─ PageActions.ts
│ ├─ PageAssertions.ts
│ ├─ hooks.ts
│ └─ config.ts
│
├─ fixtures/ # Playwright test fixtures
│ └─ fixtures.ts
│
├─ package.json
├─ tsconfig.json
└─ README.md

yaml
Copier le code

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn
- Playwright

### Install dependencies

```bash
npm install
# or
yarn install
Install Playwright browsers
bash
Copier le code
npx playwright install
Configuration
The project uses a config file for multi-environment setup:

ts
Copier le code
// utils/config.ts
export default {
  recette: { baseURL: 'https://recette.example.com', email: 'qa@test.com', password: 'password123' },
  preprod: { baseURL: 'https://preprod.example.com', email: 'qa@test.com', password: 'password123' },
  prod: { baseURL: 'https://prod.example.com', email: 'qa@test.com', password: 'password123' },
};
You can choose the environment by setting the variable:

ts
Copier le code
const CONFIG = ENV['prod']; // Force Prod
Running Tests
Run all tests
bash
Copier le code
npx playwright test
Run a single test file
bash
Copier le code
npx playwright test tests/login.spec.ts
Run tests in headed mode (with browser UI)
bash
Copier le code
npx playwright test --headed
Run tests for a specific environment
ts
Copier le code
// In the spec
const CONFIG = ENV['preprod'];