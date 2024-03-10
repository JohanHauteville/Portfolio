import './styles.scss'
import  data  from '../../utils/data.json'
import backgroundTop from '../../assets/img/wave.svg'
import profilePicture from '../../assets/img/profile.jpg'
function Home() {

    const paragraphs = data.story.split('\n');

    return (
        <div className="Home">
            <img className={"background-top"} src={backgroundTop} alt={"Background-Top"}/>
            <header className="Home-header">
                <div>
                    <h1>
                        <span className={"job-intro"}>Hi, I'm Johan Hauteville 👋🏼</span> <br/>
                        <span className={"job-name"}>Front</span>end<br/>
                        Developper
                    </h1>
                    <p>
                        Je suis un développeur Frontend basé à Montpellier, spécialisé dans la technologie <strong>React</strong>.
                    </p>

                </div>

                <img className={"profile-picture"} src={profilePicture} alt={"profile picture"}/>
            </header>
            <section className="Home-about">
                {paragraphs.map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>
                })}
            </section>
        </div>
    );
}

export default Home;
