import { SafeAreaView, Platform, StatusBar } from 'react';
import styled from 'styled-components'

export const SafeArea = styled.SafeAreaView`
flex:1;
marginTop : ${Platform.OS == 'android' ? StatusBar.currentHeight : 0}px;
`;