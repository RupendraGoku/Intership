import './Third.css'
import service1 from '../images/service1.png';
import service2 from '../images/service2.png';
import service3 from '../images/service3.png';
import service4 from '../images/service4.png';
import service5 from '../images/service5.png';


function Third(){
    return(
        <div className="main">
        <div className='paragraph'>
            <h5>IT Support For Business</h5>
            <h1>Ensuring Your Success Trusted</h1>
            <h1>IT Services Source</h1>
        </div>
        
        <div className="container-third">
            <div className="cont" data-number="01">
    <img src={service1} alt="Graphic Design" />
    <h1>Graphic Design</h1>
    <p>Monotonectally synergize grants to business visualize strategic infomediaries</p>
</div>
<div className="cont" data-number="02">
    <img src={service2} alt="Cloud Solutions" />
    <h1>Cloud Solutions</h1>
    <p>Monotonectally synergize grants to business visualize strategic infomediaries</p>
</div>
        <div className="cont" data-number="03">
    <img src={service2} alt="Cloud Solutions" />
    <h1>Cloud Solutions</h1>
    <p>Monotonectally synergize grants to business visualize strategic infomediaries</p>
</div>
            <div className="cont" data-number="04">
    <img src={service2} alt="Cloud Solutions" />
    <h1>Cloud Solutions</h1>
    <p>Monotonectally synergize grants to business visualize strategic infomediaries</p>
</div>
        <div className="cont" data-number="05">
    <img src={service2} alt="Cloud Solutions" />
    <h1>Cloud Solutions</h1>
    <p>Monotonectally synergize grants to business visualize strategic infomediaries</p>
</div>
<div className="cont" data-number="06">
    <img src={service2} alt="Cloud Solutions" />
    <h1>Cloud Solutions</h1>
    <p>Monotonectally synergize grants to business visualize strategic infomediaries</p>
</div>
        </div>
     </div>
    )
};
export default Third;