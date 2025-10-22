import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  navItems,
  logoText = "JobLink",
}) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? "expanded" : "collapsed"}`}>
      <div className="sidebar-header">
        {sidebarOpen && <h2 className="logo">{logoText}</h2>}
        <div
          className="logo-toggle-box"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <FiChevronLeft size={20} className="collapse-icon" />
          ) : (
            <>
              <span className="jl-text">JL</span>
              <span className="expand-icon">
                <FiChevronRight size={20} />
              </span>
            </>
          )}
        </div>
      </div>

      <div className="sidebar-scroll">
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="nav-icon">
                <span className="icon">
                  {sidebarOpen ? item.label : item.icon}
                </span>
                {!sidebarOpen && <span className="tooltip">{item.label}</span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
