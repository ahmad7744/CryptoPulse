// Import necessary modules from React and React Native
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const LoginScreen = ({ navigation }) => {
    // State variables to store user input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);


    // Function to handle login button press
    const handleLogin = () => {
        // Implement your authentication logic here
        // For example, you can use Firebase, AsyncStorage, or make API calls
        // If authentication is successful, navigate to the home screen
        navigation.replace('Home'); // Replace with the actual name of your home screen
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <ImageBackground
            source={require('../assets/loginbg.png')}
            style={styles.WalkthrouhBG}
        >
            <View style={styles.maincont}>
                <View style={styles.head}>
                    <View style={styles.btnlogin} >
                        <Text style={styles.logintext} >
                            Login
                        </Text>
                    </View>
                    <View style={styles.btnlogin} >
                        <Text style={styles.reg} >
                            Register
                        </Text>
                    </View>
                </View>
                <View style={{ display: "flex", gap: 40 }} >
                    <Text style={styles.loginone}>
                        Login
                    </Text>
                    <View style={{ display: "flex", gap: 28 }}>
                        <View>
                            <Text style={styles.email}>Email</Text>

                            <TextInput mode='flat' style={styles.input} label="Email Address" value={email} onChangeText={(text) => setEmail(text)} />
                        </View>
                        <View>
                            <Text style={styles.email}>Password</Text>
                            <TextInput
                                mode='flat'
                                style={styles.input}
                                label="Password"
                                value={password}
                                secureTextEntry={!passwordVisible}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility}>
                                {passwordVisible ? (
                                    <Image source={require('../assets/eye-on.png')} style={styles.icon} />
                                ) : (
                                    <Image source={require('../assets/eye-slash.png')} style={styles.icon} />
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.forgetpass}>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ display: "flex", gap: 20, alignItems: "center" }} >
                        <Button mode='contained' title="Login" onPress={handleLogin} style={styles.loginbtn} >
                            Login
                        </Button>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Image source={require('../assets/Line-one.png')} />
                            <Text style={styles.orlogin}>Or login with</Text>
                            <Image source={require('../assets/Line-one.png')} />
                        </View>
                        <View>
                            <TouchableOpacity style={styles.googlebtn}>
                                <Image source={require('../assets/google-icon.png')} />
                                <Text style={styles.googletxt}>Google</Text>

                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </View>
        </ImageBackground>
    );
};

// Styles for the Login component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    head: {
        height: 43.243446350097656,
        borderRadius: 11.280899047851562,
        backgroundColor: "#181F30",
        textAlign: "center",
        padding: 4,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    maincont: {
        marginHorizontal: 16,
        marginTop: 30,
        display: "flex",
        gap: 53.52

    },
    googlebtn: {
        width: 162.63296508789062,
        height: 50.76404571533203,
        backgroundColor: "white",
        borderRadius: 15,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:10
    },
    googletxt: {
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 16.921348571777344,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 16.921348571777344,
        letterSpacing: 2.640000104904175,
        textAlign: "center",
        color: "#1B232A"
    },
    orlogin: {
        height: 16,
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 13.161048889160156,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 13.161048889160156,
        letterSpacing: 2.640000104904175,
        textAlign: "center",
        color: "#777777"
    },
    icon: {
        width: 20,
        height: 20,
        position: "absolute",
        right: 10,
        top: -25



    },
    loginbtn: {
        width:"100%",
        borderRadius: 15.04119873046875,
        backgroundColor: "#3249FF",
        shadowColor: "rgba(94, 213, 168, 0.16)",
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 16.921348571777344,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 16.921348571777344,
        letterSpacing: 2.640000104904175,
        textAlign: "center",
        color: "#FFFFFF",
        shadowOffset: {
            width: 0,
            height: 11.280899047851562
        },
        shadowRadius: 28.202247619628906,
        shadowOpacity: 1
    },
    forgetpass: {
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 13.161048889160156,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 13.161048889160156,
        letterSpacing: 2.640000104904175,
        color: "#304BFF",
        marginTop: 7.5

    },
    red: {
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 13.161048889160156,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 13.161048889160156,
        textAlign: "center",
        color: "#777777"
    },
    email: {
        fontSize: 13.161048889160156,
        fontStyle: "normal",
        lineHeight: 13.161048889160156,
        letterSpacing: 2.640000104904175,
        color: "#A7AFB7",
        fontFamily: 'SF-Pro-Text-Regular',

    },
    input: {
        width: "100%",
        height: 50,
        borderRadius: 11,
        backgroundColor: "#0A0D14",
        marginTop: 12,


    },
    btnlogin: {
        width: 168.27340698242188,
        height: 35.72284698486328,
        borderRadius: 11.280899047851562,
        backgroundColor: "#111622",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',

    },
    logintext: {
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 13.161048889160156,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 13.161048889160156,
        textAlign: "center",
        color: "#C1C7CD",
        textAlignVertical: "center"

    },
    loginone: {
        fontSize: 30.0823974609375,
        fontStyle: "normal",
        lineHeight: 43.243446350097656,
        letterSpacing: 2.640000104904175,
        color: "#FFFFFF",
        fontFamily: "SF-Pro-Text-Bold"

    },
    WalkthrouhBG: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },

    loginButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default LoginScreen;
