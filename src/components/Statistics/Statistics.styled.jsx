import styled from '@emotion/styled';


export const StatsList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[5]}px;
`;

export const Label = styled.span`
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.xs};
`;

export const Percentage = styled.span`
    color: ${p => p.theme.colors.white};
    margin-top: ${p => p.theme.space[3]}px;
    font-weight: ${p => p.theme.fontWeights.medium};
`;

function getRandomHexColor() {
     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60px;
    height: 60px;
    align-items: center;
    background-color: ${props => getRandomHexColor()};
`;