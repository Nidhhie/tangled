import React from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from "react-native";
import Heading from "../components/Heading";
import FloatingLabelInput from "./FloatingLabelInput";
import Footer from "./Footer";


const CustomFormWithFooter = ({inputs,handleTextChange,footer,heading,backButton}) => {
    const {onPressFooter,title,icon} = footer;
    return(
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <View style={styles.container}>
                {backButton}
                <Heading size={18}>
                    {heading}
                </Heading>
                {inputs.map((eachInput, index) => (
                    <FloatingLabelInput
                        key={index}
                        label={eachInput.label}
                        value={eachInput.value}
                        onChangeText={(value) => handleTextChange(value, eachInput.name)}
                    />))}
            </View>
            <Footer onPress={onPressFooter} title={title} icon={icon} />
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 25, paddingVertical: 35, height: '100%' }
});

export default CustomFormWithFooter;
