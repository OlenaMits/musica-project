# Musica project

Project "Musica"

## Description

React SPA. An online store with goods, where client can add goods to the shopping cart or favorite cart, fill a contact form for the order and the list of goods.

## Setup

Ensure the current **node** version 16.x.x or above.

Install the packages:

```bash
npm i
```

Run the dev server:

```bash
npm start
```

### Used technologies

- React
- Material-UI
- Redux
- Redux-thunk
- React router dom
- Formik & Yup
- Unit tests

### Project structure

- `/components` - common reusable components.
- `/context` - folder with context and context providers.
- `/helpers` - should contain app developer-kit (helpers, configs, hooks), but there's only context and redux constants.
- `/pages` - react router pages and layouts.
- `/services` - folder with api and local storage services.
- `/store` - redux actions, reducers and store setup.

