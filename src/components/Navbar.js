import React from "react"
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <ul class="nav">
  <li class="nav-item">
    <Link class="nav-link active" to="/">SPA example</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="about">About</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/contactus">Contact Us</Link>
  </li>
</ul>
    );
}