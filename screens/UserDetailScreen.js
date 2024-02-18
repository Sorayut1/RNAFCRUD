import React,{Component} from 'react';
import {StyleSheet,ScrollView,ActivityIndicator,View,Text} from 'react-native';
import firebase from '../database/firebaseDb';
import { ThemeProvider,Button ,Input,Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class UserDetailScreen extends Component{
    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            mobile: '',
            isLoading: true
        }
    }

    render(){
        return(
            <ThemeProvider theme={theme}>
                <ScrollView style={styles.container}>
                    <Input
                        placeholder={'Name'}
                        value={this.state.name}
                        onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                    />
                    <Input
                        placeholder={'Email'}
                        value={this.state.email}
                        onChangeText={(val) => this.inputValueUpdate(val, 'email')}
                    />
                    <Input
                      placeholder={'Mobile'}
                      value={this.state.mobile}
                      onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
                    />
                    <Button
                    icon={
                        <Icon
                            name='wrench'
                            size={15}
                            color="#fff"
                        />
                    }
                        title='  Update'
                        onPress={() => this.updateUser()}
                    />
                    <Button
                        icon={
                            <Icon
                                name='trash'
                                size={15}
                                color="#fff"
                            />
                        }
                        title='  Delete'
                        containerStyle={{
                            marginTop:10
                        }}
                        buttonStyle={{
                            backgroundColor:'red'
                        }}
                        onPress={this.openTwoButtonAlert}
                    />
                </ScrollView>
            </ThemeProvider>
        )
    }
}
const theme = {
    Button:{
        raised:true
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    preloader:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default UserDetailScreen;