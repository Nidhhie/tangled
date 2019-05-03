import {Dimensions} from 'react-native';
import {AsyncStorage} from "react-native";

export default class Gen {
    static getDimensions() {
        return Dimensions.get('window')
    }
    
    //auth start
    static isLoggedIn;
    static async login(){
        try {
            await AsyncStorage.setItem("AUTH_TOKEN", "true");
        }
        catch(err){
            alert(err)
        }
    }
    static logout(){
        AsyncStorage.removeItem("AUTH_TOKEN");
    }
    static async isUserLogged() {
          const value =  await AsyncStorage.getItem("AUTH_TOKEN");
          return  value === "true";
    };

    //auth end
}