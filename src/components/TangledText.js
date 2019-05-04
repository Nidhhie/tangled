import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TangledText = ({children, size, color, gutterbottom, bold, style}) => (
    <Text style={{
        fontSize: size,
        color,
        paddingBottom: gutterbottom,
        fontFamily:bold ?'helvetica-bold' :'helvetica',
        ...style
    }}>
        {children}
    </Text>
);


TangledText.defaultProps = {
    color: 'black',
    size: 16,
    gutterbottom: 0
};

export default TangledText;