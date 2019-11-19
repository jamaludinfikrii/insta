import React, { Component } from 'react';
import { View}  from 'react-native';
import {Text, Input ,Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class login extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',paddingHorizontal:20}}>
        <Text style={{alignSelf:'center'}} h1> Insta </Text>
        <View style={{marginTop:30}}>
            <Input
                placeholder='Username'
                leftIcon={
                    <Icon
                    name='user'
                    size={24}
                    color='black'
                    style={{paddingRight:10}}
                    />
                }
            />
        </View>
        <View style={{marginTop:15}}>
            <Input
                placeholder='Password'
                leftIcon={
                    <Icon
                    name='lock'
                    size={24}
                    color='black'
                    style={{paddingRight:10}}
                    />
                }
            />
        </View>
        <View style={{marginTop:30}}>
            <Button
                title='Login'

            />
        </View>

        <View style={{flexDirection:'row', marginTop:15}}>
            <View style={{flex:1}}>
                <Button
                     icon={
                        <Icon 
                            name='google'
                            size={25}
                            color='white'
                        />
                    }
                    buttonStyle={{backgroundColor:'red'}}

                />
            </View>
            <View style={{flex:1}}>
                <Button
                    icon={
                        <Icon 
                            name='facebook'
                            size={25}
                            color='white'
                        />
                    }
                    buttonStyle={{backgroundColor:'blue'}}
                />
            </View>
        </View>
      </View>
    );
  }
}
