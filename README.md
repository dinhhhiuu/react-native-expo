# React Native Testing

[![CI](https://github.com/dinhhhiuu/react-native-expo/actions/workflows/build.yml/badge.svg)](https://github.com/dinhhhiuu/react-native-expo/actions) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dinhhhiuu_react-native-expo&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=dinhhhiuu_react-native-expo)

## Running tests locally

Requirements: Node 20 and npm

Install dependencies:

```bash
npm install
```

Run lint, typecheck and tests with coverage:

```bash
npx tsc --noEmit
npx jest --ci --runInBand --reporters=default --coverage
```

After tests complete the HTML coverage report is at `coverage/lcov-report/index.html` — open it in your browser to view details.

Notes:

- GitHub Actions uploads the HTML report as an artifact named `test-report` (contains `coverage/lcov-report`).
- SonarCloud analysis runs when `SONAR_TOKEN` is configured in repository Secrets; coverage used: `coverage/lcov.info`.
