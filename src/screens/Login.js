import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    //  justifyContent:'center',
    //  alignItems:'center',
    backgroundColor: '#F3F8FE',
  },
  logo: {
    alignSelf: 'center',
    width: 110,
    height: 110,
  },
  passwordContainer: {
    flexDirection: 'row',
    // paddingBottom: 10,
  },
  inputStyle: {
    flex: 1,
  },
  shadow: {
    alignSelf: 'center',
    shadowColor: '#3F4882',
    backgroundColor: '#fff',
    borderColor: '#fff',
    paddingVertical: 15,
    paddingLeft: 20,
    borderRadius: 20,
    borderWidth: 1,
    width: 320,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.27,
    shadowRadius: 30,

    elevation: 6,
  },
  icon: {
    // alignSelf:'center',
    width: 20,
    height: 20,
    marginRight: 6,
  },
  loginbtn: {
    backgroundColor: '#3E4685',
    width: 325,
    paddingVertical: 19,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 18,
  },
  texts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 34,
    marginTop: 31,
    color: '#7E7E7E',
    opacity: 0.9,
  },
});

export default function Login({navigation}) {
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={{marginVertical: 65}}>
        <Image
          source={require('../images/image2.png')}
          resizeMode="cover"
          style={styles.logo}
        />

        <View style={{marginVertical: 125}}>
          <View style={styles.shadow}>
            <Text
              style={{
                color: '#7E7E7E',
                opacity: 0.9,
                fontSize: 15,
                fontWeight: '500',
                marginBottom: 8,
              }}>
              Email Address
            </Text>
            <View style={styles.passwordContainer}>
              <Image
                source={require('../images/email.png')}
                resizeMode="contain"
                style={styles.icon}
              />
              <TextInput
                style={styles.inputStyle}
                placeholder="user@gmail.com"
                value={text}
                onChangeText={onChangeText}
              />
            </View>
          </View>

          <View style={[styles.shadow, {marginTop: 25}]}>
            <Text
              style={{
                color: '#7E7E7E',
                opacity: 0.9,
                fontSize: 15,
                fontWeight: '500',
                marginBottom: 8,
              }}>
              Password
            </Text>
            <View style={styles.passwordContainer}>
              <Image
                source={require('../images/lock.png')}
                resizeMode="contain"
                style={styles.icon}
              />
              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                value={text}
                onChangeText={onChangeText}
              />
              <Image
                source={require('../images/visibility.png')}
                resizeMode="contain"
                style={[styles.icon,{marginRight:15}]}
              />
            </View>
          </View>

          <View style={styles.loginbtn}>
            <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.texts}>
            <TouchableOpacity>
              <Text>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Forget Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
