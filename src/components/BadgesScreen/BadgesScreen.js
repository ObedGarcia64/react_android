import React from 'react';
import {View, ActivityIndicator, StyleSheet, FlatList, Text} from 'react-native'
import BadgesItem from './BadgesItem';
import Colors from '../../res/Colors'
import Http from '../../libs/http'

class BadgesScreen extends React.Component {
    state = {
        loading: false,
        badges: [],
    };

    componentDidMount() {
        this.fetchdata();
    }

    fetchdata = async () => {
        this.setState({loading: true});
        let response = await Http.instance.get_all();
        response = response.reverse();
        this.setState({loading: false, badges: response});
    }

    render() {
        const {badges, loading} = this.state;
        
        return (
            <View style={[styles.container, styles.horizontal]}>
                {loading ? (
                    <ActivityIndicator
                        style={styles.loader}
                        color="#E3198F80"
                        size="large"
                    />
                )   : null}
                <FlatList 
                    style={styles.list} 
                    data={badges} 
                    renderItem={({item})=> <BadgesItem key={item._id} item={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.charade,
    },
    horizontal: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    loader:{
        height:'100%',
        paddingHorizontal: 10,
    },
    list:{
        width: '100%',
        paddingHorizontal: 10
    },
});

export default BadgesScreen;