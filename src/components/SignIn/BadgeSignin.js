import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Pressable,
    Linking
} from 'react-native';

import Colors from '../../res/Colors';




const imageBackground = {
    uri: 'https://scontent.fcuu2-1.fna.fbcdn.net/v/t1.6435-9/131136767_175649497599774_3131271098921890892_n.jpg?_nc_cat=110&_nc_rgb565=1&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=YLFweBc0zGQAX9ZasQn&_nc_ht=scontent.fcuu2-1.fna&oh=d47aabea34b4ea5c88dd2b7df00378ac&oe=60E1BA68'
};

class BadgeSignin extends React.Component{


    handlePress = () => {
        this.props.navigation.navigate('BadgesTabNavigator');
    };



    render(){
        return(
            <KeyboardAvoidingView
                style={styles.containerKey}>
                    <ImageBackground source={imageBackground} style={styles.image}>
                        <View style={styles.layerColor}>

                            <ScrollView style={styles.container}>
                                    <View style={styles.content}>
                                        <Image style={styles.logo} source={{uri:'http://assets.stickpng.com/images/5ede4a3fb760540004f2c5e9.png'}}/>
                                        <View style={styles.form}>
                                            
                                            <Text style={styles.inputText}>Username</Text>
                                            <TextInput 
                                                style={styles.input} 
                                                placeholder={'Username'}/>

                                            <Text style={styles.inputText}>Password</Text>
                                            <TextInput 
                                                style={styles.input} 
                                                placeholder={'Password'}
                                                secureTextEntry={true}/>                                          
                                            <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                                                <Text style={styles.buttonText}>LogIn</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                            </ScrollView>
                        </View>

                    </ImageBackground>
            </KeyboardAvoidingView>
        );
  }
}

const styles = StyleSheet.create({

    containerKey:{
        flex: 1
    },

    container: {
        flex: 1,
        color: Colors.blue,
       

    },

    image:{
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        justifyContent: 'center',

    },

    content:{
        flex:1,
        margin: 20,
        width:'90%',
        height: '90%',
        marginTop: 50,
        backgroundColor: '#FFFFFF99',
        borderRadius: 25,
        alignItems: 'center'

    },
    
    form:{
        alignItems: 'center',
        position: 'relative'

    },

    layerColor:{
        flex:1,
        backgroundColor:'#9F3BA899',
    },

    logo: {
        width: 100,
        height: 100,
        marginTop: 15,
    },

    inputText:{
        fontSize:18,
        marginTop: 10,
        marginBottom:5,
        marginLeft:10,
        fontWeight: 'bold',
        color: Colors.white,
    },

    input:{
        paddingVertical:5,
        paddingHorizontal:10,
        borderWidth:1,
        borderRadius:10,
        borderColor:Colors.white,
        width:250,
    },

    button:{
        padding:15,
        marginTop: 50,
        borderRadius: 15,
        backgroundColor: Colors.green,
        borderColor: Colors.white,
        borderWidth: 1,
        width: 150,
        bottom: 20,

    },

    buttonText:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight:'bold',
        paddingHorizontal: 25,
        color: Colors.white,
    },

    Text: {
        marginTop: 10,
        textAlign: 'center',
        color: Colors.white,
    },
    facebookIcon:{
        marginTop: 20,
        marginBottom: 25,
        height:50,
        width:50,
        resizeMode: 'cover',
        alignItems: 'flex-end'
    }

    
});
    export default BadgeSignin;