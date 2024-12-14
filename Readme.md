# Mess Management App Documentation

## **Project Overview**
The Mess Management App is designed to improve the dining experience in a mess by providing an intuitive interface for:
1. Displaying meal details and overall ratings.
2. Collecting feedback from users to dynamically update meal ratings.
3. Allowing users to file complaints, which are forwarded to administrators for resolution.

The app consists of three primary features:
- **Meal Display and Ratings:** Users can view the current meal and its aggregated ratings.
- **Feedback Form:** Users can submit ratings and feedback, contributing to the meal's overall rating.
- **Complaint Submission:** Users can lodge complaints regarding the mess, which admins can address.

---

## **Tech Stack Used**
### **Frontend**
- **React Native**: For building the mobile application.
- **React Navigation**: For navigation between pages.
- **Axios**: For API calls.

### **Backend**
- **Node.js**: For server-side logic.
- **Express.js**: For handling API requests.

### **Database**
- **MongoDB Atlas**: For cloud-hosted NoSQL database storage.

---

## **Setup & Installation Instructions**

### **Prerequisites**
1. Node.js (version 14 or above)
2. npm or yarn (package managers)
3. MongoDB Atlas account
4. Android Studio (for Android development) or Xcode (for iOS development)

### **Steps to Set Up the Project**
#### **Backend Setup**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the backend folder and configure environment variables:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-atlas-connection-string>
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

#### **Frontend Setup**
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React Native app:
   ```bash
   npm start
   ```
4. Run the app on a device/emulator:
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```

---

## **Key Features**
### **1. Meal Display and Ratings**
- Displays the current meal (Breakfast/Lunch/Dinner) along with aggregated ratings.
- Ratings are updated dynamically based on user feedback.

### **2. Feedback Form**
- Allows users to rate meals and provide textual feedback.
- Contributes to the overall rating displayed on the meal page.

### **3. Complaint Submission**
- Users can submit complaints with details.
- Complaints are forwarded to administrators for resolution.

---

## **API Endpoints**

### **Complaint Management**
- **POST /api/complaints/complaint**: Submit a new complaint.
- **GET /api/complaints/complaint/:id**: Retrieve a specific complaint by its ID.
- **GET /checkComplaints**: Escalate complaints to higher authorities if not addressed by mess representatives in a timely manner.

### **Response Management**
- **POST /api/responses**: Add a response to a complaint.
- **GET /api/responses/response/:complaintId**: Retrieve responses associated with a specific complaint.

### **Feedback Management**
- **POST /api/feedbacks/feedback**: Submit feedback and rating for a meal.
- **GET /api/feedback/average/:mealId**: Get the average rating for a meal.

### **Meal Management**
- **GET /api/meals/current**: Retrieve the current meal and its details.
- **POST /api/meals**: Add a new meal to the schedule.
- **PUT /api/meals/:id**: Update a meal's details by its ID.

---

## **Team Member Details**

    1.M.S.S.S.Krishna
    2.T.Bharath Kumar
    3.M.Ajay Kumar
    4.D.Anand

