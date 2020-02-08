import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Button,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView
} from 'react-native';

class Agg extends React.Component {
  click = item => {
    Alert.alert('LOG OUT?!');
  };

  clock = item => {
    Alert.alert('CREATE NEW ACCOUNT?!');
  };

  state = {
    fontSize: 20,
    borderColor: '#5B2E7F',
    kata: '',
  };
  render() {
    return (
      <ScrollView>
        <ImageBackground 
          source={require('./rude.jpeg')}
          style={style.container, { width: '100%', height: '100%' }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Image
              source={require('./test5.jpg')}
              style={{
                width: 260,
                height: 260,
                borderRadius: 260,
                borderWidth: 12,
                borderColor: '#55E7C3',
                marginBottom: 10,
                alignSelf: 'center',
                marginTop: 130,
              }}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 400,
              }}>
              <Text style={{color: '#fff', fontSize: 32, fontWeight: 'bold'}}>
                Muhammad Hanan
              </Text>
              <Text style={{color: '#fff', fontSize: 21, fontWeight: 'bold'}}>
                IT Manager
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  paddingHorizontal: '10%',
                  textAlign: 'center',
                  marginBottom : 40
                }}>
                {'\n'}
                Asal dari Kalimantan Timur bertepat dari Sangatta Kutai Timur.
                Dan menjadi siswa di Pondok IT Indonesia yang bertempat di
                Yogyakarta.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('login')
                }}
                style={style.buttonContainer}>
                <Text style={{fontWeight: 'bold', color:'#fff'}}>LOG IN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Register');
                }}
                style={style.buttonContainer}>
                <Text style={{fontWeight: 'bold',color:'#fff'}}>SIGN UP</Text>
              </TouchableOpacity>
              <Text style={style.text}>{this.state.kata}</Text>
            </View>
          </View>
          </ImageBackground>
      </ScrollView>
    )
  }
}

export default Agg;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 260,
    height: 260,
    borderRadius: 260,
    borderWidth: 12,
    borderColor: '#55E7C3',
    marginBottom: 500,
    alignSelf: 'center',
    marginTop: 130,
  },
  buttonContainer: {
    marginTop: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 325,
    borderRadius: 100,
    backgroundColor: '#5E3182'
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 1,
  },
});
