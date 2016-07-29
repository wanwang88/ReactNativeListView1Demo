# 效果图

![image](https://github.com/wanwang88/ReactNativeListView1Demo/raw/master/screenshots/demo.png)


```
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
```
