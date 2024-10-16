import 'react-native-gesture-handler';

import {flexbox} from '@eshanwp/fem-style-sheets';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from 'app/navigation';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, Keyboard, KeyboardAvoidingView, KeyboardEvent, Platform, StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
    const [isFloating, setFloating] = useState<boolean>(false);
    const {height, width} = Dimensions.get('window');

    const onKeyboardWillChangeFrame = useCallback(
        (event: KeyboardEvent) => {
            setFloating(
                event.endCoordinates.width !== width ||
                    (event.endCoordinates.width === width && event.endCoordinates.height / height < 0.4),
            );
        },
        [height, width],
    );

    useEffect(() => {
        const init = async () => {
            // …do multiple sync or async tasks
        };

        init().finally(async () => {
            await RNBootSplash.hide({fade: true});
            console.log('Bootsplash has been hidden successfully');
        });

        const keyboardWillChangeFrame = Keyboard.addListener('keyboardWillChangeFrame', onKeyboardWillChangeFrame);

        return () => keyboardWillChangeFrame.remove();
    }, []);

    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <StatusBar barStyle="default" />
                {Platform.select({
                    android: <RootNavigator />,
                    ios: (
                        <KeyboardAvoidingView behavior="padding" enabled={!isFloating} style={flexbox.flexChild}>
                            <RootNavigator />
                        </KeyboardAvoidingView>
                    ),
                })}
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

export default App;
