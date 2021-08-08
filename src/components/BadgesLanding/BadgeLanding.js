import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Colors from '../../res/Colors'

const imageBackground = {
    uri: 'https://scontent.fcuu2-1.fna.fbcdn.net/v/t1.6435-9/131136767_175649497599774_3131271098921890892_n.jpg?_nc_cat=110&_nc_rgb565=1&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=YLFweBc0zGQAX9ZasQn&_nc_ht=scontent.fcuu2-1.fna&oh=d47aabea34b4ea5c88dd2b7df00378ac&oe=60E1BA68'
};

class BadgeLanding extends React.Component{
//Here we can go to the BadgesSignIn Screen
    handlePress = () =>{
        this.props.navigation.replace('BadgeSignin');
    };
//Here we can go to the BadgesRegister screen
    handlePresss = () =>{
        this.props.navigation.replace('BadgeRegister');
    };

    render(){
        return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <ImageBackground source={imageBackground} style={styles.image}>
                <View style={styles.layerColor}>
                    <Text style={styles.title}>
                        Welcome {'\n'} to my {'\n'} App
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                        <Text style={styles.buttonText}>LogIn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.handlePresss}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    layerColor:{
        flex:2,
        backgroundColor:'#E3198F80',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
    },
    title: {
        margin: 30,
        fontSize: 80,
        fontWeight: 'bold',
        color: Colors.white,
    },
    button:{
        padding:15,
        marginTop: 50,
        borderRadius: 15,
        backgroundColor: '#121212cc',
        borderColor: Colors.white,
        borderWidth: 1,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight:'bold',
        paddingHorizontal: 25,
        color: Colors.white,
    }
});

export default BadgeLanding;