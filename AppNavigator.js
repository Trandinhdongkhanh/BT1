import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./screens/HomePage";
import Introduce from "./screens/Introduce";

const Stack = createStackNavigator();

function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Introduce">
                <Stack.Screen name="Introduce" component={Introduce}/>
                <Stack.Screen name="HomePage" component={HomePage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator