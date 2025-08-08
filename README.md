# 🚀 Doctor Appointment Booking System

This project is a **comprehensive full-stack application** designed for doctor appointment booking, meticulously built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It offers a complete online solution featuring **three distinct levels of user authentication**: patients, doctors, and administrators, each empowered with specific functionalities to manage appointments, profiles, and the overall system effectively. A core feature of the application is its secure online payment processing for appointment fees, implemented **solely through Stripe**, aligning with your specific requirement.

## ✨ Key Features

*   **User Authentication & Roles**:
    *   **Patient Login**: Allows patients to register, log in, book appointments, view their booked appointments, manage their profiles, and make online payments. Patients can also cancel appointments.
    *   **Doctor Login**: Enables doctors to log in, manage their scheduled appointments, track their earnings, and update their personal and professional profiles. Doctors can mark appointments as completed or cancelled.
    *   **Admin Login**: Provides administrators with control to log in, create and manage doctor profiles, oversee all appointments, and view essential dashboard data including total doctors, appointments, and patients. Admin can also enable or disable doctor availability.

*   **Appointment Management**:
    *   **Patient Appointment Booking**: Users can effortlessly select from a list of doctors, choose available dates and specific time slots, and confirm their appointments. The system displays available slots for the next 7 days, automatically hiding any time slots that are already booked to prevent double bookings.
    *   **Flexible Appointment Cancellation**: Both patients and doctors have the capability to cancel appointments. Administrators can also cancel appointments via the admin panel.
    *   **Appointment Completion**: Doctors can mark appointments as completed, affecting their earnings records.

*   **Doctor & Patient Profiles**:
    *   **Detailed Doctor Profiles**: Each doctor's profile includes comprehensive details such as their image, name, degree, years of experience, an 'about' section, consultation fees, and address.
    *   **Profile Management**: Both patients and doctors can easily view and update their respective profile information, ensuring their details are always current. Patient profiles include image, email, phone, address, gender, and date of birth, with a default image for new users.

*   **Payment Gateway**: All online appointment fees are processed securely via **Stripe**. The application handles the creation of payment orders and verification of payment status.

*   **Doctor Filtering & Search**: Patients can efficiently filter doctors based on their medical specialty and view a comprehensive list of all available doctors.

*   **Admin Dashboard**: A centralized dashboard provides a clear overview, displaying the total number of doctors, appointments, and patients, alongside a concise list of the latest five bookings for quick insights.

*   **Responsive User Interface**: The application's design is fully responsive, ensuring a seamless user experience across various screen sizes, including desktops, tablets, and mobile devices.

*   **Global State Management**: Leverages the power of **React Context API** for efficient and centralized management of the application's global state, including user authentication status, doctor data, and user profile information.

*   **Smooth Scrolling**: Enhances user navigation by providing a smooth scrolling experience when navigating to different sections of the page.

## 💻 Technologies Used

This project is built upon the following technologies:

*   **MERN Stack**:
    *   **MongoDB**: A NoSQL database used for storing all application data, including user profiles, doctor details, and appointment information. MongoDB Atlas is used for cloud hosting.
    *   **Express.js**: A fast, unopinionated, minimalist web framework for Node.js, used for building the backend API endpoints.
    *   **React.js**: A JavaScript library for building user interfaces, used for both the patient-facing frontend and the administrative panel.
    *   **Node.js**: A JavaScript runtime environment that executes JavaScript code outside a web browser, forming the backend of the application.

*   **Supporting Libraries & Tools**:
    *   **Axios**: Promise-based HTTP client for making API requests from the frontend.
    *   **React Router DOM**: For declarative routing in React applications.
    *   **React Toastify**: For beautiful and customizable toast notifications.
    *   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
    *   **Multer**: A Node.js middleware for handling `multipart/form-data`, primarily used for file uploads (e.g., doctor and user profile images).
    *   **bcrypt**: A library for hashing passwords securely for both doctors and users.
    *   **Cloudinary**: A cloud-based image and video management service, used for storing and serving user and doctor profile images.
    *   **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
    *   **JSON Web Token (JWT)**: For creating secure, stateless authentication tokens for Admin, Doctors, and Patients.
    *   **Nodemon**: A utility that automatically restarts the Node.js server when file changes are detected during development.
    *   **Validator**: A library of string validators for validating email formats and password strength.
    *   **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.

## 🛠️ Installation & Setup

To get a copy of this project up and running on your local machine, follow these step-by-step instructions:

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js & npm**: Download and install from [nodejs.org](https://nodejs.org/).
*   **MongoDB Atlas Account**: Register for a free account at [mongodb.com/atlas](https://www.mongodb.com/atlas/) to host your database in the cloud.
*   **Cloudinary Account**: Sign up for a free account at [cloudinary.com](https://cloudinary.com/) for image storage.
*   **Stripe Account**: Create an account at [stripe.com](https://stripe.com/) to integrate payment functionality.

### 1. Backend Setup

1.  **Create project folder**: Create a new folder (e.g., `prescripto`) for your project and open it in your VS Code editor.
2.  **Navigate to the `backend` directory**: Inside your main project folder, create a `backend` folder.
    ```bash
    cd backend
    ```
3.  **Initialize npm and install dependencies**:
    ```bash
    npm init -y
    npm install express mongoose multer bcrypt cloudinary cors dotenv jsonwebtoken nodemon validator
    ```
    Set `type: module` in `package.json` for ES module syntax.
4.  **Create a `.env` file** in the `backend` directory. Populate it with your environment variables. Replace the placeholder values with your actual credentials obtained from MongoDB Atlas, Cloudinary, and Stripe:
    ```
    PORT=4000
    MONGODB_URI="mongodb+srv://<your_username>:<your_password>@cluster0.your_cluster_id.mongodb.net/prescripto?retryWrites=true&w=majority"
    CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
    CLOUDINARY_API_KEY="your_cloudinary_api_key"
    CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
    JWT_SECRET="a_very_secret_key_for_jwt_tokens"
    ADMIN_EMAIL="admin@prescripto.com"
    ADMIN_PASSWORD="admin_strong_password"
    STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
    CURRENCY="USD" # Example: INR, EUR, USD
    ```
    *Ensure your `MONGODB_URI` correctly points to your Atlas cluster and includes your database name (e.g., `prescripto`). For `STRIPE_SECRET_KEY` and `CURRENCY`, adapt from the Razor Pay setup in source to use Stripe as per your request.*
5.  **Start the backend server**: Add the following script to your `package.json` inside the `"scripts"` section: `"server": "nodemon server.js"`. Then run:
    ```bash
    npm run server
    ```
    This command uses `nodemon` to automatically restart the server whenever you make changes to the code. The server will typically run on `http://localhost:4000`.

### 2. Frontend Setup (Patient Application)

1.  **Navigate to the `frontend` directory**: Inside your main project folder, create a `frontend` folder.
    ```bash
    cd frontend
    ```
2.  **Initialize Vite and install project dependencies**:
    ```bash
    npm create vite@latest . -- --template react
    npm install axios react-router-dom react-toastify
    ```
    The `.` creates the Vite project in the current folder, select `react` and `javascript` when prompted.
3.  **Configure Tailwind CSS**:
    *   Install Tailwind dependencies:
        ```bash
        npm install -D tailwindcss postcss autoprefixer
        ```
    *   Initialize Tailwind CSS:
        ```bash
        npx tailwindcss init -p
        ```
    *   Update your `tailwind.config.js` file `content` property to include paths like `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`.
    *   Add the Tailwind directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`) to your `src/index.css` file.
4.  **Create a `.env` file** in the `frontend` directory and add your backend URL and Stripe Publishable Key:
    ```
    VITE_BACKEND_URL="http://localhost:4000"
    VITE_STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
    ```
    *Note the `VITE_` prefix is essential for Vite to expose these variables to the client-side code. For `VITE_STRIPE_PUBLISHABLE_KEY`, this is inferred from the need for a publishable key in frontend Stripe integration.*
5.  **Set frontend development port**: In `vite.config.js` within the `frontend` directory, configure the server port:
    ```javascript
    export default defineConfig({
      // ...
      server: {
        port: 5173, // or your desired port
      }
    });
    ```
   
6.  **Run the frontend development server**:
    ```bash
    npm run dev
    ```
    The patient application will typically run on `http://localhost:5173`.

### 3. Admin Panel Setup

1.  **Navigate to the `admin` directory**: Inside your main project folder, create an `admin` folder.
    ```bash
    cd admin
    ```
2.  **Initialize Vite and install project dependencies**:
    ```bash
    npm create vite@latest . -- --template react
    npm install axios react-router-dom react-toastify
    ```
   
3.  **Configure Tailwind CSS**: Follow the same steps as for the Frontend Setup (step 3 above) to configure Tailwind CSS within the `admin` directory.
4.  **Create a `.env` file** in the `admin` directory and add your backend URL:
    ```
    VITE_BACKEND_URL="http://localhost:4000"
    ```
   
5.  **Set admin panel development port**: In `vite.config.js` within the `admin` directory, configure the server port:
    ```javascript
    export default defineConfig({
      // ...
      server: {
        port: 5174, // or your desired port
      }
    });
    ```
   
6.  **Run the admin panel development server**:
    ```bash
    npm run dev
    ```
    The admin panel will typically run on `http://localhost:5174`.

## 🚀 Usage

1.  **Start all three applications**: Ensure your backend, frontend (patient app), and admin panel servers are all running concurrently in separate terminal windows.
2.  **Access the applications**:
    *   **Patient Application**: Open your web browser and navigate to the frontend URL (e.g., `http://localhost:5173`).
    *   **Admin Panel**: Open your web browser and navigate to the admin panel URL (e.g., `http://localhost:5174`).
3.  **Admin Login**: Use the `ADMIN_EMAIL` and `ADMIN_PASSWORD` credentials defined in your backend `.env` file to log into the admin panel. From there, you can add new doctors and manage the system.
4.  **Patient Registration & Booking**: On the patient application, register a new account to explore the features, book appointments, and manage your profile.
5.  **Doctor Login**: Doctors can log in to their panel to manage their appointments and profiles.
