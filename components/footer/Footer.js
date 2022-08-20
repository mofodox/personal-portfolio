import MovingText from "react-moving-text";

import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <MovingText
            type="fadeIn"
            duration="2500ms"
            delay="0s"
            direction="normal"
            timing="ease-in"
            iteration="1"
            fillMode="none"
        >
            <footer className={styles.footer}>
                <p>Design & develop with ♥️ by <a href={"https://twitter.com/mofodox"} target={"_blank"} rel={"noreferrer"}>Khairul Akmal</a>.</p>
            </footer>
        </MovingText>
    )
}

export default Footer;