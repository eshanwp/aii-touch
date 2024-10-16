import {Dimensions} from 'react-native';

import {stateColors} from './colors';

// Alignment
export const alignments = {
    alignItemsStart: {alignItems: 'flex-start'},
    alignItemsCenter: {alignItems: 'center'},
    alignItemsEnd: {alignItems: 'flex-end'},
    alignSelfStart: {alignSelf: 'flex-start'},
    alignSelfCenter: {alignSelf: 'center'},
    alignSelfEnd: {alignSelf: 'flex-end'},
    centerHorizontal: {justifyContent: 'center'},
    justifyContentEnd: {justifyContent: 'flex-end'},
    justifyContentStart: {justifyContent: 'flex-start'},
    spaceBetweenHorizontal: {justifyContent: 'space-between'},
    spaceAroundHorizontal: {justifyContent: 'space-around'},
    spaceBetweenVertical: {alignContent: 'space-between'},
    spaceAroundVertical: {alignContent: 'space-around'},
    centerHV: {justifyContent: 'center', alignItems: 'center'},
    spaceBetweenHV: {justifyContent: 'space-between', alignContent: 'space-between'},
    spaceAroundHV: {justifyContent: 'space-around', alignContent: 'space-around'},
} as const;

// Flexbox
export const flexbox = {
    flexChild: {flex: 1},
    flexGrow: {flexGrow: 1},
    flexNone: {flex: 0},
    flexShrink: {flexShrink: 1},
    flexContainer: {display: 'flex'},
    flexCol: {flexDirection: 'column', display: 'flex'},
    flexRow: {flexDirection: 'row', display: 'flex'},
    flexRowReverse: {flexDirection: 'row-reverse', display: 'flex'},
    flexColCenter: {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'},
    flexRowCenter: {flexDirection: 'row', justifyContent: 'center', alignItems: 'center', display: 'flex'},
    flexColSpaceBetween: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        display: 'flex',
    },
    flexRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        display: 'flex',
    },
    flexColSpaceAround: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        display: 'flex',
    },
    flexRowSpaceAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        display: 'flex',
    },
    flexWrap: {flexWrap: 'wrap'},
} as const;

// Sizing
export const sizing = {
    fullHeight: {height: '100%'},
    fullWidth: {width: '100%'},
    halfWidth: {width: '50%'},
    fullHW: {height: '100%', width: '100%'},
    autoWidth: {width: 'auto'},
    autoHeight: {height: 'auto'},
} as const;

// Positioning
export const positioning = {
    absolutePosition: {position: 'absolute'},
    absoluteFill: {position: 'absolute', left: 0, right: 0, top: 0, bottom: 0},
} as const;

// Spacing
const spacingHelper = (
    property: 'margin' | 'padding',
    direction: 'top' | 'bottom' | 'left' | 'right' | 'horizontal' | 'vertical',
    value: number,
) => {
    const sides = {
        top: 'Top',
        bottom: 'Bottom',
        left: 'Left',
        right: 'Right',
        horizontal: ['Left', 'Right'],
        vertical: ['Top', 'Bottom'],
    };
    const propertyMapping = sides[direction];
    const styles: Record<string, number> = {};

    if (Array.isArray(propertyMapping)) {
        propertyMapping.forEach(side => {
            styles[`${property}${side}`] = value;
        });
    } else {
        styles[`${property}${propertyMapping}`] = value;
    }
    return styles;
};

export const spacing = {
    py: (value: number) => spacingHelper('padding', 'vertical', value),
    px: (value: number) => spacingHelper('padding', 'horizontal', value),
    my: (value: number) => spacingHelper('margin', 'vertical', value),
    mx: (value: number) => spacingHelper('margin', 'horizontal', value),
} as const;

export const overflowHidden = {overflow: 'hidden'} as const;
export const zIndexTop = {zIndex: 1} as const;
export const displayNone = {display: 'none'} as const;

export const borderBottomGray2 = {borderBottomWidth: 1, borderBottomColor: stateColors.actionDisabled} as const;

// Utility for border styles
export const border = (
    color: string,
    width: number,
    radius?: number,
    style: 'solid' | 'dotted' | 'dashed' = 'solid',
) => ({
    borderColor: color,
    borderRadius: radius,
    borderStyle: style,
    borderWidth: width,
});

// Utility for circle shapes
export const circle = (diameter: number, backgroundColor?: string) => ({
    height: diameter,
    width: diameter,
    borderRadius: diameter / 2,
    backgroundColor,
});

// Utility for circle borders
export const circleBorder = (diameter: number, borderWidth: number, borderColor: string, backgroundColor?: string) => ({
    ...circle(diameter, backgroundColor),
    borderWidth,
    borderColor,
});

// Utility for custom shadows
export const customShadow = (color: string, offsetY: number, offsetX: number, opacity: number, radius: number) => ({
    shadowColor: color,
    shadowOffset: {height: offsetY, width: offsetX},
    shadowOpacity: opacity,
    shadowRadius: radius,
});

export interface DeviceSizeType {
    WIDTH: number;
    HEIGHT: number;
}

export const DEVICE: {
    WINDOW: DeviceSizeType;
    SCREEN: DeviceSizeType;
} = {
    WINDOW: {
        WIDTH: Dimensions.get('window').width,
        HEIGHT: Dimensions.get('window').height,
    },
    SCREEN: {
        WIDTH: Dimensions.get('screen').width,
        HEIGHT: Dimensions.get('screen').height,
    },
};
