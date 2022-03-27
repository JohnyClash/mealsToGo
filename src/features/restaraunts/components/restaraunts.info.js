import React from "react";
import { View, Text, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import styled from 'styled-components';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer.components';


const RestCard = styled(Card)`
    font-family: ${(props) => props.theme.fonts.body}
    backgroundColor:${props => props.theme.colors.ui.white}
    marginLeft:${props => props.theme.space.md}
    marginRight: ${props => props.theme.space.md}
    elevation: 5
`;
const Address = styled(Paragraph)`
    font-family: ${(props) => props.theme.fonts.body}
    font-size: ${(props) => props.theme.fontSizes.caption}
`;
const RestName = styled(Title)`
    font-family: ${(props) => props.theme.fonts.heading}
    font-size: ${(props) => props.theme.fontSizes.title}
`;
const CardImage = styled(Card.Cover)`
    padding: ${props => props.theme.space.md}
    backgroundColor: ${(props) => props.theme.colors.ui.white}
    `;
const RatingPlus = styled.View`
    display:flex
    flex-direction:row
    justify-content: space-between
`;
const StatusIcons = styled.View`
    background-color:white
    flex-direction:row

`;
const Rating = styled.View`
    display:flex
    background-color:white
    flex-direction:row

`

export const RestarauntInfo = ({ restaraunt = {} }) => {
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
    } = restaraunt;

    const ratingArray = Array.from(new Array(Math.ceil(rating)));
    console.log(ratingArray);

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
                            <Text varient='label' style={{ color: 'red' }}>
                                Closed Temporarily
                            </Text>
                        )}
                        <Spacer variant='LeftSmall' >
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer variant='LeftSmall' >
                            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
                        </Spacer>
                    </StatusIcons>


                </RatingPlus>
                <Address>{address}</Address>
            </Card.Content>
        </RestCard>
    );
};


