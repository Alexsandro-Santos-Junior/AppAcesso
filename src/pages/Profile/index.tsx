import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    FlatList
   
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Profile(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
                   
            <Animatable.View delay={600} animation="fadeInDown" style={styles.containerForm} >
             <Text style={styles.iconArea}></Text>
            <Text style={styles.title}>Your Profile</Text>
            <FlatList/>
            <TextInput style={styles.placeTitleProfile}
            placeholder="Nickname"/>
            <TextInput style={styles.placeTitleProfile}
            placeholder="Gender"/>
            <TextInput style={styles.placeTitleProfile}
            placeholder="Age"/>

            <TouchableOpacity 
            style={styles.iconAreaAlterPhoto}
            onPress={ () => navigation.navigate('UserPhoto')}
            >
            <Text style={styles.iconTextPhoto}>+</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
            style={styles.iconAreaPhoto}
            onPress={ () => navigation.navigate('UserPhoto')}
            >
            <Text style={styles.iconText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.iconArea}
            onPress={ () => navigation.navigate('UserPhoto')}
            >
            <Text style={styles.iconText}>+</Text>
            </TouchableOpacity> 
             
            </Animatable.View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>YOUR INFORMATIONS</Text>
            <FlatList/>
            <TextInput style={styles.placeTitleInfo}
            placeholder="Name"/>
             <TextInput style={styles.placeTitleInfo}
            placeholder="CPF"/>
             <TextInput style={styles.placeTitleInfo}
            placeholder="RG"/>
            <TextInput style={styles.placeTitleInfo}
            placeholder="Gender"/>
            <TextInput style={styles.placeTitleInfo}
            placeholder="Tel"/>
            <TextInput style={styles.placeTitleInfo}
            placeholder="City"/>
            <TextInput style={styles.placeTitleInfo}
            placeholder="E-mail"/>
           
            <TouchableOpacity 
            style={styles.iconAreaReturn}
            onPress={ () => navigation.navigate('Home')}
            >
            <Text style={styles.iconTextReturn}>⟵</Text>
            </TouchableOpacity>
            </Animatable.View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FF8C00'
    },
containerLogo:{
    flex:2,
    backgroundColor:'#FF8C00',
    justifyContent:'center',
    alignItems:'center'
},
containerForm:{
    flex:1,
    backgroundColor:'#fff',
    //borderTopLeftRadius:25,
   // borderTopRightRadius:25,
    paddingStart:'25%',
    paddingEnd:'5%'
},
title:{
    fontSize:24,
    fontWeight:'bold',
    marginTop: 28,
    marginBottom: 12,
},
text:{
    color: '#a1a1a1'
},
button:{
    position: 'absolute',
    backgroundColor:'#FF8C00',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf:'center',
    bottom:'10%',
    alignItems:'center',
    justifyContent:'center'
},
buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
},
placeTitle:{
    fontSize:20,
    fontWeight:'bold',
  //  marginTop: 28,
    marginBottom: 8,
    color:'#a1a1a1',
    paddingStart:'30%',
    borderRadius: 8,
    left: 50
},
iconArea:{
    width:'15%',
    height:'10%',
    position: 'absolute',
    bottom:'10%',
    backgroundColor: '#FF8C00', 
    left:20,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
},
iconText:{
    color: '#fff',
    fontSize:20,
    fontWeight:"bold",
},
iconAreaPhoto:{
    width:'45%',
    height:'30%',
    position:'relative',
    bottom:'50%',
    backgroundColor: '#FF8C00', 
    left: - 96,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
},
placeTitleIcon:{
    fontSize:20,
    fontWeight:'bold',
  //  marginTop: 28,
    marginBottom: 8,
    color:'#a1a1a1',
   // paddingStart:'5%',
    borderRadius: 8,
   
},
placeTitleProfile:{
    width:'75%',
    alignContent:"flex-start",
    backgroundColor:"#f5f5f5cf",
    padding: 12,
    paddingHorizontal:30,
    borderRadius:50,
    marginBottom:5,
    flexDirection:"row-reverse",
    justifyContent:"space-between",
    left:60
},
placeTitleInfo:{
    width:'95%',
    alignContent:"flex-start",
    backgroundColor:"#f5f5f5cf",
    padding: 12,
    paddingHorizontal:30,
    borderRadius:50,
    marginBottom:5,
    flexDirection:"column"
},
iconAreaAlterPhoto:{
    width:'7%',
    height:'5%',
    position:'absolute',
    bottom:'75%',
    backgroundColor: '#a1a1a1', 
    left:90,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
},
iconTextPhoto:{
    color: '#fff',
    fontSize:15,
    fontWeight:"bold",
},
iconAreaReturn:{
    width:'15%',
    height:'10%',
    position: 'absolute',
    bottom:'90%',
    backgroundColor: '#fff', 
    left:20,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
},
iconTextReturn:{
    color: '#FF8C00',
    fontSize:30,
    fontWeight:"bold",
},
})