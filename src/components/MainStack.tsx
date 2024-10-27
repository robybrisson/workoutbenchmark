import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { WorkoutList } from "./WorkoutList";
import { WorkoutDetail } from "./WorkoutDetail";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="WorkoutList"
            screenOptions={{
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="WorkoutList"
                component={WorkoutList}
                options={{
                    title: "CrossFit Benchmarks"
                }}
            />
            <StackNavigator.Screen
                name="WorkoutDetail"
                component={WorkoutDetail}
                options={{
                    title: "Workout Details"
                }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);