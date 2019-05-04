import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../Constants/Colors';
import TangledText from "./TangledText";
import PropTypes from "prop-types";

const NameCard = ({details,onPressEditButton}) => {
    const {label,value} = details;
return(
    <View style={styles.nameContainer}>
    <View>
        <TangledText style={{...styles.textGrey,paddingBottom: 5}}>
          {label}
      </TangledText>
    </View>
    <View style={styles.details}>
       <TangledText bold>
           {value}
           </TangledText>
        <TouchableOpacity onPress={onPressEditButton}>
           <TangledText bold size={14} style={styles.textGrey}>
            Edit
           </TangledText>
        </TouchableOpacity>
    </View>
</View>

)
};


const styles = StyleSheet.create({
   nameContainer: {
       backgroundColor: Colors.white,
       padding:18,
       marginVertical: 5
   },
    details:{
       flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textGrey:{
       color:Colors.textGrey,
        opacity:0.8
    }
});

NameCard.propTypes = {
    details: PropTypes.object.isRequired,
    onPressEditButton: PropTypes.func.isRequired
};

export default NameCard;