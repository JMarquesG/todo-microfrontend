# Nuxt.js Microfrontend for To-Do List Application

This project is a Server-Side Rendered (SSR) Nuxt.js microfrontend built with TypeScript.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/JMarquesG/todo-microfrontend.git
   cd nuxt-microfrontend
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```


## Configuration

1. **Set the API Base URL**

   Create a `.env` file at the root of the project:

   ```bash
   touch .env
   ```

   Add the following line to `.env`, replacing the URL with your backend API's URL if different:

   ```dotenv
   API_BASE_URL=http://localhost:3000/api
   ```


## Running the Application

1. **Start the Nuxt.js Application**

   Using npm:

   ```bash
   npm run dev
   ```

   The application will start on `http://localhost:3001`.

2. **Ensure the Backend API is Running**

   Start your Express.js backend API if it's not already running. The frontend relies on the API to fetch and manipulate tasks.

## Project Structure

```
todo-microfrontend/
├── assets/
├── components/
│   └── TaskForm.vue
├── layouts/
├── middleware/
├── pages/
│   ├── index.vue
│   ├── tasks/
│   │   ├── create.vue
│   │   ├── edit/
│   │   │   └── _id.vue
│   │   └── _id.vue
├── plugins/
├── static/
├── store/
├── types/
│   └── Task.ts
├── nuxt.config.js
├── package.json
├── tsconfig.json
├── .env
```

## Usage

### Home Page

- **URL**: `http://localhost:3000/`
- **Description**: Displays a list of all tasks with links to their detail pages.
- **Actions**:
  - **View Task Details**: Click on a task title.
  - **Create New Task**: Click on the "Create New Task" link.

### View Task Details

- **URL**: `http://localhost:3000/tasks/{id}`
- **Description**: Displays detailed information about a specific task.
- **Actions**:
  - **Edit Task**: Click on the "Edit" link.
  - **Delete Task**: Click on the "Delete" button.
  - **Back to Tasks**: Click on the "Back to Tasks" link.

### Create a New Task

- **URL**: `http://localhost:3000/tasks/create`
- **Description**: Provides a form to create a new task.
- **Actions**:
  - **Submit**: Fill in the form and click "Create Task".
  - **Back to Tasks**: Click on the "Back to Tasks" link.

### Edit a Task

- **URL**: `http://localhost:3000/tasks/edit/{id}`
- **Description**: Provides a form pre-filled with the task's current data for editing.
- **Actions**:
  - **Submit**: Modify the form and click "Update Task".
  - **Back to Task**: Click on the "Back to Task" link.

### Delete a Task

- **Action**: From the task detail page, click on the "Delete" button.
- **Confirmation**: A confirmation dialog will appear. Click "OK" to proceed.
- **Result**: The task is deleted, and you are redirected to the tasks list.
