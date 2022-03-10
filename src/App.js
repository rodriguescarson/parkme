import React from 'react';
import "./app.css";
export default function App() {
  return (
    <div>
      <nav className="nav_bar">
        <h1>
          Park <b>Me</b>{" "}
        </h1>

        <ul className="list">
          <li>Username </li>
          <li>
            <a href="#">LOGOUT</a>
          </li>
        </ul>
      </nav>

      {/* <!--main section--> */}
      <div className="main_sec">
        {/* <!--Info / Predictions --> */}
        <div className="left">
          <div className="card">
            <h2>Block Info</h2>
            <div className="details">
              <h4>parking will be free by 5pm </h4>
            </div>
          </div>
          <div className="card">
            <h2>Block Info</h2>
            <div className="details">
              <h4>parking will be free by 5pm </h4>
            </div>
          </div>
          <div className="card">
            <h2>Block Info</h2>
            <div className="details">
              <h4>parking will be free by 5pm </h4>
            </div>
          </div>
          <div className="card">
            <h2>Block Info</h2>
            <div className="details">
              <h4>parking will be free by 5pm </h4>
            </div>
          </div>
          <div className="card">
            <h2>Block Info</h2>
            <div className="details">
              <h4>parking will be free by 5pm </h4>
            </div>
          </div>
          <br />
          <div className="card">
            <a href="#" className="btnx">
              Load More
            </a>
          </div>
        </div>

        {/*Heat Map */}
        <div className="right">
          <div className="map_box">
            <div className="top">
              <h1>Market Parking</h1>
              <div className="loc">
                <h2>Margao-Goa</h2> <h4>xyz colony near xyz place 2030388</h4>
              </div>
            </div>
            <div className="bottom">
              <div className="map"></div>

              <a href="#" className="bt">
                SWITCH TO VIDEO
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};