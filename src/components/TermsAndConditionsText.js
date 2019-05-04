import React from 'react';
import {StyleSheet, Text, View,Image} from "react-native";
import Colors from "../Constants/Colors";
import Images from "../Constants/Images";
import TangledText from "./TangledText";

const TermsAndConditionsText = () => {
return(
    <View style={styles.container}>
        <Image source={Images.checkBox} resizeMode={"container"} style={{height:20,width:20,marginRight:8,marginTop:4}}/>
        <TangledText style={{color:Colors.textGrey}}>
            By proceeding I agree with <TangledText style={styles.underline}>Terms & Conditions</TangledText>,
            <TangledText style={styles.underline}>Terms of use</TangledText> and
            <TangledText style={styles.underline}>Privacy Policy</TangledText>.
        </TangledText>
    </View>
)
};

const styles = StyleSheet.create({
    container:{marginTop:30,paddingHorizontal:10,flexDirection: 'row',alignItems: 'flex-start'},
    underline:{textDecorationLine:'underline',color:Colors.textGrey}
});
export default TermsAndConditionsText;
