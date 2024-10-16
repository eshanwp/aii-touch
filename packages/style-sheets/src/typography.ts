import {TextStyle} from 'react-native';

import {scaleHeight} from './scaler';
import {sh8, sh12, sh14, sh16, sh18, sh20, sh22, sh24, sh26, sh28, sh32} from './sizes';

export const fsTextAlign: Record<'center' | 'left' | 'right', TextStyle> = {
    center: {textAlign: 'center'},
    left: {textAlign: 'left'},
    right: {textAlign: 'right'},
};

export const fsTextTransform: Record<'capitalize' | 'none' | 'uppercase', TextStyle> = {
    capitalize: {textTransform: 'capitalize'},
    none: {textTransform: 'none'},
    uppercase: {textTransform: 'uppercase'},
};

export const fsUnderline: TextStyle = {textDecorationLine: 'underline'};

export const fsNoLineHeight: TextStyle = {lineHeight: undefined};

export const fsTitle: TextStyle = {
    fontSize: sh24,
    lineHeight: sh32,
    fontWeight: 600,
    fontFamily: 'Montserrat-SemiBold',
};

export const fsTitle2: TextStyle = {
    fontSize: sh28,
    lineHeight: sh32,
    fontWeight: 600,
    fontFamily: 'Montserrat-SemiBold',
};

export const fsHeading2: TextStyle = {
    fontSize: sh20,
    lineHeight: sh26,
    fontWeight: 600,
    fontFamily: 'Montserrat-SemiBold',
};

export const Heading3: TextStyle = {
    fontSize: sh18,
    lineHeight: sh26,
    fontWeight: 600,
    fontFamily: 'Montserrat-SemiBold',
};

export const fsHeading4: TextStyle = {
    fontSize: sh16,
    lineHeight: sh24,
    fontWeight: 500,
    fontFamily: 'Montserrat-Medium',
};

export const fsHeading5: TextStyle = {
    fontSize: sh14,
    lineHeight: sh22,
    fontWeight: 500,
    fontFamily: 'Montserrat-Medium',
};

export const fsBody1: TextStyle = {
    fontSize: sh16,
    lineHeight: sh24,
    fontWeight: 400,
    fontFamily: 'Montserrat-Regular',
};

export const fsBody2: TextStyle = {
    fontSize: sh14,
    lineHeight: sh22,
    fontWeight: 500,
    fontFamily: 'Montserrat-Medium',
};

export const fsBody3: TextStyle = {
    fontSize: sh12,
    lineHeight: sh18,
    fontWeight: 400,
    fontFamily: 'Montserrat-Regular',
};

export const fsBody4: TextStyle = {
    fontSize: sh8,
    lineHeight: scaleHeight(8 * 1.6),
    fontWeight: 500,
    fontFamily: 'Montserrat-Medium',
};

export const fsButton1: TextStyle = {
    fontSize: sh16,
    lineHeight: sh20,
    fontWeight: 600,
    fontFamily: 'Montserrat-Light',
};

export const fsButton2: TextStyle = {
    fontSize: sh16,
    lineHeight: sh20,
    fontWeight: 600,
    fontFamily: 'Montserrat-Light',
};

export const fsButton3: TextStyle = {
    fontSize: sh14,
    lineHeight: sh20,
    fontWeight: 500,
    fontFamily: 'Montserrat-Light',
};
