import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses"; 
import { Link } from 'react-router-dom';

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <KanbasNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/:id/*" element={<Courses />} />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
                <Route path="Inbox" element={<h1>Inbox</h1>} />
              </Routes>
              <Link to="/LandingPage">Back to Landing Page</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
