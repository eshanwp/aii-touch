import {flexbox, sh24, sw24} from '@eshanwp/fem-style-sheets';
import React, {Fragment, FunctionComponent} from 'react';
import {ScrollView, View} from 'react-native';

import {Spacer} from '../spacer/spacer';
import {CarouselCard} from './carousel-card';

export interface CarouselCardGroup {
    data: {programmeName: string; id: string; backgroundImage: {thumbnail: string; banner: string}}[];
    categoryId: string;
    onPress: (categoryId: string, courseId: string) => void;
}

export const CarouselCardGroup: FunctionComponent<CarouselCardGroup> = ({data, categoryId, onPress}) => {
    return (
        <View style={flexbox.flexRow} testID="component-CarouselCardGroup">
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{width: sw24}} />
                {data.length > 0 &&
                    data.map((eachData, index) => {
                        const {
                            backgroundImage: {thumbnail},
                            programmeName,
                            id: courseId,
                        } = eachData;
                        return (
                            <Fragment key={`${index}${programmeName}`}>
                                <CarouselCard
                                    backgroundImage={thumbnail}
                                    programmeName={programmeName}
                                    onPress={() => onPress(categoryId, courseId as string)}
                                />
                                <Spacer space={sh24} isHorizontal={true} />
                            </Fragment>
                        );
                    })}
            </ScrollView>
        </View>
    );
};
