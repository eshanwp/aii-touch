import React, {FunctionComponent} from 'react';
import {Image} from 'react-native';
import {FastImageProps} from 'react-native-fast-image';

// TODO check FastImageStaticProperties prop type
// TODO change usage of RN Image to FastImage. for caching/more optimized
interface CustomFastImageProps extends FastImageProps {
    testId?: string;
}

export const CustomImage: FunctionComponent<CustomFastImageProps> = () => {
    // const defaultResizeMode = props.resizeMode ? FastImage.resizeMode[props.resizeMode] : FastImage.resizeMode.contain;
    // https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY
    // return <View />;
    const exampleUri = 'https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY';
    return <Image source={{uri: exampleUri}} />;
    // return <FastImage {...props} resizeMode={defaultResizeMode} />;
    // return (
    //     <FastImage
    //         style={{width: 200, height: 200}}
    //         source={{
    //             uri: 'https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY',
    //             priority: FastImage.priority.normal,
    //         }}
    //         resizeMode={FastImage.resizeMode.contain}
    //     />
    // );
};
