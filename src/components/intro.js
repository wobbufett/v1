import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { design } from '@styles';

const { colors, fontSizes } = design;

const IntroContainer = styled.section`
    margin: 0 auto;
    padding: 150px 0;
    max-width: 1000px;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
`;

const StyledSub = styled.h1`
    font-weight: normal;
    font-size: 16px;
    color: ${colors.diamond};
`;

const StyledName = styled.h1`
    font-size: ${fontSizes.title};
    font-weight: 600;
`;

const Intro = ({ data }) => {
    const { frontmatter, html } = data

    return (
        <IntroContainer>
            <StyledSub>{frontmatter.sub}</StyledSub>
            <StyledName>{frontmatter.name}</StyledName>
            <h1>{frontmatter.intro}</h1>
            <div
                className="intro-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </IntroContainer>
    )
}

export default Intro;