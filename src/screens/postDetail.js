import React, { Component } from 'react';
import { View ,Image} from 'react-native';
import { Header, Icon, Overlay } from 'react-native-elements';
import { Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';

export default class postDetail extends Component {
  render() {
    return (
      <View>
        <Header
            placement='left'
            centerComponent={{ 
                text: 'Post', 
                style: { color: 'black', fontSize: 18, fontWeight: '700' } 
            }}
            leftComponent={{ 
                icon: 'arrow-back', 
                color: 'black',
                onPress: () => this.props.selectProfilePost(null) 
            }}
            containerStyle={{
                backgroundColor: '#fff',
                justifyContent: 'space-around',
                elevation: 2,
                marginTop: Platform.OS === 'ios' ? 0 : - 25
            }}
        />
        <Card>
            <CardItem>
                <Left style={{ flex: 3 }}>
                    <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRi6UkA5tgUbKSQjcdWsZ8XZtNiwh5QCa8lblKM7x0bpwgVuJAw' }} />
                    <Body>
                        <Text>Username</Text>
                        <Text note>Instagrin User</Text>
                    </Body>
                </Left>
                <Right>
                    <Icon
                        name='more-vert'
                        size={30}
                        onPress={() => this.setState({ isVisible: true  })}
                    />
                </Right>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRA1ND-Kj8gh4EpSm7zgoYT3F8w-bltA1GLfvTuWssFqSjO3fK' }} style={{height: 350, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
                <Left>
                    <Text>Hayuukk</Text>
                </Left>
            </CardItem>
        </Card>
      </View>
    );
  }
}
