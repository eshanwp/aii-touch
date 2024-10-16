import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {pageRoutes} from 'app/constants/page-routes';
import {CourseDetailsPage, HomePage} from 'pages';
import React, {FC} from 'react';

const {Navigator, Screen} = createStackNavigator();

export const PrivateNavigator: FC<PrivateScreenProps> = () => {
    return (
        <Navigator
            initialRouteName={pageRoutes.protected.home}
            screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
            <Screen
                name={pageRoutes.protected.home}
                component={HomePage}
                options={{
                    animationEnabled: true,
                }}
            />
            <Screen
                name={pageRoutes.protected.courseDetails}
                component={CourseDetailsPage}
                options={{
                    animationEnabled: true,
                }}
            />
        </Navigator>
    );
};
export default PrivateNavigator;
