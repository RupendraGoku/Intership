import './Second.css';
import aboutshape from '../images/aboutshape.png';
import aboutthumb from '../images/aboutthumb.png';
import abouticon1 from '../images/abouticon1.png';
import abouticon2 from '../images/abouticon2.png';
import abouticon3 from '../images/abouticon3.png';
import abouticon4 from '../images/abouticon4.png';
import aboutshape2 from '../images/aboutshape2.png';

function Second() {
  return (
    <div className="container" id='second-section'>
      <div className="left">
        <div className="experience-card">
          <h1 className="years">22+</h1>
          <div className="divider"></div>
          <p className="text">Years Of<br />Experiences</p>
        </div>
        <img
          src={aboutthumb}
          className="image-main"
          alt="Main"
        />
        <img
          src={aboutshape}
          className="image-shape"
          alt="Shape"
        />
      </div>

      <div className="right">
        <div className="heading">IT Support For Business</div>
        <div className="paragraph">
          Ensuring Your Success Trusted<br />
          IT Services Source
        </div>
        <div className="paragraph">
          Monotonectally synergize granular markets and front markets. Collaboratively visualize strategic infomediaries after multimedia based models. Synergistically task state of the art infrastructures for
        </div>

        <div className="small-images">
          <div className="small-image-item">
            <img src={abouticon1} alt="icon1" />
            <p>100% Money Back Guarantee</p>
          </div>
          <div className="small-image-item">
            <img src={abouticon2} alt="icon2" />
            <p>Expert & Dedicated Team Members</p>
          </div>
          <div className="small-image-item">
            <img src={abouticon3} alt="icon3" />
            <p>24/7 Free Technical Supports</p>
          </div>
          <div className="small-image-item">
            <img src={abouticon4} alt="icon4" />
            <p>100% Customers Satisfaction</p>
          </div>
        </div>

        <div className='discoverButton'>
          Discover More
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
          </svg>          
        </div>
                 <div className="arrow"> <img src={aboutshape2} alt="decorative"  /></div>

      </div>
    </div>
  );
}

export default Second;
