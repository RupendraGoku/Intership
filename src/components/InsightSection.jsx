import "./InsightSection.css";
import blog1 from '../images/blog1.png';
import blog2 from '../images/blog2.png';
import blog3 from '../images/blog3.png';

function InsightSection() {
    return (
        <div className="mainSection">
            <div className="text">
                <h5 className="text1">Latest Blog</h5>
                <h1 className="text2">Latest Insights From Our Blog</h1>
            </div>
            <div className="topcontSection">
                {[{ img: blog1 }, { img: blog2 }, { img: blog3 }].map((blog, index) => (
                    <div className="blogContainer" key={index}>
                        <div className="imageContainer">
                            <img src={blog.img} alt="" />
                        </div>
                        <div className="mainTextCont">
                            <div className="textInfo">
                                <p className="subText">
                                    <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg></span> 24 Mar, 2024
                                </p>
                                <p className="subText">
                                    <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z"></path></svg></span> Admin
                                </p>
                            </div>
                            <div className="buttons">
                                <a href="/blog_details">
                                    <button className="titleButton">Most Popular Chrome Extensionfor Business Promot</button>
                                </a>
                                <a href="/blog_details">
                                    <button className="readMoreButton">Read More <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InsightSection;