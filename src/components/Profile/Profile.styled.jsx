import styled from '@emotion/styled';

export const Avatar = styled.img`
    width: ${p => p.theme.sizes[1]};
    height: ${p => p.theme.sizes[1]};
    background-color: ${p => p.theme.colors.profileBg};
    border-radius: ${props => props.theme.radii.round};
`;


export const Name = styled.p`
    margin-top: ${p => p.theme.space[5]};
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
`;

export const TagAndLocation = styled.p`
    margin-top: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.gray};
`;

export const Stats = styled.ul`
    display: flex;
    padding-inline-start: ${p => p.theme.space[0]};
    justify-content: space-evenly;
    background-color: ${p => p.theme.colors.profileSecondBg};
`;

export const StatElem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${p => p.theme.sizes[0]};
    height: ${p => p.theme.sizes[0]};
    padding-top: 20px;
    padding-bottom: 20px;

    :not(:last-child){
    border-right: ${p => p.theme.borders.normal} #e6e6e6;};
`;

export const Label = styled.span`
    font-size: ${p => p.theme.fontSizes.xs};
    color: ${p => p.theme.colors.gray};
`;

export const Quantity = styled.span`
    margin-top: ${p => p.theme.space[3]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
`;