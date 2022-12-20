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

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.containerForm}>
                               
           {/* <Text style={styles.iconArea}>ok</Text> */}
            <Text style={styles.title}>Bom Dia</Text>
            
            <TextInput style={styles.placeTitleInfo}
            placeholder="Buscas Locais Proximos Recomendados!"/>
            <TouchableOpacity 
            style={styles.iconArea}
            onPress={ () => navigation.navigate('SignIn')}
            >
            <Text style={styles.iconText}>⟵</Text>
            </TouchableOpacity>      
                <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('Profile')}
            >
            <Text style={styles.buttonText}>User</Text>
            </TouchableOpacity>                                                                
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
    width: '15%',
    alignSelf:'center',
   // bottom:'10%',
    alignItems:'center',
    justifyContent:'center',
   // width:'35%',
    height:'5%',
    position: 'absolute',
    bottom:'90%',
    left:340
},
buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
   
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
    bottom:'90%',
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
iconTextReturn:{
    color: '#A1A1A1A1',
    fontSize:20,
    fontWeight:"bold",
    position: 'absolute',
    bottom:'80%',
    left:-80,
    justifyContent:"space-between",
},
})