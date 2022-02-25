import page1Select from '../static/img/navbar/page1_select.png';
import page2Select from '../static/img/navbar/page2_select.png';
import page3Select from '../static/img/navbar/page3_select.png';
import page4Select from '../static/img/navbar/page4_select.png';
import page1Selected from '../static/img/navbar/page1_selected.png';
import page2Selected from '../static/img/navbar/page2_selected.png';
import page3Selected from '../static/img/navbar/page3_selected.png';
import page4Selected from '../static/img/navbar/page4_selected.png';
import page5Selected from '../static/img/navbar/page5_selected.png';
import clsx from 'clsx';
import {useState, useEffect} from 'react';
//const scrollToRef = (ref) => window.scrollTo({ top: 0, behavior: 'smooth' })

export const Navigation = (props) => {

        const [page1Active, setPage1Active] = useState("active")
        const [page2Active, setPage2Active] = useState("")
        const [page3Active, setPage3Active] = useState("")
        const [page4Active, setPage4Active] = useState("")
        const [page5Active, setPage5Active] = useState("")

        const listenScrollEvent = (event) => {
                let offSetY = window.pageYOffset;
                if(offSetY < 496) {
                        setPage1Active("active");
                        setPage2Active("");
                }
                else if(offSetY >= 496 && offSetY < 1100) {
                        setPage1Active("");
                        setPage2Active("active");
                        setPage3Active("");
                }
                else if(offSetY >= 1100 && offSetY < 1672 ) {
                        setPage2Active("");
                        setPage3Active("active");
                        setPage4Active("");
                }
                else if(offSetY >= 1672 && offSetY < 2180 ) {
                        setPage3Active("");
                        setPage4Active("active");
                        setPage5Active("");
                }
                else if(offSetY >= 2180) {
                        setPage4Active("");
                        setPage5Active("active");
                }
              }
        const currentURL = window.location.hash;
        const checkActive = (path) => currentURL === path;
        console.log(currentURL);
        useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);  
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);
        return(
                <header >
                <div className="'header page-scroll">
                <ul className="nav">
                        <li className={clsx('page-scroll', page1Active)}>
                                <a href="#first">
                                        <img
                                        src={page1Select}
                                        alt=""/> 
                                        <img
                                        src={page1Selected}
                                        alt=""/>
                                </a>       
                        </li>
                        <li  className={clsx('page-scroll', page2Active)}>
                                <a href="#second">
                                        <img
                                        src={page2Select}
                                        alt=""/> 
                                        <img
                                        src={page2Selected}
                                        alt=""/>
                                </a>
                        </li>
                        <li className={clsx('page-scroll', page3Active)}>
                                <a href="#three">
                                        <img
                                        src={page3Select}
                                        alt=""/> 
                                        <img
                                        src={page3Selected}
                                        alt=""/>
                                </a>
                        </li>
                        <li className={clsx('page-scroll', page4Active)}>
                                <a href="#four">
                                        <img
                                        src={page4Select}
                                        alt=""/> 
                                        <img
                                        src={page4Selected}
                                        alt=""/>
                                </a>
                        </li>
                        <li  className={clsx('page-scroll',  page5Active)}>
                                <a href="#five">
                                        <img
                                        src=""
                                        alt=""/> 
                                        <img
                                        src={page5Selected}
                                        alt=""/>
                                </a>
                        </li>
                </ul>
                </div>
        </header>
        )
}
