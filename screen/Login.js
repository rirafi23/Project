
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableHighlight,
    Button,
    TouchableOpacity,
    Alert,
    TextInput,
} from 'react-native';

class Agg extends React.Component {
    state = {
        kata: '',
        kata2: '',
        kata3: '',
        kata4: '',
    };
    render() {
        return (
            <View>
                <ImageBackground
                    source={require('./blyat.jpeg')}
                    style={(style.container, { width: '100%', height: '100%' })}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 120,
                        }}>
                        <Text style={{ color: '#000000', fontSize: 28 }}>
                            LOG IN
            </Text>
                    </View>
                    <View style={style.container2}>
                        <Text style={style.textformat}>EMAIL</Text>
                    </View>
                    <View style={{ borderRadius: 300, alignItems: 'center' }}>
                        <TextInput
                            style={style.boxformat}
                            value={this.state.kata}
                            placeholder="   Enter Email"
                            onChangeText={text => this.setState({ kata: text })}
                            placeholderTextColor="#000"
                        />
                        <Text style={(style.text, { width: 290 })}>{this.state.kata}</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        color: '#000',
                        width: 160,
                        height: 20,}}>
                        <Text style={style.textformat}>Password</Text>
                    </View>
                    <View style={{ borderRadius: 300, alignItems: 'center' }}>
                        <TextInput
                            style={style.boxformat}
                            value={this.state.kata2}
                            placeholder="   Enter Password"
                            onChangeText={text => this.setState({ kata2: text })}
                            placeholderTextColor="#000"
                        />
                        <Text style={(style.text, { width: 290 })}>{this.state.kata2}</Text>
                    </View>
                    <View style={style.container}>
                        <TouchableOpacity style={style.buttonContainer}>
                            <Text style={{ fontWeight: 'bold', color: '#fff' }}>LOG IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.buttonContainer}>
                            <Text style={{ fontWeight: 'bold', color: '#fff' }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default Agg;

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        alignItems: 'center',
        color: '#000',
        width: 130,
        height: 20,
    },
    textformat: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    boxformat: {
        backgroundColor: '#fff',
        width: 300,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    buttonContainer: {
        marginTop: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: 300,
        borderRadius: 100,
        backgroundColor: '#5E3182',
    },
});
