import SmoothScroll from "smooth-scroll";
import { useState, useEffect } from "react";
import {Header} from './components/header';
import {Features} from './components/features';
import {Heros} from './components/heros';
import {IntroVideo} from './components/ytbDemo';
import {DemoCard} from './components/demoGame';
import {Contact} from './components/contact';
import {Navigation} from './components/navigation';
import './static/css/App.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
    const [landingPageData, setLandingPageData] = useState({});
    return (
      <div>
            <Navigation/>
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <Heros data={landingPageData.Heros} />
            <IntroVideo data={landingPageData.IntroVideo} />
            <DemoCard data={landingPageData.DemoCard} />
            <Contact data={landingPageData.contact} />
      </div>
    )
}
export default App;