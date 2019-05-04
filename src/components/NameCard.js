import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import Colors from '../Constants/Colors';
import TangledText from "./TangledText";

const NameCard = ({details,onPressEditButton}) => {
    const {label,option,value} = details;
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
export default NameCard;