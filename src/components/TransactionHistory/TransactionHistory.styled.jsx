import styled from '@emotion/styled';

export const Table = styled.table`
    margin-left: ${p => p.theme.space[0]};
    margin-right: ${p => p.theme.space[0]};
    margin-top: ${p => p.theme.space[6]}px;
    box-shadow: ${p => p.theme.shadows.normal};
`;

export const Thead = styled.thead`
    height: 40px;
    width: ${p => p.theme.sizes[3]};
    background-color: ${p => p.theme.colors.transactionBg};
    color: ${p => p.theme.colors.white};
`;

export const Td = styled.td`
    text-align: center;
    height: 40px;
    width: ${p => p.theme.sizes[3]};
`;

export const Tr = styled.tr`
    height: 30px;
    width: ${p => p.theme.sizes[3]};
    color: ${p => p.theme.colors.transactionText};
    background-color: ${p => (p.index % 2 ? '#edf1f4' : 'white')};
`;