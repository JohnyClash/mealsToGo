import react from "react";
import { Searchbar } from "react-native-paper";
import styled from 'styled-components';
import { RestarauntInfo } from "../components/restaraunts.info";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
} from "react-native";

const MainContain = styled(SafeAreaView)`
    flex:1;
    marginTop : ${Platform.OS == 'android' ? StatusBar.currentHeight : 0}px;
`;
const SearchContainer = styled.View`
    flexGrow: 0.04
    backgroundColor: ${props => props.theme.colors.brand.secondary}
    width: auto
    justifyContent: center
`;
const RestCardContainer = styled.View`
    flexGrow: 1
    paddingTop: ${props => props.theme.space.md} 
    backgroundColor: ${props => props.theme.colors.brand.muted}
`;

export const RestarauntScreen = () => {
    return (
        <MainContain>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>

            <RestCardContainer>
                <RestarauntInfo />
            </RestCardContainer>
        </MainContain>
    );
};

