import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/Ionicons"
import { Images } from '../images/Images';

const Data = [
  {
    id: '0',
    title: 'Sent',
    subTitle: 'Sending Payment to Client',
    price: '$150',
    icon:Images.upArrow
  },
  {
    id: '1',
    title: 'Receive',
    subTitle: 'Receiving Salary from the Company',
    price: '$250',
    icon:Images.downArrow,
  },
  {
    id: '2',
    title: 'Loan',
    subTitle: 'Loan for the Car',
    price: '$400',
    icon:Images.dollarBil,
  },
  {
    id: '3',
    title: 'Income',
    subTitle: 'Earn best Income',
    price: '$600',
    icon:Images.upArrow,
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
    paddingHorizontal: 3,
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
    shadowRadius: 30,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent:'space-between'
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
});

export default function Home({navigation}) {

  const renderItem = ({item}) => {
    return (
      <View style={styles.dataItems}>
        <View style={{flexDirection:'row',alignItems:'center',}}>
        <View style={styles.iconBox}>
          {/* <Icon name={item.icon} size={24} color="black" /> */}
        
         <Image 
                source={item.icon}
                style={{width:22,height:22,resizeMode:'contain'}}
              />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{fontSize: 15, fontWeight: '600'}}>{item.title}</Text>
            <Text style={{fontSize: 12, color: 'grey', marginTop: 3}}>
              {item.subTitle}
            </Text>
          </View>
        </View>

        </View>
        <View >
          <Text style={{textAlign:"right",fontWeight: '600',paddingBottom:0}}>{item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#F3F8FE', flex: 1}}>
      <View>
        <View style={styles.box}>
          <View style={styles.texts}>
          <TouchableOpacity onPress={() => navigation.navigate('details')}>
            <Image
                source={require('../images/menus.png')}
                style={{width:22,height:22}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image
                source={require('../images/more.png')}
                style={{width:20,height:19}}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require('../images/image.png')}
            resizeMode="cover"
            style={styles.logo}
          />

          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              fontWeight: '800',
              color: '#3F4882',
              marginTop: 10,
            }}>
            Hira Riaz
          </Text>
          <Text style={{textAlign: 'center', fontSize: 14, marginTop: 4}}>
            UI/UX Designer
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 33,
              width: 320,
            }}>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '500',
                  color: '#3F4882',
                  marginTop: 10,
                }}>
                $8900
              </Text>
              <Text style={{textAlign: 'center', fontSize: 14, marginTop: 4}}>
                Income
              </Text>
            </View>

            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '500',
                  color: '#3F4882',
                  marginTop: 10,
                }}>
                $5500
              </Text>
              <Text style={{textAlign: 'center', fontSize: 14, marginTop: 4}}>
                Expenses
              </Text>
            </View>

            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '500',
                  color: '#3F4882',
                  marginTop: 10,
                }}>
                $890
              </Text>
              <Text style={{textAlign: 'center', fontSize: 14}}>
                Loan
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.overview}>
          <Text style={{color: '#3F4882', fontSize: 25, fontWeight: '700'}}>
            Overview&nbsp;
            {/* <Icon name="notifications-outline" size={24} color="#3F4882" /> */}
            <Image
                source={require('../images/bell.png')}
                style={{width:22,height:22}}
              />
          </Text>

          <Text style={{color: '#3F4882', fontSize: 15, fontWeight: '500'}}>
            Sept 13,2020
          </Text>
        </View>

        <View>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
