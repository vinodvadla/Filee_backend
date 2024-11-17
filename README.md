<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Filee</h1>
  <p><strong>Filee</strong> is a file-uploading app built with React Native CLI, offering users a seamless way to upload, manage, and organize files. With robust backend support and real-time notifications, Filee ensures a smooth and efficient file-handling experience.</p>

  <h2>Features</h2>
  <ul>
    <li><strong>File Uploads:</strong> Effortlessly upload and manage files of various formats.</li>
    <li><strong>Cloud Storage:</strong> Secure file storage using AWS S3 for scalability and reliability.</li>
    <li><strong>Real-Time Notifications:</strong> Stay updated with Firebase Cloud Messaging.</li>
    <li><strong>Progress Tracking:</strong> Real-time feedback on upload progress.</li>
    <li><strong>State Management:</strong> Redux Toolkit ensures smooth and predictable state transitions.</li>
    <li><strong>Authentication:</strong> Secure login and registration using JWT.</li>
    <li><strong>Responsive UI:</strong> Optimized for both Android and iOS devices.</li>
    <li><strong>Database Integration:</strong> File metadata and user details are managed in a MySQL database.</li>
  </ul>

  <h2>Tech Stack</h2>
  <h3>Frontend</h3>
  <ul>
    <li><strong>Framework:</strong> React Native CLI</li>
    <li><strong>State Management:</strong> Redux Toolkit</li>
    <li><strong>Notifications:</strong> Firebase Cloud Messaging</li>
  </ul>
  <h3>Backend</h3>
  <ul>
    <li><strong>Framework:</strong> Node.js, Express.js</li>
    <li><strong>Database:</strong> MySQL (managed with Sequelize ORM)</li>
    <li><strong>Cloud Storage:</strong> AWS S3</li>
    <li><strong>Authentication:</strong> JWT-based authentication</li>
  </ul>

  <h2>Installation</h2>
  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js (v14 or later)</li>
    <li>React Native CLI environment setup</li>
    <li>MySQL database</li>
    <li>AWS account with S3 bucket configured</li>
    <li>Firebase project with Cloud Messaging enabled</li>
  </ul>

  <h3>Steps to Set Up Locally</h3>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/your-username/filee.git</code></pre>
    </li>
    <li>Navigate to the project directory:
      <pre><code>cd filee</code></pre>
    </li>
    <li>Install dependencies:
      <ul>
        <li>Frontend:
          <pre><code>cd frontend<br>npm install</code></pre>
        </li>
        <li>Backend:
          <pre><code>cd backend<br>npm install</code></pre>
        </li>
      </ul>
    </li>
    <li>Configure the database:
      <ul>
        <li>Create a MySQL database named <code>filee</code>.</li>
        <li>Update the <code>backend/config/config.js</code> file with your database credentials.</li>
      </ul>
    </li>
    <li>Set up environment variables:
      <pre><code>
PORT=5000
      </code></pre>
    </li>
    <li>Configure Firebase Cloud Messaging:
      <ul>
        <li>Add the <code>google-services.json</code> file (for Android) or <code>GoogleService-Info.plist</code> (for iOS) to the respective platform directories in your React Native project.</li>
      </ul>
    </li>
    <li>Run the backend server:
      <pre><code>cd backend<br>npm start</code></pre>
    </li>
    <li>Run the React Native app:
      <pre><code>
cd frontend<br>
npx react-native run-android   # For Android<br>
npx react-native run-ios      # For iOS
      </code></pre>
    </li>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li><strong>Launch the App:</strong> Open Filee on your mobile device.</li>
    <li><strong>Register or Login:</strong> Create an account or log in.</li>
    <li><strong>Upload Files:</strong> Tap the upload button to select files, which are securely stored in AWS S3.</li>
    <li><strong>Receive Notifications:</strong> Get real-time updates for important actions via Firebase Cloud Messaging.</li>
    <li><strong>Manage Files:</strong> Organize, view, and access uploaded files from your account.</li>
  </ol>

  <h2>Contributing</h2>
  <p>We welcome contributions! To contribute:</p>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a feature branch:
      <pre><code>git checkout -b feature-name</code></pre>
    </li>
    <li>Commit your changes:
      <pre><code>git commit -m "Describe your changes"</code></pre>
    </li>
    <li>Push the branch:
      <pre><code>git push origin feature-name</code></pre>
    </li>
    <li>Submit a pull request.</li>
  </ol>

  <h2>License</h2>
  <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

  <h2>Contact</h2>
  <p>For queries or feedback, connect with:</p>
  <ul>
    <li><strong>Vinod Vadla</strong></li>
    <li>Email: <a href="mailto:vinodvinod0979@gmail.com">vinodvinod0979@gmail.com</a></li>
    <li>LinkedIn: <a href="https://linkedin.com/in/vinodvadla" target="_blank">linkedin.com/in/ginur</a></li>
  </ul>
</body>
</html>
