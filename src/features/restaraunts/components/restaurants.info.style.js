import styled from 'styled-components/native';
import { Card, Paragraph, Title } from 'react-native-paper';

export const RestCard = styled(Card)`
    font-family: ${(props) => props.theme.fonts.body}
    backgroundColor:${props => props.theme.colors.ui.white}
    marginLeft:${props => props.theme.space.md}
    marginRight: ${props => props.theme.space.md}
    elevation: 5
    margin: ${(props) => props.theme.space.lg}
`;
export const Address = styled(Paragraph)`
    font-family: ${(props) => props.theme.fonts.body}
    font-size: ${(props) => props.theme.fontSizes.caption}
`;
export const RestName = styled(Title)`
    font-family: ${(props) => props.theme.fonts.heading}
    font-size: ${(props) => props.theme.fontSizes.title}
`;
export const CardImage = styled(Card.Cover)`
    padding: ${props => props.theme.space.md}
    backgroundColor: ${(props) => props.theme.colors.ui.white}
    `;
export const RatingPlus = styled.View`
    display:flex
    flex-direction:row
    justify-content: space-between
`;
export const StatusIcons = styled.View`
    background-color:white
    flex-direction:row

`;
export const Rating = styled.View`
    display:flex
    background-color:white
    flex-direction:row
`;
export const Icon = styled.Image`
    width: 15px
    height: 15px
`;
