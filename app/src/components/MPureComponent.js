// MPureComponent.js

import React, { Component, PureComponent } from 'react';
import {
  Text,
  View,
  Alert,
  Button,
  Image,
  Modal,
  FlatList,
  Platform,
  StyleSheet,
  ScrollView,
  Dimensions,
  NativeModules,
  ActivityIndicator,
  TouchableOpacity,
  InteractionManager,
  NativeAppEventEmitter,
} from 'react-native';

const kScreenWidth = Dimensions.get('window').width;
const kScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cell: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  separator: {
    marginLeft: 10,
    marginRight: 10,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#EEEEEE',
  },
});

export default class MPureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderPlaceholderOnly: true,
      toastContext: '',
      loadingContext: '',
      toastVisible: false,
      loadingVisible: false,
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        renderPlaceholderOnly: false,
      }, this._onRefresh());
    });
    const timer = setTimeout(() => {
      this.showToast('OxO', 1000);
    }, 500);
    // setTimeout(() => {
    //   this.setState({
    //     loadingVisible: false,
    //   });
    // }, 1500);
  }

  _keyExtractor = (item, index) => {
    return `M_Flat_${index}_List_`;
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.cell}>
      </View>
    );
  }

  _renderEmpty = () => {
    return (
      <View style={{ backgroundColor: 'white' }}>
      </View>
    );
  }

  _renderHeader = () => {
    return (
      <View style={{ backgroundColor: 'white' }}>
      </View>
    );
  }

  _renderLoadAll = () => {
    return (
      <View style={styles.footer}>
        <View style={{ width: 50, height: StyleSheet.hairlineWidth, backgroundColor: '#EEEEEE' }}>
        </View>
        <Text style={{ marginLeft: 10, marginRight: 10, fontSize: 14, color: '#666666', textAlign: 'center' }}>
          {'End.'}
        </Text>
        <View style={{ width: 50, height: StyleSheet.hairlineWidth, backgroundColor: '#EEEEEE' }}>
        </View>
      </View>
    );
  }

  _renderLoadingMore = () => {
    return (
      <View style={ styles.footer }>
        <Image style={{ width: 30, height: 30, backgroundColor: 'white' }} source={require('./images/ellipsis_white.gif')} />
      </View>
    );
  }

  _renderFooter = () => {
    const { dispatch = () => {}, reducer = {}, action = {} } = this.props;
    const {
      pageNo = 1, list = [], refreshing = false, loadingMore = false, loadAll = false,
    } = reducer;
    
    if (loadAll) {
      return this._renderLoadAll();
    } else if (loadingMore) {
      return this._renderLoadingMore();
    } else if (refreshing) {
      return null;
    } else {
      return null;
    }
  }

  _onRefresh = () => {
    // const { reducer = {}, onRefresh } = this.props;
    // const { isLoading = false } = reducer;
    // if (isLoading !== true && onRefresh !== undefined && typeof onRefresh === 'function') {
    //   onRefresh();
    // }
  }

  _onEndReached = () => {
    // const { reducer = {}, onEndReached } = this.props;
    // const { isLoading = false } = reducer;
    // if (isLoading !== true && onEndReached !== undefined && typeof onEndReached === 'function') {
    //   onEndReached();
    // }
  }

  _handleData = () => {

  }

  showToast = (content = '', delay = 2000) => {
    clearTimeout(this.timeout);

    this.setState({
      toastContext: content || '',
      toastVisible: true,
      loadingVisible: false,
    });

    this.timeout = setTimeout(() => {
      this.setState({
        toastVisible: false,
        loadingVisible: false,
      });
    }, delay);
  }

  showLoading = ({content, delay} = { delay: 100}) => {
    clearTimeout(this.timeout);

    this.setState({
      loadingContext: content || '',
      toastVisible: false,
      loadingVisible: true,
    });
    
    this.timeout = setTimeout(() => {
      this.setState({
        toastVisible: false,
        loadingVisible: false,
      });
    }, delay);
  }

  _renderToast = () => {
    if (this.state.toastVisible) {
      return (
        <View style={{ padding: 10, marginTop: kScreenHeight*0.6, borderRadius: 5, minWidth: 50, maxWidth: 160, alignItems: 'center', backgroundColor: 'black' }}>
          <Text numberOfLines={2} style={{ fontSize: 14, lineHeight: 18, color: 'white' }}>
            {this.state.toastContext || ''}
          </Text>
        </View>
      );
    } else {
      return null;
    }
  }

  _renderLoading = () => {
    if (this.state.loadingVisible) {
      return (
        <View style={{ padding: 10, paddingLeft: 15, borderRadius: 5, minWidth: 70, maxWidth: 100, alignItems: 'center', backgroundColor: 'black' }}>
          <ActivityIndicator
            size={'large'}
          />
          <Text numberOfLines={2} style={{ marginTop: 8, fontSize: 14, lineHeight: 18, color: 'white'}}>{this.state.loadingContext || '加载中...'}</Text>
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    const { reducer = {} } = this.props;
    const {
      list = [], refreshing = false, numColumns = 1, style = {},
    } = reducer;
    console.log('MPureComponent:');
    if (this.state.renderPlaceholderOnly) {
      return (
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }, style]}>
          <Image style={{ width: 60, height: 60 }} source={require('./images/loading_white.gif')} />
        </View>
      );
    } else {
      return (
        <View
          style={[styles.container, { backgroundColor: 'white' }, style]}
          onLayout={({nativeEvent: { layout: {x, y, width, height}}}) => {
            console.log({x, y, width, height});
          }}
        >
          <FlatList
            style={[styles.container, { backgroundColor: 'white' }, style]}
            data={list}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            numColumns={numColumns}
            renderItem={this._renderItem}
            ListEmptyComponent={this._renderEmpty}
            ListHeaderComponent={this._renderHeader}
            ListFooterComponent={this._renderFooter}
            refreshing={refreshing}
            onRefresh={this._onRefresh}
            onEndReached={this._onEndReached}
            onEndReachedThreshold={0.1}
          />
          <Modal
            transparent={true}
            animationType={'fade'}
            onRequestClose={()=>{

            }}
            visible={this.state.toastVisible || this.state.loadingVisible}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {this._renderToast()}
              {this._renderLoading()}
            </View>
          </Modal>
        </View>
      );
    }
  }
}
