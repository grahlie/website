import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{width: '900px', margin: '0 auto', textAlign: 'center'}}>
      <StaticImage
        src="../images/mathiasgrahl.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
    
    <h1>Hi people!</h1>
    <p>Mathias Grahl page here this is under construction so bare with me.</p>
    <p>I'm a Developer mostly Frontend but do a little bit of both, I love to bring good ideas to life combining pixel perfect design and simple interfaces.</p>
    <p>Contact me at mathias@grahlie.se</p>
  </Layout>
)

export default IndexPage

