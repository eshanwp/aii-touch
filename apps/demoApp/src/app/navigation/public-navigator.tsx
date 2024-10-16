import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {pageRoutes} from 'app/constants/page-routes';
import {LoginPage} from 'pages/login-page';
import React, {FC} from 'react';

const {Navigator, Screen} = createStackNavigator();

export const PublicNavigator: FC<PrivateScreenProps> = () => {
    return (
        <Navigator
            initialRouteName={pageRoutes.public.login}
            screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
            <Screen
                name={pageRoutes.public.login}
                component={LoginPage}
                options={{
                    animationEnabled: true,
                }}
            />
        </Navigator>
    );
};
export default PublicNavigator;
