import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Intro({
    data,
 }) {
    // console.log("hello")
    // console.log(data)
    const { markdownRemark } = data

    const { frontmatter, html } = markdownRemark

    return (
        <div className="intro">
            <h1>{frontmatter.name}</h1>
            <div
                className="intro-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    )
}