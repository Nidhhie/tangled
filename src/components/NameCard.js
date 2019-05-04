import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import Colors from '../Constants/Colors';
import Heading from "./Heading";

const NameCard = ({details,onPressEditButton}) => {
    const {label,option,name} = details;
return(
    <View style={styles.nameContainer}>
    <View>
        <Text style={{...styles.textGrey,paddingBottom: 5}}>
          {label}
      </Text>
    </View>
    <View style={styles.details}>
       <Heading>
           {name}
           </Heading>
        <TouchableOpacity onPress={onPressEditButton}>
           <Text style={styles.textGrey}>
            {option}
           </Text>
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
        justifyContent: 'space-between'
    },
    textGrey:{
       color:Colors.textGrey
    }
});
export default NameCard;