import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
   
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function SignIn(){
    const navigation = useNavigation();
    return(
        
        <SafeAreaView style={styles.container}>
            
                <View style={styles.containerLogo}>
                    <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logoappbrancoatt.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
                    />
                </View>
            <View><Text style={styles.subTitle}>Bem vindo(a)</Text></View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            
            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.placeTitle}
            placeholder="Informe seu Email!"/>
            <Text style={styles.title}>Senha</Text>
            <TextInput style={styles.placeTitle}
            placeholder="Informe sua Senha!"/>
            <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('Home')}
            >
            <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonRegister}
            onPress={ () => navigation.navigate('Cadastro')}
            >
            <Text style={styles.textRegister}>Não possui uma conta ?<Text style={styles.textRegisterBold}> Cadastre-se</Text></Text>
            </TouchableOpacity>
            </Animatable.View>
               
        </SafeAreaView>
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
    flex:1.5,
    backgroundColor:'#fff',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    //paddingStart:'25%',
    paddingEnd:'5%'
},
title:{
    fontSize:15,
    fontWeight:'bold',
    marginTop: 28,
    marginBottom: 12,
    paddingStart:'5%'
},
subTitle:{
    fontSize:28,
    fontWeight:'bold',
    marginTop: 28,
    marginBottom: 8,
    color:'#fff',
    paddingStart:'5%'
},
placeTitle:{
    fontSize:15,
    fontWeight:'bold',
  //  marginTop: 28,
    marginBottom: 8,
    color:'#fff',
    paddingStart:'5%'

},
text:{
    color: '#a1a1a1',
    
},
textRegister:{
    color: '#a1a1a1'
    
},
textRegisterBold:{
    color: '#a1a1a1',
    fontWeight:'bold'
},

button:{
    position: 'absolute',
    backgroundColor:'#FF8C00',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf:'center',
    bottom:'15%',
    alignItems:'center',
    justifyContent:'center'
},
buttonRegister:{
    bottom:'-25%',
    paddingStart:'3%'
},
buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
},

})