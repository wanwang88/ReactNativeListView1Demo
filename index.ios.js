/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    ListView,
    Image,
    AlertIOS,
    TouchableOpacity
} from 'react-native';

//导入json
var Wine = require('./Wine.json');

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//ES5
var AListViewDemo = React.createClass({
  //设置初始值
  getInitialState(){
    //设置数据源
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});

    //返回数据
    return{
      dataSource:ds.cloneWithRows(Wine),
    };
  },

  //设置render
  render(){
    return (
        <ListView
            dataSource ={this.state.dataSource}
            renderRow = {this.renderRow}
        />
    );
  },

  //返回具体的cell
  renderRow(rowData, sectionID, rowID, highlightRow){
    return(
    <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert('click'+rowID)}}>
        <View style={styles.cellViewStyle}>
            <Image source={{uri:rowData.image}} style={styles.leftImgStyle}/>

            <View style={styles.rightViewStyle}>
              <Text style={styles.topTitleStyle}>
                {rowData.name}
              </Text>
              <Text style={styles.bottomTitleStyle}>
                {rowData.money}
              </Text>
            </View>
        </View>
    </TouchableOpacity>
    );
  }

});


const styles = StyleSheet.create({
  cellViewStyle:{
    padding:10,
    backgroundColor:'white',
    borderBottomWidth:0.5,
    borderBottomColor:'#e8e8e8',

    //主轴方向
    flexDirection:'row',
  },
  rightViewStyle:{
    //主轴对齐方式
    justifyContent:'center'

  },
  leftImgStyle:{
    width:60,
    height:60,
    marginRight:15
  },
  topTitleStyle:{
    fontSize:15,
    width:width-90,
    marginBottom:10
  },
  bottomTitleStyle:{
    color:'blue'
  }
});

AppRegistry.registerComponent('AListViewDemo', () => AListViewDemo);
