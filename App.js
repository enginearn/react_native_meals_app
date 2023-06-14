import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoryGridTile from './components/CategoryGridTile';

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        const loadFont = async () => {
            await Font.loadAsync({
                'DarumadropOne-Regular': require('./assets/fonts/DarumadropOne-Regular.ttf'),
            });

            setFontLoaded(true);
        };

        loadFont();
    }, []);

    if (!fontLoaded) {
        return (
            <>
                <StatusBar style="light" />
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </>
        ); // あるいはnullを返すこともできます
    }
    return <CategoriesScreen />;
}

// const styles = StyleSheet.create({});
