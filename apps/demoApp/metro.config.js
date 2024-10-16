/* eslint-disable @typescript-eslint/no-require-imports */
const {getMetroTools, getMetroAndroidAssetsResolutionFix} = require('react-native-monorepo-tools');
const path = require('path');

const monorepoMetroTools = getMetroTools();

const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix();

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const {
    resolver: {sourceExts, assetExts},
} = getDefaultConfig(__dirname);

const config = {
    transformer: {
        publicPath: androidAssetsResolutionFix.publicPath,
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
    server: {
        enhanceMiddleware: middleware => {
            return androidAssetsResolutionFix.applyMiddleware(middleware);
        },
    },
    watchFolders: monorepoMetroTools.watchFolders,
    resolver: {
        extraNodeModules: {
            ...monorepoMetroTools.extraNodeModules,
            app: path.resolve(__dirname, 'src/app'),
            assets: path.resolve(__dirname, 'src/assets'),
            pages: path.resolve(__dirname, 'src/pages'),
            shared: path.resolve(__dirname, 'src/shared'),
        },
        assetExts: assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...sourceExts, 'svg'],
    },
};

module.exports = mergeConfig(defaultConfig, config);
