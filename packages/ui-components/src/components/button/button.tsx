import {
    border,
    brandColors,
    colorTransparent,
    contentColors,
    flexbox,
    fsButton1,
    fsButton3,
    fsUnderline,
    sh52,
    spacing,
    stateColors,
    sw2,
    sw8,
    sw20,
} from '@eshanwp/fem-style-sheets';
import debounce from 'lodash.debounce';
import React, {Fragment, ReactNode, useCallback, useMemo, useState} from 'react';
import {Pressable, Text, TextStyle, ViewStyle} from 'react-native';
import {CircleSnail} from 'react-native-progress';

import {Spacer} from '../spacer/spacer';

export interface ButtonProps {
    text: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    isDisabled?: boolean;
    isLoading?: boolean;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    withDebounce?: boolean;
    btnType?: 'primary' | 'secondary' | 'tertiary';
    size?: 'large' | 'small';
}

export const Button: React.FC<ButtonProps> = ({
    text,
    onPress,
    style,
    textStyle,
    isDisabled = false,
    isLoading = false,
    prefixIcon,
    suffixIcon,
    withDebounce = false,
    btnType = 'primary',
    size = 'small',
}) => {
    const [hover, setHover] = useState<boolean>(false);

    const handlePress = useCallback(() => {
        if (withDebounce) {
            debounce(onPress, 1000, {leading: true, trailing: false})();
        } else {
            onPress();
        }
    }, [onPress, withDebounce]);

    let textColor = stateColors.neutral;

    const defaultButtonStyle = useMemo((): ViewStyle => {
        // Base properties
        let bg = brandColors.yellow.primary;
        let paddingVertical = spacing.py(10);
        let paddingHorizontal = spacing.px(32);
        let borderStyle = border(colorTransparent, 0);

        // Handle button types
        switch (btnType) {
            case 'primary':
                if (hover) {
                    bg = stateColors.enableHover;
                }
                break;

            case 'secondary':
                bg = colorTransparent;
                borderStyle = border(stateColors.enableActive, 1);
                textColor = stateColors.enableActive;
                if (hover) {
                    borderStyle = border(stateColors.enableHover, 1);
                    textColor = stateColors.enableHover;
                }
                break;

            default: // For any other button types
                bg = colorTransparent;
                textColor = stateColors.enableActive;
                if (hover) {
                    textColor = stateColors.enableHover;
                }
                break;
        }

        // Adjust styles for size
        if (size === 'large') {
            paddingVertical = spacing.py(14);
            paddingHorizontal = spacing.px(16);
        }

        // Handle disabled state
        if (isDisabled) {
            if (btnType === 'primary') {
                bg = stateColors.actionDisabled;
                borderStyle = border(colorTransparent, 0);
                textColor = contentColors.tertiary;
            } else {
                borderStyle = border(colorTransparent, 0);
                textColor = stateColors.actionDisabled;
                if (btnType === 'secondary') {
                    borderStyle = border(stateColors.actionDisabled, 1);
                }
            }
        }

        // Return final style object
        return {
            ...flexbox.flexRowCenter,
            backgroundColor: bg,
            height: sh52,
            flexShrink: 1,
            alignSelf: 'flex-start',
            minWidth: 193,
            minHeight: 52,
            ...borderStyle,
            borderRadius: 12,
            ...paddingVertical,
            ...paddingHorizontal,
            ...style,
        };
    }, [style, isDisabled, hover, btnType, size]);

    return (
        <Pressable
            onPress={!isDisabled ? handlePress : undefined}
            onPressIn={() => setHover(true)}
            onPressOut={() => setHover(false)}
            style={defaultButtonStyle}>
            {prefixIcon && (
                <Fragment>
                    {prefixIcon}
                    <Spacer isHorizontal={true} space={sw8} />
                </Fragment>
            )}
            <Text
                style={{
                    color: textColor,
                    ...(size === 'small' ? fsButton3 : fsButton1),
                    ...(btnType === 'tertiary' && fsUnderline),
                    ...textStyle,
                }}>
                {text} v0.1.1
            </Text>

            {suffixIcon && (
                <Fragment>
                    <Spacer isHorizontal={true} space={sw8} />
                    {suffixIcon}
                </Fragment>
            )}

            {isLoading && (
                <Fragment>
                    <Spacer isHorizontal={true} space={sw8} />
                    <CircleSnail color="white" size={sw20} thickness={sw2} />
                </Fragment>
            )}
        </Pressable>
    );
};
