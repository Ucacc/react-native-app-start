## 步骤

* `git clone`
* `cd ReactNativeProjects/muscari`
* `yarn`


## 以下为`+依赖`记录

### lottie-react-native [github](https://github.com/airbnb/lottie-react-native) [文档](http://airbnb.io/lottie/react-native/react-native.html)

```
yarn add lottie-react-native@2.2.7
react-native link lottie-ios
react-native link lottie-react-native
```

在`android/build.gradle`文件中

```
allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven {
            url 'https://maven.google.com'
        }
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
    }
}
```


### react-native-vector-icons [github](https://github.com/oblador/react-native-vector-icons)

```
yarn add react-native-vector-icons
react-native link
```


### react-native-code-push **未完成配置** [github](https://github.com/Microsoft/react-native-code-push) [文档](https://github.com/Microsoft/react-native-code-push/tree/master/docs)

```
yarn add react-native-code-push
```


### react-navigation [github](https://github.com/react-community/react-navigation) [文档](https://reactnavigation.org/)
```
yarn add react-navigation
```


### react-native-image-zoom-viewer [github](https://github.com/ascoders/react-native-image-viewer)

```
yarn add react-native-image-zoom-viewer
```


### realm [github](https://github.com/realm/realm-js)
```
yarn add realm
```







