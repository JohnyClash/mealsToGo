import React from 'react';
import styled, { useTheme } from 'styled-components/native';
// const TopSmall = styled.View`
//     margin-top: 4px;
// `;
// const TopMedium = styled.View`
//     margin-top: 8px;
// `;
// const TopLarge = styled.View`
//     margin-top: 16px;
// `;
// const LeftSmall = styled.View`
//     margin-left: 4px;
// `;
// const LeftMedium = styled.View`
//     margin-left: 8px;
// `;
// const LeftLarge = styled.View`
//     margin-left: 16px;
// // `;
// export const Spacer = ({ variant }) => {
//     switch (variant) {
//         case 'TopSmall': return <TopSmall />;
//         case 'TopMedium': return <TopMedium />;
//         case 'TopLarge': return <TopLarge />;
//         case 'LeftSmall': return <LeftSmall />;
//         case 'LeftMedium': return <LeftMedium />;
//         case 'LeftLarge': return <LeftLarge />;
//     }
// }

const positionVariant = {
    top: 'marginTop',
    left: 'marginLeft',
    right: 'marginRight',
    bottom: 'marginBottom'
}

const SpacerView = styled.View`
    ${({ variant }) => variant}
`
const stringMaker = (position, size) => {
    return `${positionVariant[position]}: ${size}`
}

export const Spacer = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = stringMaker(position, size);
    return <SpacerView variant={variant}>{children}</SpacerView>;
}





