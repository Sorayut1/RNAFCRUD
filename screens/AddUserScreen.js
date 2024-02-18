import React,{Component} from 'react';
import {StyleSheet,ScrollView,ActivityIndicator,View,Text} from 'react-native';
import firebase from '../database/firebaseDb';
import { ThemeProvider,Button ,Input,Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class AddUserScreen extends Component{
    constructor(){
        super();
        this.state = {
            name:'',
            email: '',
            mobile: '',
            isLoading: false
        };
    }
    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    render(){
        return(
            <ThemeProvider theme={theme}>
               <ScrollView style={styles.container}>
                    <Image
                    source={{uri:'https://tophatsolution.com/wp-content/uploads/2020/08/react-js.png'}}
                    style={{width:180,height:180}}
                    containerStyle={{marginLeft:'auto',marginRight:'auto'}}
                    />
                    <Input
                        leftIcon={
                            <Icon
                                name='user-o'
                                size={20}
                                color='#0085E6'
                            />
                        }
                        placeholder={'   Name'}
                        value={this.state.name}
                        onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                        
                    />
                    <Input
                        leftIcon={
                            <Icon
                                name='envelope-o'
                                size={20}
                                color='#0085E6'
                            />
                        }
                        placeholder={'   Email'}
                        value={this.state.email}
                        onChangeText={(val) => this.inputValueUpdate(val, 'email')}
                        
                    />
                    <Input
                        leftIcon={
                            <Icon
                                name='mobile'
                                size={35}
                                color='#0085E6'
                            />
                        }
                        placeholder={'   Mobile'}
                        value={this.state.mobile}
                        onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
                        
                    />
                    <Button
                        icon={
                            <Icon
                            name='check'
                            size={15}
                            color='white'
                        />
                        }
                        title='  Add User'
                        buttonStyle={{
                            backgroundColor:'green'
                        }}
                        onPress={() => this.storeUser()}
                    />
                    <Button
                        icon={
                            <Icon
                            name='users'
                            size={15}
                            color='white'
                        />
                        }
                        title='  Go to User List'
                        onPress={() => this.props.navigation.navigate('UserScreen')}
                        
                        containerStyle={{
                            marginTop:10
                        }}
                    />
                    <Button
                        icon={
                            <Icon
                            name='users'
                            size={15}
                            color='white'
                        />
                        }
                        title='  Go to User Detail'
                        onPress={() => this.props.navigation.navigate('UserDetailScreen')}
                        containerStyle={{
                            marginTop:10
                        }}
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

export default AddUserScreen;