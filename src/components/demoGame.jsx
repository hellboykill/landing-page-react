import cardImg from '../static/img/background/card.jpg';
import { Transition } from 'react-transition-group';

const duration = 100;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
}

const styles = {
    transform: 'translate3d(0,0,0)',
};

export const DemoCard = (props) => {
      return (
            <section id="five" className="five">
                 <img src={cardImg} alt=""/>
                <div className="features">
                 {/* style = {transform:translate3d(0,0,0);transition-duration:0s} */}
                    <div className="swiper-container features-top swiper-container-horizontal">
                        <div className="swiper-wrapper" style={styles}>
                            <div className="swiper-slide">
                                    <img
                                    src="../static/img/demo/337020289-62ca-45c9-981f-b9590a7bd36c_1242x2208-1.jpg"
                                    title="" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                    <img
                                    src="../static/img/demo/wylsg/f522493e-5262-46f3-b824-2ce8b29d59d5_1242x2208-2.jpg"
                                    title="" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                    <img
                                    src="../static/img/demo/66374fbe-2304-4b9e-aac3-05f5c309804e_1242x2208-3.jpg"
                                    title="" alt=""/>
                            </div>
                            <div className="swiper-slide">
                            <img
                                    src="../static/img/demo/249136e1-a00c-40f3-8cd0-f62b7e1ee43d_1242x2208-4.jpg"
                                    title="" alt=""/>
                            </div>
                            <div className="swiper-slide">
                            <img
                                    src="../static/img/demo/bc317639-d1b1-4398-949f-1488abfd6e13_1242x2208-5.jpg"
                                    title="" alt=""/>
                            </div>
                            <div className="swiper-slide">
                            <img
                                    src="../static/img/demo/89025fff-9356-450f-9f63-c2b1e7ba0e78_1242x2208-6.jpg"
                                    title="" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Add Pagination --> */}
                    <div className="swiper-pagination"></div>
                    <div className="next">
                            <img
                            src="data:image/png;base64,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"
                            alt=""/></div>
                    <div className="prev">
                            <img
                            src="data:image/png;base64,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"
                            alt=""/></div>
                </div>
            </section>
    )
}