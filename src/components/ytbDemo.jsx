import videoIntroImg from '../static/img/background/youtube.jpg';

export const IntroVideo = (props) => {
      return (
       <div className='wrapper'>
            <section id="four" className="four">
                <img src={videoIntroImg} alt=""/>
                <iframe
                          width="560" height="315"
                        src="https://www.youtube.com/embed/xmyjhL1YjMU?autoplay=1&amp;loop=1&amp;playlist=xmyjhL1YjMU&amp;muted=1"
                        title="YouTube video player" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </section>
        </div>
    )
}