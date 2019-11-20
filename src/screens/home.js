import React, { Component } from 'react';
import { View,ScrollView } from 'react-native';
import {Image,Avatar, Text} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const data =[
    {username : 'fikri' , url_foto : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption : 'caption',likes : 10},
    {username : 'andi' , url_foto : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption : 'caption',likes : 10},
    {username : 'budi' , url_foto : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption : 'caption',likes : 10},
    {username : 'seto' , url_foto : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption : 'caption',likes : 10},
    {username : 'susilo' , url_foto : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption : 'caption',likes : 10},
]


export default class home extends Component {
  render() {
    return (
      <ScrollView style={{paddingTop:30}}>
        <View>
            <View style={{flexDirection:'row',paddingHorizontal:15, justifyContent:'space-between' }}>
              <View style={{flexDirection:'row'}}>
                <Avatar
                    rounded
                    source={{
                        uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                    />
                <Text style={{marginLeft:15,fontWeight:'bold',fontSize:18}}>Username</Text>

              </View>
              <View style={{alignSelf:'center'}}>
                <Icon 
                  name='ellipsis-v'
                  size ={20}
                />
              </View>
            </View>


            <View style={{borderTopWidth:0.3, borderTopColor:'grey',marginTop:10}}>
                <Image 
                    source={{uri : 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                    style={{ width: 400,height:400}}
                />
            </View>
            <View style={{flexDirection:'row',paddingLeft:15,marginTop:15,justifyContent:'space-between'}}>
              <View style={{flexDirection:'row'}}>
                <Icon 
                  style={{marginRight:20}}
                  // style={{borderWidth:0.5,borderColor:'black'}}
                  name='heart-o'
                  size={30}
                />
                <Icon 
                  // style={{borderWidth:0.5,borderColor:'black'}}
                  name='comment-o'
                  size={30}
                />
              </View>
              <View>
              <Icon 
                  style={{marginRight:20}}
                  // style={{borderWidth:0.5,borderColor:'black'}}
                  name='tag'
                  size={30}
                />
              </View>
            </View>

            
            <View style={{flexDirection:'row',marginTop:15,paddingHorizontal:15}}>
              <Text style={{fontWeight:'bold'}}>Username <Text style={{fontWeight:"normal"}}>Ini Adalah Caption</Text></Text>
            </View>
            <View></View>
        </View>
      </ScrollView>
    );
  }
}
