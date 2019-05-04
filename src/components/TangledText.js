import React from 'react';
import {Text, StyleSheet} from 'react-native';
import PropTypes from "prop-types";
import NameCard from "./NameCard";

const TangledText = ({children, size, color, gutterbottom, bold, style}) => (
    <Text style={{
        fontSize: size,
        color,
        paddingBottom: gutterbottom,
        fontFamily: bold ? 'helvetica-bold' : 'helvetica',
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

TangledText.propTypes = {
    children: PropTypes.any.isRequired,
    size:  PropTypes.number,
    color: PropTypes.string,
    gutterbottom: PropTypes.number,
    bold: PropTypes.bool,
    style: PropTypes.object
};

export default TangledText;