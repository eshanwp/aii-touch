import {backgroundColors, flexbox} from '@eshanwp/fem-style-sheets';
import React, {Fragment, ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface SafeArePageProps {
    bottomBackgroundColor?: string;
    bottomSpace?: number;
    children: ReactNode;
    topBackgroundColor?: string;
}

export const SafeAreaPage = ({bottomBackgroundColor, bottomSpace, children, topBackgroundColor}: SafeArePageProps) => {
    const {top} = useSafeAreaInsets();

    const topStyle: ViewStyle = {
        backgroundColor: topBackgroundColor !== undefined ? topBackgroundColor : backgroundColors.white,
        height: top,
    };

    const bottomStyle: ViewStyle = {
        backgroundColor: bottomBackgroundColor !== undefined ? bottomBackgroundColor : backgroundColors.white,
        height: bottomSpace !== undefined ? bottomSpace : 0,
    };

    return (
        <Fragment>
            <View style={flexbox.flexChild}>
                <View style={topStyle} />
                <View
                    style={{
                        ...flexbox.flexChild,
                        backgroundColor:
                            bottomBackgroundColor !== undefined ? bottomBackgroundColor : backgroundColors.white,
                    }}>
                    {children}
                </View>
                <View style={bottomStyle} />
            </View>
        </Fragment>
    );
};
