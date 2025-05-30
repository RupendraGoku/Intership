import React from 'react';
import './TopSection.css';
import heroThumb from '../images/heroThumb.png';
import heroShape from '../images/heroShape.png'; 
import featureIcon from '../images/featureIcon.png';
import featureIcon1 from '../images/featureIcon1.png';
import featureIcon2 from '../images/featureIcon2.png';
import featureShape from '../images/featureShape.png';
import featureShap from '../images/featureShap.png';
import featureboxshape from '../images/featureboxshape.png';

const TopSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side */}
        <div className="hero-text">
          <p className="small-heading">IT SOLUTION AGENCY IN USA</p>
          <h1 className="main-heading">BUSINESS INNOVATION WITH IT EXPERT</h1>
          <p className="subtext">
            Professionally optimize interdependent intellectual interoperable connect best practices.
            Progressively fabricate done.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Let's Talk</button>
            <button className="btn btn-secondary">Read More</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-image-wrap">
          <img src={heroShape} alt="IT Expert" className="hero-main" />
        </div>
        <div className="hero-image">
          <img src={heroThumb} alt="IT Expert"  />
        </div>

      </div>

      {/* Info Cards */}
  <div className="card-section">
  <div className="info-card">
  <img src={featureboxshape} alt="Texture Overlay" className="texture-overlay" />
    <div className="icon">
      <img src={featureShape} alt="Feature Shape 1" className="shape shape-1" />
      <img src={featureShap} alt="Feature Shape 2" className="shape shape-2" />
      <img src={featureIcon} alt="Feature Icon" className="icon-img" />
    </div>
         <div className="content">

    <h3>22+ Year Experience</h3>
    <p>Monotonically synergize grants to business visualize strategic infomediaries</p>
  </div></div>

  <div className="info-card">
      <img src={featureboxshape} alt="Texture Overlay" className="texture-overlay" />
    <div className="icon">
      <img src={featureShape} alt="Feature Shape 1" className="shape shape-1" />
      <img src={featureShap} alt="Feature Shape 2" className="shape shape-2" />
      <img src={featureIcon1} alt="Feature Icon" className="icon-img" />
    </div>
         <div className="content">

    <h3>Dedicated Members</h3>
    <p>Monotonically synergize grants to business visualize strategic infomediaries</p>
  </div></div>

  <div className="info-card">
      <img src={featureboxshape} alt="Texture Overlay" className="texture-overlay" />
    <div className="icon">
      <img src={featureShape} alt="Feature Shape 1" className="shape shape-1" />
      <img src={featureShap} alt="Feature Shape 2" className="shape shape-2" />
      <img src={featureIcon2} alt="Feature Icon" className="icon-img" />
    </div>
     <div className="content">
    <h3>Valuable Supports</h3>
    <p>Monotonically synergize grants to business visualize strategic infomediaries</p>
  </div></div>
</div>

    </section>
  );
};

export default TopSection;
