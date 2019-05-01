import {Dimensions} from 'react-native';

export default class Gen {
    static getDimensions(){
        return Dimensions.get('window')
    }
}