import styled from 'styled-components'

export const Section = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${props => props.bgColor};
    background-image: linear-gradient(to bottom, #8b8b8b, #7c7c7c, #6d6d6d, #5f5f5f, #515151);
`

export const Flex = styled.div`
    display: flex;
    height: ${props => props.fullHeight && '100%'};
    width: ${props => props.fullWidth && '100%'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    color: #DDDDDD;
    font-size: ${props => props.fontSize }rem;
    flex-direction: ${props => props.direction};
    padding: ${props => props.container ? '0' : '18px'};
    .label {
        opacity: 0;
        font-size: 0.9rem;
        text-transform: uppercase;
        transition: opacity 0.3s;
    }
    .iconContainer {
        transition: all 0.3s;
    }

    .iconContainer:hover {
        cursor: pointer;
        color: white;
    }

    .iconContainer:hover .label {
        opacity: 1;
    }
`