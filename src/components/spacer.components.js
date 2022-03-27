import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const TopSmall = styled.View`
    margin-top: 4px;
`;

const TopMedium = styled.View`
    margin-top: 8px;
`;

const TopLarge = styled.View`
    margin-top: 16px;
`;

const LeftSmall = styled.View`
    margin-left: 4px;
`;

const LeftMedium = styled.View`
    margin-left: 8px;
`;

const LeftLarge = styled.View`
    margin-left: 16px;
// `;
// const BottomSmall = styled.View`
//     marginTop: 4px;
// `;

// const BottomMedium = styled.View`
//     marginTop: 8px;
// `;

// const BottomLarge = styled.View`
//     marginTop: 16px;
// `;

// const RightSmall = styled.View`
//     marginTop: 4px;
// `;

// const RightMedium = styled.View`
//     marginTop: 8px;
// `;

// const RightLarge = styled.View`
//     marginTop: 16px;
// `;

export const Spacer = ({ variant }) => {

    switch (variant) {
        case 'TopSmall': return <TopSmall />;
        case 'TopMedium': return <TopMedium />;
        case 'TopLarge': return <TopLarge />;
        case 'LeftSmall': return <LeftSmall />;
        case 'LeftMedium': return <LeftMedium />;
        case 'LeftLarge': return <LeftLarge />;

        // case 'TopSmall': return <TopSmall />;
        // case 'TopMedium': return <TopMedium />;
        // case 'TopLarge': return <TopLarge />;
        // case 'TopSmall': return <TopSmall />;
        // case 'TopMedium': return <TopMedium />;
        // case 'TopLarge': return <TopLarge />;

    }
}