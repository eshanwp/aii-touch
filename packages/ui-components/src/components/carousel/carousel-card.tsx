import {contentColors, flexbox, sh200, sw8, sw140} from '@eshanwp/fem-style-sheets';
import {aii_firebase_storage} from 'app/constants/stock-images';
import React, {FunctionComponent} from 'react';
import {ImageBackground, Pressable} from 'react-native';

export interface CarouselCardProps {
    backgroundImage: string;
    programmeName: string;
    onPress: () => void;
}

export const CarouselCard: FunctionComponent<CarouselCardProps> = ({backgroundImage, onPress}) => {
    const imageBackgroundProps = {source: {uri: backgroundImage ? backgroundImage : aii_firebase_storage.default}};

    return (
        <ImageBackground resizeMode="stretch" {...imageBackgroundProps} imageStyle={{borderRadius: sw8}}>
            <Pressable
                style={{
                    ...flexbox.flexChild,
                    height: sh200,
                    width: sw140,
                    borderRadius: sw8,
                    backgroundColor: imageBackgroundProps ? undefined : contentColors.primary,
                }}
                onPress={onPress}
                testID="component-CarouselCard"></Pressable>
        </ImageBackground>
    );
};
