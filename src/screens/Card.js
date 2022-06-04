import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images} from '../images/Images';

const Data = [
  {
    id: '0',
    title: 'Sent',
    subTitle: 'Sending Payment to Client',
    price: '$30',
    icon: Images.upArrow,
  },
];

const menu = [
  {
    id: '0',
    title: 'All',
  },
  {
    id: '1',
    title: 'Income',
  },
  {
    id: '2',
    title: 'Expenses',
  },
];

const styles = StyleSheet.create({
  box: {
    alignSelf: 'center',
    shadowColor: '#3F4882',
    backgroundColor: '#fff',
    borderColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    width: 350,
    height: 360,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.27,
    shadowRadius: 30,
  },
  texts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    marginTop: 15,
    color: '#7E7E7E',
    opacity: 0.9,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 20,
    height: 110,
    width: 110,
  },
  overview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignItems: 'baseline',
    paddingHorizontal: 22,
  },
  dataItems: {
    alignSelf: 'center',
    shadowColor: '#3F4882',
    backgroundColor: '#fff',
    borderColor: '#fff',
    paddingHorizontal: 8,
    borderRadius: 20,
    borderWidth: 1,
    width: 350,
    height: 74,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.13,
    shadowRadius: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  iconBox: {
    backgroundColor: '#E5E8F9',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  list: {
    shadowColor: '#3F4882',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 8,
  },
  loginbtn: {
    backgroundColor: '#3E4685',
    width: 325,
    paddingVertical: 19,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 18,
  },
});

export default function Card({navigation}) {
  const [selected, setSelected] = useState('0');
  const renderItem = ({item}) => {
    return (
      <View style={styles.dataItems}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.iconBox}>
            {/* <Icon name={item.icon} size={24} color="black" /> */}
            <Image 
              source={item.icon}
              style={{width: 22, height: 22, resizeMode: 'contain'}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={{fontSize: 15, fontWeight: '600'}}>
                {item.title}
              </Text>
              <Text style={{fontSize: 12, color: 'grey', marginTop: 3}}>
                {item.subTitle}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{textAlign: 'right', fontWeight: '600', paddingBottom: 0}}>
            {item.price}
          </Text>
        </View>
      </View>
    );
  };

  const menuItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => setSelected(item.id)}>
        <View
          style={[
            styles.list,
            {backgroundColor: selected === item.id ? '#3F4882' : 'white'},
          ]}>
          <Text style={{color: selected === item.id ? 'white' : 'black'}}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{backgroundColor: '#F3F8FE', flex: 1, paddingHorizontal: 22}}>
      <View style={styles.overview}>
      <TouchableOpacity onPress={()=>navigation.goBack()}> 
        <Image
          source={require('../images/left.png')}
          style={{resizeMode: 'contain', height: 32, width: 32}}
        />
        </TouchableOpacity>

        <Image
          source={require('../images/loupe.png')}
          style={{resizeMode: 'contain', height: 22, width: 32}}
        />
      </View>

      <View>
        <View style={styles.overview}>
          <Text style={{color: '#3F4882', fontSize: 23, fontWeight: '700'}}>
            Recent Transaction
          </Text>

          <Text style={{color: '#3F4882', fontSize: 15, fontWeight: '500'}}>
            see all
          </Text>
        </View>
        <View style={{paddingHorizontal: 22}}>
          <FlatList
            data={menu}
            renderItem={menuItem}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              flexDirection: 'row',
              marginTop: 20,
            }}
          />
        </View>
        <Text
          style={{
            color: '#3F4882',
            fontSize: 20,
            fontWeight: '700',
            paddingHorizontal: 22,
            marginTop: 17,
          }}>
          Today
        </Text>
        <View style={{height:130}}>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <Image
          source={require('../images/image4.png')}
          style={{
            resizeMode: 'contain',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        />

        <View style={styles.loginbtn}>
          <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 18,
                fontWeight: '600',
              }}>
              See Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
