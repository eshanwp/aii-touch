declare type RootStackParamList = {
    Public: import('@react-navigation/native').NavigatorScreenParams<PublicStackParamList>;
    Private: import('@react-navigation/native').NavigatorScreenParams<PrivateStackParamList>;
};

declare type PublicScreenProps = StackScreenProps<RootStackParamList, 'Public'>;
declare type PrivateScreenProps = StackScreenProps<RootStackParamList, 'Private'>;
