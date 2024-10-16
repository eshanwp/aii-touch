import {
    alignments,
    backgroundColors,
    flexbox,
    fsHeading5,
    fsTitle2,
    sh10,
    sh16,
    sh36,
    sh96,
    sizing,
    spacing,
    sw20,
    sw24,
    sw120,
} from '@eshanwp/fem-style-sheets';
import React, {FunctionComponent} from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Button} from '../button/button';
import {FlexSpacer} from '../spacer/spacer';

interface FooterProps {
    buttonStyle?: ViewStyle;
    containerStyle?: ViewStyle;
    continueDebounce?: boolean;
    continueDisabled?: boolean;
    label: string;
    labelStyle?: TextStyle;
    labelSubmit?: string;
    submitOnPress: () => void;
}

export const Footer: FunctionComponent<FooterProps> = ({
    buttonStyle,
    containerStyle,
    continueDebounce,
    continueDisabled,
    label,
    labelStyle,
    labelSubmit,
    submitOnPress,
}: FooterProps) => {
    const {bottom} = useSafeAreaInsets();
    // todo - footer is shown or not during user's scroll ? if needs to be shown, need to use absolute, else, no need
    const bottomContainer: ViewStyle = {
        justifyContent: 'center',
        ...flexbox.flexRow,
        ...sizing.fullWidth,
        backgroundColor: backgroundColors.white,
        paddingTop: sh16,
        minHeight: sh96 - bottom,
        // bottom: 0,
        // position: 'absolute',
        // iOS shadow properties
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 1,
        // Android shadow (elevation)
        elevation: 10,
        ...containerStyle,
    };

    const submitLabel = labelSubmit || 'Reserve';

    return (
        <View style={{...bottomContainer, ...spacing.px(sw24), paddingBottom: bottom}}>
            <View style={{...alignments.alignItemsCenter, ...spacing.my(sh10)}}>
                <Text style={{...fsTitle2, ...labelStyle}}>{label}</Text>
            </View>
            <FlexSpacer />
            <Button
                isDisabled={continueDisabled}
                style={{
                    minWidth: sw120,
                    minHeight: sh36,
                    borderRadius: sw20,
                    ...buttonStyle,
                }}
                onPress={submitOnPress}
                text={submitLabel}
                textStyle={fsHeading5}
                withDebounce={continueDebounce !== undefined ? continueDebounce : true}
            />
        </View>
    );
};
