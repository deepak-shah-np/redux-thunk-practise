import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/item';

class ItemList extends Component{


  componentDidMount() {
    console.log(this.props);
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    console.log(this.props);
  }

  render(){
    
    if(this.props.hasErrored){
      return (
        <View>
          <Text>Sorry! There was an error loading the items!</Text>
        </View>
      );
    }
    if(this.props.isLoading){
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View>

        {this.props.items.map((item,i)=>(
          <Text key={i}>
              {item.label}
          </Text>
        ))}

      </View>
    );
  }
}


function mapStateToProps(state) {
  return{
    items:state.items,
    hasErrored: state.itemHasErrored,
    isLoading: state.itemIsLoading
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchData:(url)=>dispatch(itemsFetchData(url))
  };
}


 export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
