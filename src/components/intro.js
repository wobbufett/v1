import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Intro = ({ data }) => {
    const { frontmatter, html } = data

    return (
        <div className="intro">
            <h1>{frontmatter.intro}</h1>
            <h1>{frontmatter.sub} {frontmatter.name}</h1>
            <div
                className="intro-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    )
}

export default Intro;