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
import UserSession from '../../libs/sessions.js';
import Loader from '../Generic/Loader';




const imageBackground = {
    uri: 'https://images.pexels.com/photos/2560898/pexels-photo-2560898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
};

class BadgeRegister extends React.Component{
    state = {
        loading: false,
        errors: [],
        user: undefined,
        isPasswordVisible: true,
        isPasswordConfirmationVisible: true,
        form: {},
    };

    handlePress = async () => {
        try{
            this.setState({loading:true, user:undefined})
            let response = await UserSession.instance.signup(this.state.form)
            if (typeof response === 'object'){
                let errors = []
                let cont = 0
                
                for(let error in response) {
                    let key = error
                    if(error === 'non_field_errors'){
                    error = 'password'
                    }
                    errors.push(
                    <View key={cont}>
                        <Text style={styles.warningText}>
                        {`${error} : ${response[key][0]}`}
                        </Text>
                    </View>
                    )
                    cont++
                }
                this.setState({loading:false, user:undefined, errors: errors, error:true})
            } else {
                this.setState({loading:false, error: false, user:response, errors:[]})
                }
        } catch (error) {
            console.log('Signup error', error)
            throw Error(error)
        }
        if(this.state.user){
            this.props.navigation.navigate('BadgeSignin')
        }
    };


    



    render(){
        const {loading, errors} = this.state;
        
        if (loading === true){
        return <Loader />;
        }
        return(
            <KeyboardAvoidingView
                style={styles.containerKey}>
                    <ImageBackground source={{uri: 'https://scontent.fcuu2-1.fna.fbcdn.net/v/t1.6435-9/131136767_175649497599774_3131271098921890892_n.jpg?_nc_cat=110&_nc_rgb565=1&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=YLFweBc0zGQAX9ZasQn&_nc_ht=scontent.fcuu2-1.fna&oh=d47aabea34b4ea5c88dd2b7df00378ac&oe=60E1BA68'}} style={styles.image}>
                    <View style={styles.errorContainer}>{errors}</View>
                        <View style={styles.layerColor}>

                            <ScrollView style={styles.container}>
                                    <View style={styles.content}>
                                        <Image style={styles.logo} source={{uri:'http://assets.stickpng.com/images/5ede4a3fb760540004f2c5e9.png'}}/>
                                        <View style={styles.form}>
                                            
                                            <Text style={styles.inputText}>Email</Text>
                                            <TextInput 
                                                style={styles.input} 
                                                placeholder={'Email'}
                                                onChangeText={text => {
                                                    this.setState(prevState => {
                                                        let form = Object.assign({}, prevState.form);
                                                        form.email = text;
                                                        return {form};
                                                    });
                                                }}/>
                                            <Text style={styles.inputText}>Username</Text>
                                            <TextInput 
                                                style={styles.input} 
                                                placeholder={'Username'}
                                                onChangeText={text => {
                                                    this.setState(prevState => {
                                                        let form = Object.assign({}, prevState.form);
                                                        form.username = text;
                                                        return {form};
                                                    });
                                                }}
                                                />
                                                <Text style={styles.inputText}>Password</Text>
                                            <TextInput 
                                                style={styles.input} 
                                                placeholder={'Password'}
                                                secureTextEntry={true}
                                                onChangeText={text => {
                                                    this.setState(prevState => {
                                                        let form = Object.assign({}, prevState.form);
                                                        form.password = text;
                                                        return {form};
                                                    });
                                                }}
                                                />
                                            <Text style={styles.inputText}>Confirm Password</Text>
                                            <TextInput 
                                                style={styles.input} 
                                                placeholder={'Confirm Password'}
                                                secureTextEntry={true}
                                                onChangeText={text => {
                                                    this.setState(prevState => {
                                                        let form = Object.assign({}, prevState.form);
                                                        form.password_confirmation = text;
                                                        return {form};
                                                    });
                                                }}
                                                />                                            
                                            <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                                                <Text style={styles.buttonText}>SignIn</Text>
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
    },
    errorContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FF353C90',
        borderRadius: 5,
    },

    
});
    export default BadgeRegister;