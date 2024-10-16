import {
    borderBottomGray2,
    brandColors,
    contentColors,
    fsBody2,
    fsHeading4,
    fsTitle,
    sh16,
    sh24,
    sh266,
    sizing,
    spacing,
    sw24,
} from '@eshanwp/fem-style-sheets';
import {
    Accordion,
    BaseIcoMoon,
    CustomHeader,
    FlexSpacer,
    Footer,
    SafeAreaPage,
    Spacer,
} from '@eshanwp/fem-ui-components';
import React, {FC, Fragment, useMemo} from 'react';
import {Image, Linking, ScrollView, Text, View} from 'react-native';
import {coursesList} from 'shared/data';

export const CourseDetailsPage: FC<CourseDetailsScreenProps> = ({route, navigation}) => {
    const {categoryId, courseId} = route.params;

    const details = useMemo(() => {
        const courses = coursesList.find(category => category.id === categoryId)?.courses;
        return courses?.find(course => course.id === courseId);
    }, []);

    const spaceBetweenEachLine = (
        <Fragment>
            <Spacer space={sh24} />
            <View style={borderBottomGray2} />
            <Spacer space={sh16} />
        </Fragment>
    );
    // todo - update dynamic url given by client
    const handleRedirectGForm = (url: string) => {
        if (url) {
            Linking.openURL(url);
        }
    };

    const leftIconProps: BaseIcoMoon = {name: 'left-arrow', onPress: () => navigation.goBack()};

    return (
        <SafeAreaPage>
            <View style={spacing.px(sw24)}>
                <CustomHeader title="Course Details" leftIcon={leftIconProps} />
            </View>

            <View style={{height: '80%'}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image src={details?.backgroundImage.banner} style={{...sizing.fullWidth, height: sh266}} />
                    <Spacer space={sh16} />
                    <View style={spacing.px(sw24)}>
                        <Text style={fsTitle}>{details?.programmeName}</Text>
                        <Spacer space={sh16} />

                        {details && (
                            <Fragment>
                                {details.programmeOverview.overview.length > 0 && (
                                    <Accordion
                                        title="Programme Overview"
                                        overview={details.programmeOverview.overview}
                                        hiddenContent={details.programmeOverview.levels}
                                    />
                                )}
                                <Accordion
                                    title={'Programme Objective'}
                                    overview={details?.programmeObjective.overview}
                                    hiddenContent={details.programmeObjective.levels}
                                />
                                <Accordion
                                    title={'Target Audience'}
                                    overview={details?.targetAudience.overview}
                                    hiddenContent={details.targetAudience.levels}
                                />
                            </Fragment>
                        )}
                        <Text style={{color: brandColors.green.primary, ...fsHeading4}}>Mode</Text>
                        <Text style={{...fsBody2, color: contentColors.secondary}}>{details?.mode}</Text>

                        {spaceBetweenEachLine}

                        <Text style={{color: brandColors.green.primary, ...fsHeading4}}>Duration</Text>
                        {details?.duration.map((data, index) => (
                            <Text key={index} style={{...fsBody2, color: contentColors.secondary}}>
                                {data}
                            </Text>
                        ))}

                        {spaceBetweenEachLine}

                        <Text style={{color: brandColors.green.primary, ...fsHeading4}}>CPD Hours/ Points</Text>
                        {details?.cpdHours.map((data, index) => (
                            <Text key={index} style={{...fsBody2, color: contentColors.secondary}}>
                                {data}
                            </Text>
                        ))}

                        {spaceBetweenEachLine}

                        <Text style={{color: brandColors.green.primary, ...fsHeading4}}>Date</Text>
                        <Text style={{...fsBody2, color: contentColors.secondary}}>{details?.date}</Text>

                        {spaceBetweenEachLine}

                        <Text style={{color: brandColors.green.primary, ...fsHeading4}}>Qualifications</Text>
                        {details?.fsp.map((data, index) => (
                            <Text key={index} style={{...fsBody2, color: contentColors.secondary}}>
                                {data}
                            </Text>
                        ))}

                        <Spacer space={sh16} />
                    </View>
                </ScrollView>
            </View>

            <FlexSpacer />
            <Footer
                label={details?.price as string}
                labelStyle={{color: brandColors.green.primary}}
                submitOnPress={() => handleRedirectGForm('https://forms.office.com/r/vtCt7WazBg')}
            />
        </SafeAreaPage>
    );
};
