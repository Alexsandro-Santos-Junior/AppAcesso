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

export default function UserPhoto(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
                   
                 <View style={styles.containerLogo}>
                <Animatable.Image
                animation="flipInY"
                source={require('../../assets/logoappbrancoatt.png')}
                style={{width: '100%'}}
                resizeMode="contain"
                />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
           
            <FlatList/>
            <TextInput style={styles.placeTitleInfo}
            placeholder="Tirar foto"/>
             <TextInput style={styles.placeTitleInfo}
            placeholder="Escolher foto"/>
             <TextInput style={styles.placeTitleInfo}
            placeholder="Remover foto atual"/>
            
            <TouchableOpacity 
            style={styles.iconArea}
            onPress={ () => navigation.navigate('Profile')}
            >
            <Text style={styles.iconText}>X</Text>
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
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
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
    bottom:'80%',
    backgroundColor: '#fff', 
    left:20,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
},
iconText:{
    color: '#A1A1A1A1',
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
    paddingHorizontal:40,
    borderRadius:50,
    marginBottom:20,
    flexDirection:'row',
    
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
})