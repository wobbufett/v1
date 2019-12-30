import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const IntroContainer = styled.section`
    margin: 0 auto;
    padding: 150px 0;
    max-width: 1000px;
    flex-direction: column;
    align-items: flex-start;
`;

const IntroH1 = styled.h1`
    font-weight: normal;
    font-size: 16px;
`;

const Intro = ({ data }) => {
    const { frontmatter, html } = data

    return (
        <IntroContainer>
            <h1>{frontmatter.intro}</h1>
            <h1>{frontmatter.sub} {frontmatter.name}</h1>
            <div
                className="intro-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </IntroContainer>
    )
}

export default Intro;