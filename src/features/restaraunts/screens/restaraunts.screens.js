import React, { useContext } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import styled from 'styled-components';
import { RestarauntInfo } from "../components/restaraunts.info.card";
import { Search } from '../components/search.components'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
    FlatList
} from "react-native";

import { RestaurantsContext } from '../../../services/restaurants.context';


const MainContain = styled(SafeAreaView)`
    flex:1;
    marginTop : ${Platform.OS == 'android' ? StatusBar.currentHeight : 0}px;
`;


const LoadingRest = styled(ActivityIndicator)`
    flex:1
    width:auto
    justifyContent:center
`



export const RestarauntScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);

    if (isLoading === true) {
        return (
            <LoadingRest animating={true} color={Colors.red800} size={"large"} />
        )
    } else {

        return (
            <>
                <Search />

                <FlatList
                    data={restaurants}
                    renderItem={({ item }) => {
                        return (
                            < RestarauntInfo restaurant={item} />
                        )
                    }}
                    keyExtractor={(item) => item.names}
                // contentContainerStyle={{ padding: 16 }}
                />
            </>
        );
    }
};

