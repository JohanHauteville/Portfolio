import './styles.scss'

function Skills(){
    return <section className={"skills"}>
        <h2>Skills</h2>
        <article>
            <h3>Web Design</h3>
            <ul>
                <li>Responsive Design</li>
                <li>Wireframing</li>
                <li>UI/UX Design</li>
            </ul>
        </article>
        <article>
            <h3>Frontend</h3>
            <ul>
                <li>Javascript</li>
                <li>ReactJS</li>
                <li>Angular</li>
                <li>Sass</li>
            </ul>
        </article>
        <article>
            <h3>Backend</h3>
            <ul>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>ExpressJS</li>
                <li>MySQL</li>
            </ul>
        </article>
        <article>
            <h3>Soft skills</h3>
            <ul>
                <li>Communication</li>
            </ul>
        </article>
    </section>
}

export default Skills;