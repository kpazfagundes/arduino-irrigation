import React from 'react';
import { Link } from 'react-router-dom'

export default props =>
  <nav className="navbar navbar-expand-sm navbar-expand-md navbar-dark bg-dark fixed-top pt-2 pb-2">
      <Link className="navbar-brand" to="/" >HOME IRRIGATION PROJECT  <br/><small>Arduíno (Uno + Yun) + React + Node.js</small></Link>
  </nav>