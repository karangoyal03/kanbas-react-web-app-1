import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div id="landing-page">
      <h1>Sreenikitha Reddy Doddareddy - SummerFull2024</h1>
      <h2>Lab Assignments</h2>
      <ul>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
      </ul>
      <h2>Kanbas Application</h2>
      <Link to="/Kanbas">Go to Kanbas</Link>
      <h2>Source Code Repositories</h2>
      <ul>
        <li><a href="https://github.com/sreenikithareddy/kanbas-react-web-app" target="_blank" rel="noopener noreferrer">Kanbas React Web App Repository</a></li>
      </ul>
    </div>
  );
}