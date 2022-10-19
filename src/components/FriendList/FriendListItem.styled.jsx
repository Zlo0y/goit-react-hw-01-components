import styled from '@emotion/styled';

export const Item = styled.li`
    display: flex;
    align-items: center;
    width: ${p => p.theme.sizes[2]};
    height: 80px;
    margin-top: ${p => p.theme.space[3]};
    box-shadow: ${p => p.theme.shadows.normal};
`;

export const Status = styled.span`
    margin-left: ${p => p.theme.space[4]}px;
    margin-right: ${p => p.theme.space[4]}px;
    width: 10px;
    height: 10px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
    }};
`;

export const Avatar = styled.img`
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.avatarBg};
`;

export const Name = styled.p`
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.medium};
    margin-left: ${p => p.theme.space[4]}px;
`;