import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
	//destructure styles properties
	const {inputStyle, labelStyle, containerStyle } = styles;

return (
<View style={containerStyle}>
<Text style={labelStyle}>{props.label}</Text>
<TextInput
placeholder={props.placeholder}
autoCorrect={false} //disable text correct popup
secureTextEntry={props.secureTextEntry} //hide password text entry
style={inputStyle}
value={props.value}
onChangeText={props.onChangeText} />
</View>
	)
}

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight:5,
		paddingLeft:5,
		fontSize:18,
		lineHeight:23,
		flex:2
	},
	labelStyle: {
		fontSize:18,
		paddingLeft: 20,
		flex:1
	},
	containerStyle: {
		height:40,
		flex:1,
		flexDirection:'row',
		alignItems:'center'
	}
}

export { Input };
