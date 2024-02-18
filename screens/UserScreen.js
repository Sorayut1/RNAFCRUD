import React,{Component} from "react";
import { StyleSheet , ScrollView , ActivityIndicator , View , Text} from "react-native";
import { ListItem,Badge } from "react-native-elements";
import firebase from "firebase/compat";

class UserScreen extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <ScrollView>
                <View>
                    <Text>Hello From UserScreen</Text>
                </View>
            </ScrollView>
        )
    }
}

export default UserScreen ;