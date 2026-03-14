import React, { useState, useEffect } from 'react';

function Header() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("light-theme")
    }
    else{
      document.body.classList.add("light-theme")
    }
  }, [isDark]);
  
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <i className="fas fa-bullseye logo-icon"></i>
          <h1>GoalsList</h1>
        </div>
        <button className="theme-toggle" id="themeToggle" onClick={() => setIsDark(!isDark)}>
          <i className="fas fa-moon"></i>
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
