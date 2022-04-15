import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../services/location/location.context'

const SearchContainer = styled.View`
    flexGrow: 0.04
    backgroundColor: ${props => props.theme.colors.brand.secondary}
    width: auto
    justifyContent: center
`;

export const Search = () => {
    //context used to submit once you know what the searcterm is
    const { keyword, search } = useContext(LocationContext);
    // local state via useState used to store what the current search value is 
    // pre submit
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    // useEffect(() => {
    //     console.log('search.component: ', searchKeyword)
    //     search(searchKeyword)
    // }, [])

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => search(searchKeyword)}
                onChangeText={(searchText) => {
                    setSearchKeyword(searchText)
                }}
            />
        </SearchContainer>
    )
}

