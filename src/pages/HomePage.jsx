import { Link } from "react-router-dom";

import chef from "../assets/chef.jpg";
import Donut from "../assets/Donut.jpg";
import dal from "../assets/dal.jpg";
import "./HomePage.css";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar/>

      <main className="main-content">
        <div className="content-left">
          <p className="tagline">One App is Enough</p>
          <h1 className="main-title">
            #1 Best <span className="highlight">Restaurant</span>
            <br />
            Management <span className="highlight">Software</span>
            <br />
            in Nepal
          </h1>
          <p className="description">
            With <span className="brand-highlight">SpiceBite</span> manage all
            your restaurant operations, orders, menu, inventory, finance and
            more, all from one platform.
          </p>
          <div className="cta-buttons">
            <button className="start-free-main-btn">Start for Free →</button>
            <button className="lets-talk-btn">Let's Talk!</button>
          </div>
        </div>
        <div className="content-right">
          <div className="dashboard-preview">
            <div className="person-container">
              <div className="circle-bg"></div>
              <div className="person-image">
                <img src={chef} alt="Chef" className="chef-icon" />
              </div>
            </div>
            <div className="inventory-card float-animation">
              <div className="flex flex-col items-center rounded-lg  ">
                <div className="card-header ">
                  <span className="card-title">Inventory | lentils</span>
                </div>
                <div className="dal-image">
                  <img src={dal} alt="dal" className="dal-icon" />
                </div>
              </div>
              <div className="inventory-stats flex ">
                <div className="stat-row">
                  <span className="stat-label">Opening Stock</span>
                  <span className="stat-value">
                    {" "}
                    30<sub>kg</sub>
                  </span>
                </div>
                <div className="stat-row ">
                  <span className="stat-label">Closing Stock</span>
                  <span className="stat-value">
                    12<sub>kg</sub>
                  </span>
                </div>
              </div>
            </div>
            <div className="order-card float-animation-2">
              <div className="order-header">
                <span className="order-title">New Order Received</span>
                <span className="notification-icon">🔔</span>
              </div>
              <div className="order-content">
                <div className="order-image">
                  <img src={Donut} alt="Donut" className="Donut-icon" />
                </div>
                <div className="order-details">
                  <h4>CREAM DONUT</h4>
                  <p>50 pcs </p>
                </div>
              </div>
              <div className="order-actions">
                <button className="accept-btn">Accept Order</button>
                <button className="decline-btn">Decline</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="overflow-hidden whitespace-nowrap relative w-full bg-white py-4">
  <div className="slider inline-block animate-marquee">
    <img src="/brands/brand1.png" alt="Brand 1" className="inline-block mx-8 h-12" />
    <img src="/brands/brand2.png" alt="Brand 2" className="inline-block mx-8 h-12" />
    <img src="/brands/brand3.png" alt="Brand 3" className="inline-block mx-8 h-12" />
    <img src="/brands/brand4.png" alt="Brand 4" className="inline-block mx-8 h-12" />
    {/* <!-- Repeat set for infinite feel --> */}
    <img src="/brands/brand1.png" alt="Brand 1" className="inline-block mx-8 h-12" />
    <img src="/brands/brand2.png" alt="Brand 2" className="inline-block mx-8 h-12" />
    <img src="/brands/brand3.png" alt="Brand 3" className="inline-block mx-8 h-12" />
    <img src="/brands/brand4.png" alt="Brand 4" className="inline-block mx-8 h-12" />
  </div>
</div>

    </div>
  );
};

export default HomePage;
