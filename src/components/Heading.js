import React from 'react';
import {Text,StyleSheet} from 'react-native';

const Heading = ({children,size,color,gutterbottom}) => (
    <Text style={{...styles.title,fontSize:size,color,paddingBottom:gutterbottom}}> {children} </Text>
);

const styles = StyleSheet.create({
    title: {fontWeight: 'bold' }
});

Heading.defaultProps = {
    color: 'black',
    size: 16,
    gutterbottom:0
  };

export default Heading;