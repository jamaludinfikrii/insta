import React, { Component } from 'react';
import { View, Text,ScrollView,TouchableWithoutFeedback,Image } from 'react-native';
import {SearchBar} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
          <SearchBar
              placeholder="Search"
              onChangeText={this.updateSearch}
              value={this.state.search}
              containerStyle={{ backgroundColor: '#fff' }}
              inputContainerStyle={{ backgroundColor: '#fff' }}
              inputStyle={{ color: 'black'}}
              lightTheme={true}
              searchIcon={{ size: 27 }}
          />
          <ScrollView>
              <View 
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    // justifyContent: 'space-between',
                    flex: 1
                }}
              > 
                  
                  <View style={{width:`${100/3}%`}}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('postDetail')}>
                        <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxrsiKTNSyMmJ4oCZJBtyrS4GD-Y4qd9-8G9ekrFJsex_IvfLp' }} style={{height: 125, width: '100%' }}/>
                      </TouchableOpacity>
                  </View>
                  <View style={{width:`${100/3}%`}}>
                      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSISxhwEyv6Bo5LjRbq1Uhr3iL7Dgn4FaJ15dda1gzl2la3UoZT' }} style={{height: 125, width: '100%' }}/>
                  </View>
                  <View style={{width:`${100/3}%`}}>
                      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiDTawj--BDZ1NqrlhrZzqEfW-ZdEipsF6I1_n24O-nb3pn0E8' }} style={{height: 125, width: '100%' }}/>
                  </View>
                  <View style={{width:`${100/3}%`}}>
                      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRB6eSld4ECv9wIcD3CSVOmXPCM5NQ6GkcIWFkdiGOp4O39gYjy' }} style={{height: 125, width: '100%' }}/>
                  </View>
                  
                  {/* {this.renderListPost()} */}
              </View>
          </ScrollView>
      </View>
    );
  }
}
