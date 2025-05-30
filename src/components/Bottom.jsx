import './Bottom.css';
import brand1 from '../images/brand1.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'
import brand4 from '../images/brand4.png'
import brand5 from '../images/brand5.png'


function Bottom(){
    return(
        <div className='mainCont'>
            <div className='image'><img src={brand1} alt="" /></div>
            <div className='image'><img src={brand2} alt="" /></div>
            <div className='image'><img src={brand3} alt="" /></div>
            <div className='image'><img src={brand4} alt="" /></div>
            <div className='image'><img src={brand5} alt="" /></div>
        </div>
    )
};
export default Bottom;