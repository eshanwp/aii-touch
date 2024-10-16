import {
    alignments,
    backgroundColors,
    brandColors,
    circle,
    flexbox,
    fsBody2,
    fsHeading4,
    sh12,
    sh16,
    sh40,
    sw16,
    sw24,
    sw32,
    sw48,
} from '@eshanwp/fem-style-sheets';
import {CarouselCardGroup, CustomHeader, SafeAreaPage, Spacer} from '@eshanwp/fem-ui-components';
import {pageRoutes} from 'app/constants/page-routes';
import React, {FC} from 'react';
import {ScrollView, Text, View, ViewStyle} from 'react-native';
import {IcoMoon} from 'shared/components';
import {coursesList} from 'shared/data';

export const HomePage: FC<HomePageScreenProps> = ({navigation}) => {
    const handleShowCourseDetails = (categoryId?: string, courseId?: string) => {
        navigation.navigate(pageRoutes.protected.courseDetails, {categoryId, courseId});
    };

    const sectionItemStyle: ViewStyle = {marginBottom: sh40};
    const paddingLeftStyle: ViewStyle = {paddingLeft: sw24};

    return (
        <SafeAreaPage>
            <CustomHeader
                renderTitle={
                    <View
                        style={{
                            ...flexbox.flexChild,
                            ...flexbox.flexColCenter,
                            ...flexbox.flexRowCenter,
                            ...alignments.spaceBetweenHorizontal,
                        }}>
                        <View style={{...flexbox.flexColCenter, ...flexbox.flexRowCenter}}>
                            <View
                                style={{
                                    ...circle(sw48, backgroundColors.grey),
                                    ...flexbox.flexColCenter,
                                    ...flexbox.flexRowCenter,
                                }}>
                                <IcoMoon color={brandColors.green.primary} name="avatar" size={sw32} />
                            </View>
                            <Spacer space={sw16} isHorizontal={true} />
                            <Text style={fsBody2}>{'Hello, Welcome 👋'}</Text>
                        </View>
                    </View>
                }
            />

            <Spacer space={sh16} />

            <ScrollView>
                {coursesList.map(category => {
                    return (
                        <View key={category.id} style={sectionItemStyle}>
                            <Text style={{...fsHeading4, ...paddingLeftStyle}}>{category.title}</Text>
                            <Spacer space={sh12} />
                            <CarouselCardGroup
                                data={category.courses}
                                onPress={handleShowCourseDetails}
                                categoryId={category.id}
                            />
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaPage>
    );
};
