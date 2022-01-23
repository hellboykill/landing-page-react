import mainImg from '../static/img/background/header.jpg';
import ggCardImg from '../static/img/getapp/googleplay.jpg';
import appStoreCardImg from '../static/img/getapp/appstore.jpg';
import yelowCardImg from '../static/img/getapp/3f4befd6-4f3c-★首選☆繁體.jpg';
import myCardImg from '../static/img/getapp/mycard.jpg';
import redCardImg from '../static/img/getapp/a16f7dda-储值.jpg';

export const Header = (props) => {
  return (
        <section id = "first" className = 'first'>
                <img src={mainImg} alt=""/>
                <div className="head">
                            <div className="download">
                                <div className="download-btns">
                                    <div className="btn"><a href="https://play.google.com/store/apps/details?id=com.wycjh.az"
                                            target="_blank"  rel="noreferrer"><img
                                                src={ggCardImg}
                                                alt=""/></a></div>
                                    <div className="btn"><a href="https://itunes.apple.com/app/id1570387987" target="_blank"  rel="noreferrer"><img
                                                src={appStoreCardImg}
                                                alt=""/></a></div>
                                    <div className="btn"><a
                                            href="https://www.ldplayer.tw/blog/special/com-wycjh-az-on-pc.html?current=1&amp;sortType=1&amp;n=25666619"
                                            target="_blank" rel="noreferrer"><img
                                                src={yelowCardImg}
                                                alt=""/></a></div>
                                    <div className="btn"><a href="https://dl.yrlongxin.com/comp/wylsg-mycard-324-202108271533.apk"
                                            target="_blank"  rel="noreferrer"><img
                                                src={myCardImg}
                                                alt=""/></a></div>
                                    <div className="btn"><a href="https://topup.twtouda.com/shengong-mycard/index.html"
                                            target="_blank" rel="noreferrer"><img
                                                src={redCardImg}
                                                alt=""/></a></div>
                                </div>
                                
                            </div>             
                </div>
            </section>      
  )
}