import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home'
import UserPhoto from '../pages/UserPhoto'
import Cadastro from '../pages/Cadastro'
import Profile from '../pages/Profile'


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
       
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />
             <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{headerShown: false}}
            />
        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="UserPhoto"
            component={UserPhoto}
            options={{headerShown: false}}
            />
           
           
        </Stack.Navigator>
       
    )
}