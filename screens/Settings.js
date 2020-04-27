import React, { Component } from 'react'
import { Text, View ,StyleSheet ,Switch ,TextInput ,AsyncStorage ,} from 'react-native'

export default class Settings extends Component {
    state={
        isEnabledAudio:false,
        isEnabledVideo:false,
        isEnabledAdvance:false,
        Name:'',
        Email:'',
    }
    handleAudio = async()=>{
        this.setState({isEnabledAudio:!this.state.isEnabledAudio})
        
        let obj ={
            isEnabledAudio:!this.state.isEnabledAudio
        }
        try {
            await AsyncStorage.setItem('audio', JSON.stringify(obj));
        } catch (error) { 
            console.log(error)
            // Error saving data  
        } 
        
    }
    componentDidMount= async()=>{
        try {
            const value = await AsyncStorage.getItem('Email'); 
            console.log(value,'email')
            if (value !== null) {
            let obj = JSON.parse(value);
            console.log(obj,'email')
          this.setState({Email:obj})
            }
          } catch (error) {
          } 
        try {
            const value = await AsyncStorage.getItem('audio');
            if (value !== null) {
                let obj = JSON.parse(value);
                console.log(obj,'audio');
              this.setState({isEnabledAudio:obj.isEnabledAudio})
            }
          } catch (error) {
          }
          try {
            const value = await AsyncStorage.getItem('video');
            if (value !== null) {
            let obj = JSON.parse(value);
          this.setState({isEnabledVideo:obj.isEnabledVideo})
            }
          } catch (error) {
          }
          try {
            const value = await AsyncStorage.getItem('name'); 
            if (value !== null) {
            let obj = JSON.parse(value);
          this.setState({Name:obj})
            } 
          } catch (error) {
          }

    }
    handleVideo = async ()=>{
        this.setState({isEnabledVideo:!this.state.isEnabledVideo})
        let obj ={
            isEnabledVideo:!this.state.isEnabledVideo
        }
        try {
            await AsyncStorage.setItem('video', JSON.stringify(obj));
        } catch (error) { 
            console.log(error)
            // Error saving data  
        } 
    }
    handleName = async (e)=>{ 
        this.setState({ Name:e})
        try {
            await AsyncStorage.setItem('name', JSON.stringify(e));
        } catch (error) {  
        } 
    }
    handleEmail= async (e)=>{
        this.setState({ Email:e})
        try {
            await AsyncStorage.setItem('Email', JSON.stringify(e));
        } catch (error) {  
            console.log(error)
        }
    }
    render() {
        return (
            <View style={{justifyContent:'center'}}>
                <View style={{marginHorizontal:8}}>
                    <Text style={styles.Heading}>Profile</Text>
                    <Text style={{padding:2,fontWeight:'bold',marginVertical:5}}>Display name</Text>
                    <View style={{}}>
                    <TextInput
                        label='Name'
                        placeholder='Name'
                        // placeholderTextColor="#fff" 
                        value={this.state.Name}
                        onChangeText={this.handleName }
                        style={styles.textInput}
                        /> 
                    </View>
                    <Text  style={{padding:2,fontWeight:'bold',marginVertical:5}}>Email</Text>
                    <View style={{}}>
                    <TextInput
                        label='Email'
                        placeholder='Email'
                        // placeholderTextColor="#fff" 
                        value={this.state.Email}
                        onChangeText={this.handleEmail}
                        style={styles.textInput}
                        /> 
                    </View>
                </View>
                <View>
                    <Text style={styles.Heading}>Conference</Text>
                    <View style={styles.toggel}>
                        <Text>Start with audio muted</Text>
                        <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.state.isEnabledAudio ? "#81b0ff" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={this.handleAudio}
                        value={this.state.isEnabledAudio}
                        />
                    </View>
                    <View style={styles.toggel}>
                        <Text >Start with Video muted</Text>
                        <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.state.isEnabledVideo ? "#81b0ff" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={this.handleVideo}
                        value={this.state.isEnabledVideo}
                    />
                    </View>
                </View>
                <View>
                    <Text style={styles.Heading}>Build Information</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,marginVertical:7}}>
                        <Text>Version</Text>
                        <Text style={{fontWeight:'bold'}}>0.1.0</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.Heading}>Advance</Text>
                    <View style={styles.toggel}>
                    <Text>Show Advance Setting</Text>
                        <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.state.isEnabledAdvance ? "#81b0ff" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={()=>{this.setState({isEnabledAdvance:!this.state.isEnabledAdvance})}}
                        value={this.state.isEnabledAdvance}
                        />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    Heading:{
        width:'100%',
        alignItems:'center',
        backgroundColor:'#E8E8E8',
        borderRadius:5,
        padding:5,
        marginHorizontal:5,
        fontWeight:'bold'
    },
    toggel:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginVertical:10
    },
    textInput: {
        height:40,
        borderWidth:2,
        borderColor:'#ccc',
        color:'black',
        borderRadius:5,marginHorizontal:2,
       },

  })