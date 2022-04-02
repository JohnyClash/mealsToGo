import react from "react";
import { Searchbar } from "react-native-paper";
import styled from 'styled-components';
import { RestarauntInfo } from "../components/restaraunts.info.card";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
    FlatList
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



export const RestarauntScreen = () => {
    return (
        <>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>

            <FlatList
                data={[{ names: 1 }, { names: 2 }, { names: 3 }]}
                renderItem={() => <RestarauntInfo />}
                keyExtractor={(item) => item.names}
            // contentContainerStyle={{ padding: 16 }}
            />
        </>
    );
};

