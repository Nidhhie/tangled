import {Dimensions} from 'react-native';
import {AsyncStorage} from "react-native";

export default class Gen {
    static getDimensions() {
        return Dimensions.get('window')
    }
}