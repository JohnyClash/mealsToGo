import React from "react";
import { View, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import styled from 'styled-components';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer.components';
import { Text } from '../../../components/text.components'
import {
    RestCard,
    Address,
    RestName,
    CardImage,
    RatingPlus,
    StatusIcons,
    Rating,
    Icon
} from './restaurants.info.style'


export const RestarauntInfo = ({ restaurant = {} }) => {

    const {
        name = "Johny Tacos",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        ],
        address = "100 random st.",
        isOpenNow = true,
        rating = 3.2,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.ceil(rating)));

    return (
        <RestCard>
            <CardImage source={{ uri: photos[0] }} />
            <Card.Content>
                <RestName>{name}</RestName>
                <RatingPlus>
                    <Rating>
                        {ratingArray.map(() => {
                            return <SvgXml xml={star} width={20} height={20} />
                        })}
                    </Rating>
                    <StatusIcons>
                        {isClosedTemporarily && (
                            <Text variant='error'>
                                Closed Temporarily
                            </Text>
                        )}
                        <Spacer size='8px' position='left' >
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position='left' size='8px' >
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </StatusIcons>
                </RatingPlus>
                <Address>{address}</Address>
            </Card.Content>
        </RestCard>
    );
};


