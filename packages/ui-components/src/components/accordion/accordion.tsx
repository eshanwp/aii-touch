import {
    borderBottomGray2,
    brandColors,
    contentColors,
    fsBody2,
    fsHeading4,
    fsHeading5,
    fsTextAlign,
    sh8,
    sh16,
    sh24,
} from '@eshanwp/fem-style-sheets';
import React, {useMemo, useState} from 'react';
import {LayoutAnimation, Platform, Text, UIManager, View} from 'react-native';

import {LinkText, Spacer} from '../index';

declare interface AccordionProps {
    title: string;
    overview: string;
    hiddenContent: {levelName: string; description: string}[];
}

export const Accordion = ({overview, hiddenContent, title}: AccordionProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const maxChars = 100;

    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const totalContentLength = useMemo(() => {
        let contentLength = 0;
        hiddenContent.forEach(content => {
            contentLength = content.levelName.length + content.description.length;
            return contentLength;
        });
        return overview.length + contentLength;
    }, [overview.length]);

    const truncatedString = (input: string) => {
        if (!collapsed && input.length > maxChars) {
            return `${input.substring(0, maxChars)}...`;
        }
        return input;
    };

    const toggleCollapse = () => {
        LayoutAnimation.configureNext({
            duration: 100,
            create: {type: 'easeIn', property: 'opacity'},
            update: {type: 'linear', springDamping: 0.3, duration: 100},
        });
        setCollapsed(!collapsed);
    };

    return (
        <View>
            {title && <Text style={{color: brandColors.green.primary, ...fsHeading4}}>{title}</Text>}
            <Spacer space={sh8} />
            <Text style={{...fsBody2, color: contentColors.secondary}}>{truncatedString(overview)}</Text>
            {collapsed &&
                hiddenContent.map(({levelName, description}, index) => (
                    <View key={index}>
                        <Spacer space={sh16} />
                        <Text style={{...fsHeading5, color: contentColors.primary}}>{levelName}</Text>
                        <Text style={{...fsBody2, color: contentColors.secondary}}>{description}</Text>
                    </View>
                ))}
            <Spacer space={sh8} />
            <View style={fsTextAlign.center}>
                {totalContentLength > maxChars && (
                    <LinkText
                        text={collapsed ? 'Hide' : 'Show More'}
                        onPress={toggleCollapse}
                        withUnderline={true}
                        isCentered={true}
                    />
                )}

                <Spacer space={sh24} />
                <View style={borderBottomGray2} />
                <Spacer space={sh16} />
            </View>
        </View>
    );
};
