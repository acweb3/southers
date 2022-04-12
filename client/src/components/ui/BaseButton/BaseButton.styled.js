import styled, { css } from 'styled-components';

export const baseButtonCss = css`
    font-family: Anton, sans-serif;

    text-transform: uppercase;
    width: fit-content;
    font-size: 12px;

    border-radius: 3px;
    padding: 12px 12px;
    letter-spacing: 0.3em;

    border: none;
    cursor: pointer;
    color: #fff;
    background-color: #000;

    transition: opacity 0.1s linear;

    width: 100%;
    text-align: center;

    width: 200px;
    padding: 8px 36px;
    white-space: nowrap;
    text-align: center;

    margin-bottom: 16px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus,
    &:hover {
        opacity: 0.8;
    }
`;

export const BaseButton = styled.div`
    ${baseButtonCss}
`;

export const ExternalButton = styled(BaseButton)`
    margin-top: 16px;
    width: 100%;

    min-width: min-content;
`;

export const ExternalButtonLink = styled.a`
    text-decoration: none;
`;
