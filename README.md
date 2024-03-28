# React Contacts Book

A simple CRUD and API ReactJS web app that serves as the filteration task for [UpskillingEG](https://www.linkedin.com/company/upskilling-eg/) Job Simulation Bootcamp.

## Table of Contents

1. [Overview](#overview)
2. [Application Architecture](#application-architecture)
3. [Features](#features)
4. [Limitaions and Issues](#limitaions-and-issues)
5. [API Docs and Routes](#api-docs-and-routes)
6. [Installation](#installation)
7. [Usage](#usage)
8. [Technologies Used](#technologies-used)
9. [File Structure](#file-structure)
10. [Contributing](#contributing)
11. [License](#license)

## Overview

This React Contacts Book is a web application developed using React.js. It provides a user-friendly interface for managing contacts, including features like searching, pagination, and CRUD operations (Create, Read, Update, Delete).

> <p align="center">
>   <img width="100%" src="public/contact-book-mockup.png">
> </p>

## Application Architecture

Refer to the following diagram to get the bigger picture about the application architecture and data flow.

> <p align="center">
>   <img width="100%" src="public/app-map.PNG">
> </p>

## Features

- Access and manage contacts list delivered by restAPI.
- View the list of contacts with pagination support.
- Search for contacts by name.
- Add new contacts to the list.
- Edit existing contacts.
- Delete contacts from the list.
- Advanced state management using `React ContextAPI` and `Reducers`.
- Animated custom built popup modals.
- Responsive Design.
- Clean and documented code.

## Limitaions and Issues

This app faces a couple of issues due to API limitaions as follows:

- Contacts filtering by search filters contacts per page only not whole contacts list.
  > The `API` had no support for filtered get requests.
- Uploading pictures of contacts doesn't really post these pictures to the `API`. Instead an ObjectURL gets created for the picture path, and it will be shown only to the local user.
  > The `API` had no support for `multipart` formData request bodies.
- This `URL.createObjectURL()` generates a `blob URL` string that represents the given `Image`, this `blob URL` is not permanent. It's short-lived and tied to the current document's lifetime which ends on page refresh.
  > - So, when you refresh the page, this `blob URL` becomes invalid, causing the image to appear broken.
  > - To be solved by storing the image in `Local Storage`.
- Phone numbers are generated randomly for each contact and they are changed each time their parent components are mounted.
  > The `API` wasn't configured to have record for phone number.

## API Docs And Routes

The application uses the following API endpoints:

| Description                | Method | URL                                                                                                  |
| -------------------------- | ------ | ---------------------------------------------------------------------------------------------------- |
| List Users                 | GET    | [https://dummyapi.io/data/v1/user](https://dummyapi.io/data/v1/user)                                 |
| Add User                   | POST   | [https://dummyapi.io/data/v1/user/create](https://dummyapi.io/data/v1/user/create)                   |
| Update User                | PUT    | [https://dummyapi.io/data/v1/user/:id](https://dummyapi.io/data/v1/user/:id)                         |
| Delete User                | DELETE | [https://dummyapi.io/data/v1/user/:id](https://dummyapi.io/data/v1/user/:id)                         |
| List Users with Pagination | GET    | [https://dummyapi.io/data/v1/user?limit=10&page=5](https://dummyapi.io/data/v1/user?limit=10&page=5) |

Note: For all requests, you need to include `app-id = 64fc4a747b1786417e354f31` in your headers.

For more details and to get your own `app-id`, please refer to this [API Documentation](https://dummyapi.io/docs/user).

## Installation

To run this React app locally on your machine, follow these steps:

1. Clone this repository to your local machine using Git:
   > `bash git clone https://github.com/Farahat612/UpskillingEG-ContactBookApp `
2. Navigate to the project directory:
   > `cd UpskillingEG-ContactBookApp-master`
3. Install the necessary dependencies using npm:
   > `npm install`

## Usage

After completing the installation steps, you can start the development server by running:

> `npm run dev `

This command will start the application and open it in your default web browser. You can then interact with the application using the provided interface.

## Technologies Used

This app is built using the following technologies:

- `React.js`: `JavaScript` library for building user interfaces.
- `Vite`: A `JavaScript` more powerful build tool than CRA `create-react-app`.
- `Axios`: `HTTP` client for making `API` requests.
- `Styled-components`: `npm` library for styling React components with `CSS`.
- `react-spring`: `npm` library for custom animations.
- `react-toastify`: `npm` library for predesigned alerts.
- `react-icons`: `npm` library for icons.
- `PropTypes`: Runtime type checking for React props.

## File Structure

The file structure of the project is as follows:

```javaScript
- node_modules // Dependencies
- public // images and assets
- src
  - assets // data and api instance
  - components // all project components
  - contexts // required contexts for state management
  - styles // parent directory for the styled components
    - components
    - utilities
  - App.jsx // main root component
  - main.jsx // application entry point
- index.html
```

## Contributing

Contributions to this React app are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m "Add new feature"`
4. Push your changes to your forked repository: `git push origin feature/new-feature`
5. Open a pull request on the original repository and describe your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
