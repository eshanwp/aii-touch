declare type PrivateStackParamList = {
    home: null;
    courseDetails: {categoryId: string; courseId: string} | null;
};

declare type HomePageScreenProps = StackScreenProps<PrivateStackParamList, 'home'>;
declare type CourseDetailsScreenProps = StackScreenProps<PrivateStackParamList, 'courseDetails'>;
