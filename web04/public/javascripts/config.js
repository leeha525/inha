  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyABnQeqQeOPKY7yThutmuGnIy0g6tIIrio",
    authDomain: "inha-4517d.firebaseapp.com",
    projectId: "inha-4517d",
    storageBucket: "inha-4517d.appspot.com",
    messagingSenderId: "785102488100",
    appId: "1:785102488100:web:9633e0e7590b93f19aceb1",
    measurementId: "G-XNX300Y9HV"
  };

  // Initialize Firebase
  // 외부에서 사용할거라 export 설정
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);