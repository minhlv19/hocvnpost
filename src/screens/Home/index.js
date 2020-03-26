import React, {Component} from 'react';
import {Text, View, TextInput,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {addNote,removeNote} from '../../actions/noteAction';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onPressAdd() {
    this.props.dispatchAddNote(this.state.value);
  }
  onRemove(value){
this.props.dispatchRemoveNote(value)

  }

  render() {
    console.log('fdrgd',this.props.data);
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>

        {this.props.data.map(e=>{
          return(
          <View style={{flexDirection:'row'}}>
            <Text style={{marginRight:10}}>{e}</Text>
            <TouchableOpacity onPress={() => this.onRemove(e)}>
              <Text>Remove</Text>
            </TouchableOpacity>

          </View>
          );
        })}
        <TextInput
          value={this.setState.value}
          onChangeText={(text) => this.setState({value: text})}
          style={{width: '90%', height: 50, borderWidth: 1, marginBottom: 20}}/>
        <TouchableOpacity style={{
          height: 50,
          backgroundColor: 'green',
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
                          onPress={() => this.onPressAdd()}>
          <Text>add</Text>

        </TouchableOpacity>
      </View>
    );
  }
}

//lấy state từ store redux
function mapStateToProps(state) {
  return {
    //node lấy trong index.js trong forder reducer
    data: state.note.contents,
  };
}

//gửi action
function mapDispatchToProps(dispatch) {
  return {
    dispatchAddNote: (content) => dispatch(addNote(content)),
    dispatchRemoveNote: (content) => dispatch(removeNote(content)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
