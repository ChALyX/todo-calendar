# React Todo Calendar Vite App

A React Todo app built using Vite and technologies like React, Tailwind CSS, react-big-calendar, react-datepicker, and date-fns.

![Image of Todo Application](https://github.com/forreya/todo-calendar/blob/main/app_image.png)

---

## Deployment Link

[Click here for Netlify Deployment link](https://todo-calendar-forreya.netlify.app/)

---

## About

This React Todo Vite app allows users to manage todos on a calendar. Users can add new todos by providing a title and a date. The app provides a user-friendly interface for adding todos and displays them on the calendar.

---

## How to Install

Follow the steps below to install and run the React Todo Vite app:

1. Clone this repository to your local machine.
2. Make sure you have Node.js and npm (Node Package Manager) installed.
3. Open your terminal and navigate to the project's directory.
4. Run the following command to install the dependencies (both client & server):

```
npm install
```

5. After the installation is complete, start the client

```
npm run dev
```

6. Start the server

```
npx nodemon index.js
```

6. The app should now be running on [http://localhost:5173](http://localhost:5173). Open this URL in your web browser to view the app.

---

## Functionalities

- Display & view todos on a calendar
- Add new todos with a title and date (each day can have multiple todos)
- Fetches previous todo data from MongoDB database using a Node.js backend
- Creates new todo documents in the database using a POST request everytime the user creates a new todo

---

## Some Bugs/Errors or Things to Improve Upon:

- The 'week' view is broken and causes the app to crash. I suspect it's because of the react-big-calendar' library but I didn't have time to fix this issue.
- There isn't a 'delete todo' app functionality yet except for directly deleting from the MongoDB database

---

## Technologies Used

The React Calendar Vite app is built using the following technologies:

- Vite
- React
- Tailwind CSS
- react-big-calendar
- react-datepicker
- date-fns

---
