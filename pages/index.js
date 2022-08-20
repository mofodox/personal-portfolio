import React from 'react';
import MovingText from 'react-moving-text';

import SEO from "../components/seo/SEO";

import styles from '../styles/Home.module.scss';

export default function Home() {


    return (
        <>
            <SEO title={"Khairul Akmal | Home"} />
            <div className={styles.contentWrapper}>
                <MovingText
                    type="fadeInFromTop"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease-in"
                    iteration="1"
                    fillMode="none"
                >
                    <h1 className={styles.title}>
                        Project Manager @ SPGroup from the <a href={"https://en.wikipedia.org/wiki/Singapore"} target={"_blank"} rel={"noreferrer"}>tiny island</a>.
                        Previously @ Ohmyhome, MullenLowe, Datavis & Codestream.
                    </h1>
              </MovingText>

              <MovingText
                  type="fadeInFromBottom"
                  duration="1800ms"
                  delay="0s"
                  direction="normal"
                  timing="ease-in"
                  iteration="1"
                  fillMode="none"
              >
                  <p className={styles.subtitle}>
                      You can follow me on <a href={"https://twitter.com/mofodox"} target={"_blank"} rel={"noreferrer"}>Twitter</a>, <a href={"https://instgram.com/mofodox"} target={"_blank"} rel={"noreferrer"}>Instagram</a>, <a href={"https://linkedin.com/in/kaigrammer"} target={"_blank"} rel={"noreferrer"}>LinkedIn</a> & <a href={"https://github.com/mofodox"} target={"_blank"} rel={"noreferrer"}>Github</a>.
                  </p>
              </MovingText>
          </div>
      </>
  )
}
