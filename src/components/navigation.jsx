import page1Select from '../static/img/navbar/page1_select.png';
import page2Select from '../static/img/navbar/page2_select.png';
import page3Select from '../static/img/navbar/page3_select.png';
import page4Select from '../static/img/navbar/page4_select.png';
import page1Selected from '../static/img/navbar/page1_selected.png';
import page2Selected from '../static/img/navbar/page2_selected.png';
import page3Selected from '../static/img/navbar/page3_selected.png';
import page4Selected from '../static/img/navbar/page4_selected.png';
import page5Selected from '../static/img/navbar/page5_selected.png';

import {useState,useRef} from 'react';

//const scrollToRef = (ref) => window.scrollTo({ top: 0, behavior: 'smooth' })

export const Navigation = (props) => {
        return(
                <header>
                <div className="header page-scroll" >
                <ul className="nav">
                        <li className="page-scroll">
                                <a href="#first">
                                        <img
                                        src={page1Select}
                                        alt=""/> 
                                        <img
                                        src={page1Selected}
                                        alt=""/>
                                </a>       
                        </li>
                        <li className="page-scroll">
                                <a href="#second">
                                        <img
                                        src={page2Select}
                                        alt=""/> 
                                        <img
                                        src={page2Selected}
                                        alt=""/>
                                </a>
                        </li>
                        <li className="page-scroll">
                                <a href="#three">
                                        <img
                                        src={page3Select}
                                        alt=""/> 
                                        <img
                                        src={page3Selected}
                                        alt=""/>
                                </a>
                        </li>
                        <li className="page-scroll">
                                <a href="#four">
                                        <img
                                        src={page4Select}
                                        alt=""/> 
                                        <img
                                        src={page4Selected}
                                        alt=""/>
                                </a>
                        </li>
                        <li className="active page-scroll">
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
