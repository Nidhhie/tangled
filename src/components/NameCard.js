import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import Colors from '../Constants/Colors';
import Heading from "./Heading";

const NameCard = ({details}) => {
    const {title,option,name} = details;
return(
    <View style={styles.nameContainer}>
    <View>
        <Text style={{...styles.textGrey,paddingBottom: 5}}>
          {title}
      </Text>
    </View>
    <View style={styles.details}>
       <Heading>
           {name}
           </Heading> 
           <Text style={styles.textGrey}>
            {option}
           </Text>
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