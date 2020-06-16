import React from 'react';
import JitsiMeet, { JitsiMeetView as RNJitsiMeetView } from 'react-native-jitsi-meet';


class JitsiMeetView extends React.Component {
	constructor(props){
		super(props);
		
	}

	componentDidMount() {
        setTimeout(() => {
				console.log('url',this.props.route.params)
				const url = `https://meet.jit.si/${this.props.route.params.id}`;
				console.log(url,'urlll')
				const userInfo = {
					displayName: this.props.route.params.name,
					email: 'user@example.com',
					avatar: 'https:/gravatar.com/avatar/abc123',
				};
				if(this.props.route.params.type){
					JitsiMeet.audioCall(url, userInfo);
					// 
				}else{
					JitsiMeet.call(url, userInfo);
				}
			

        /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
        /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
        }, 1000);
	}

	componentWillUnmount() {
		
		JitsiMeet.endCall();
	}

	// Jitsi Update Timeout needs to be called every 10 seconds to make sure
	// call is not ended and is available to web users.
	onConferenceJoined = () => {
	
	}

	onConferenceTerminated = () => {
		this.props.navigation.navigate('Home')
	}

	render() {
		return (
			<RNJitsiMeetView
				onConferenceTerminated={this.onConferenceTerminated}
				onConferenceJoined={this.onConferenceJoined}
				style={{
                        flex: 1,
                        height: '100%',
                        width: '100%',
                      }}
			/>
		);
	}
}


export default JitsiMeetView;




// import React ,{ useEffect }from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import JitsiMeet, { JitsiMeetView ,RNJitsiMeetView  } from 'react-native-jitsi-meet';

// function JitsiMeetView ( ) {
//     useEffect(() => {
//         const MeetingId = 'demo'
//         setTimeout(() => {
//           const url = `https://meet.jit.si/${MeetingId}`;
//           const userInfo = {
//             displayName: 'User',
//             email: 'user@example.com',
//             avatar: 'https:/gravatar.com/avatar/abc123',
//           };
//           JitsiMeet.call(url, userInfo);
//           /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
//           /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
//         }, 1000);
//       }, [])
    
//       useEffect(() => {
//         return () => {
//           JitsiMeet.endCall();
//         //   removeView()
//         };
//       });
    
//       function onConferenceTerminated(nativeEvent) {
//         /* Conference terminated event */
//         console.log(nativeEvent)
//         this.props.navigation.navigate('Main')
//       }
    
//       function onConferenceJoined(nativeEvent) {
//         /* Conference joined event */
//         console.log(nativeEvent)
//       }
    
//       function onConferenceWillJoin(nativeEvent) {
//         /* Conference will join event */
//         console.log(nativeEvent)
//       }

//       return (
//         <RNJitsiMeetView
//           onConferenceTerminated={e => onConferenceTerminated(e)}
//           onConferenceJoined={e => onConferenceJoined(e)}
//           onConferenceWillJoin={e => onConferenceWillJoin(e)}
//           style={{
//             flex: 1,
//             height: '100%',
//             width: '100%',
//           }}
//         />
//       )
// }

// export default JitsiMeetView

// const styles = StyleSheet.create({})
