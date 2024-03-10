import backgroundBottom from '../../assets/img/wave-bottom.svg'
import './styles.scss'

function Footer(){
    return(
        <footer>
            <p>
                copyrights 2023-2024 Johan Hauteville
            </p>
            <img className={"background-bottom"} src={backgroundBottom} alt={"background bottom"} />
        </footer>

    )
}

export default Footer;