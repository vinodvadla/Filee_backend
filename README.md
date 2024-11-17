Filee
Filee is a file-uploading app built with React Native CLI, offering users a seamless way to upload, manage, and organize files. With robust backend support and real-time notifications, Filee ensures a smooth and efficient file-handling experience.

Features
File Uploads: Effortlessly upload and manage files of various formats.
Cloud Storage: Secure file storage using AWS S3 for scalability and reliability.
Real-Time Notifications: Stay updated with Firebase Cloud Messaging.
Progress Tracking: Real-time feedback on upload progress.
State Management: Redux Toolkit ensures smooth and predictable state transitions.
Authentication: Secure login and registration using JWT.
Responsive UI: Optimized for both Android and iOS devices.
Database Integration: File metadata and user details are managed in a MySQL database.
Tech Stack
Frontend
Framework: React Native CLI
State Management: Redux Toolkit
Notifications: Firebase Cloud Messaging
Backend
Framework: Node.js, Express.js
Database: MySQL (managed with Sequelize ORM)
Cloud Storage: AWS S3
Authentication: JWT-based authentication
Installation
Prerequisites
Node.js (v14 or later)
React Native CLI environment setup
MySQL database
AWS account with S3 bucket configured
Firebase project with Cloud Messaging enabled
Steps to Set Up Locally
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/filee.git
Navigate to the project directory:
bash
Copy code
cd filee
Install dependencies:
Frontend:
bash
Copy code
cd frontend
npm install
Backend:
bash
Copy code
cd backend
npm install
Configure the database:
Create a MySQL database named filee.
Update the backend/config/config.js file with your database credentials.
Set up environment variables: Create a .env file in the backend directory and configure the following:
makefile
Copy code
PORT=5000
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=filee
JWT_SECRET=your_secret_key
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_s3_bucket_name
AWS_REGION=your_aws_region
FIREBASE_SERVER_KEY=your_firebase_server_key
Configure Firebase Cloud Messaging:
Add the google-services.json file (for Android) or GoogleService-Info.plist (for iOS) to the respective platform directories in your React Native project.
Run the backend server:
bash
Copy code
cd backend
npm start
Run the React Native app:
bash
Copy code
cd frontend
npx react-native run-android   # For Android
npx react-native run-ios      # For iOS
Usage
Launch the App: Open Filee on your mobile device.
Register or Login: Create an account or log in.
Upload Files: Tap the upload button to select files, which are securely stored in AWS S3.
Receive Notifications: Get real-time updates for important actions via Firebase Cloud Messaging.
Manage Files: Organize, view, and access uploaded files from your account.
Contributing
We welcome contributions! To contribute:

Fork the repository.
Create a feature branch:
bash
Copy code
git checkout -b feature-name
Commit your changes:
bash
Copy code
git commit -m "Describe your changes"
Push the branch:
bash
Copy code
git push origin feature-name
Submit a pull request.
License
This project is licensed under the MIT License.

Contact
For queries or feedback, connect with:

Vinod Vadla
Email: vinodvinod0979@gmail.com
LinkedIn: linkedin.com/in/ginur
