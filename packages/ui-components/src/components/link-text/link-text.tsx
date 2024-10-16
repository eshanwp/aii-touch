import {alignments, flexbox, stateColors, sw2} from '@eshanwp/fem-style-sheets';
import React from 'react';
import {FunctionComponent} from 'react';
import {Text, TextStyle, View} from 'react-native';

export interface LinkTextProps {
    onPress?: () => void;
    text: string;
    style?: TextStyle;
    withUnderline?: boolean;
    isCentered?: boolean;
}

export const LinkText: FunctionComponent<LinkTextProps> = ({
    onPress,
    style,
    text,
    withUnderline,
    isCentered,
}: LinkTextProps) => {
    const underline =
        withUnderline === true ? {borderBottomWidth: sw2, borderBottomColor: stateColors.enableHover} : {};
    const centeredLinkText = isCentered === true ? {...alignments.alignSelfCenter} : {};

    return (
        <View style={{...flexbox.flexWrap, ...centeredLinkText}}>
            <View style={{...underline}}>
                <Text onPress={onPress} style={{color: stateColors.enableHover, ...style}} suppressHighlighting={true}>
                    {text}
                </Text>
            </View>
        </View>
    );
};
