
import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Image,
    Alert,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Success from './Success';
import Home from './Home';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(true); 
    const [activeButton, setActiveButton] = useState('login');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [redirectToDashboard, setRedirectToDashboard] = useState(false);
    const [userlogin, setuserlogin] = useState(false)


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const handleLogin = async () => {
        const storedUsers = await AsyncStorage.getItem('registeredUsers');
        const users = storedUsers ? JSON.parse(storedUsers) : [];

        const userExists = users.some(
            (user) => user.email === email && user.password === password
        );

        if (userExists) {
            navigation.replace('Home');
            setuserlogin(true);
        } else {
            Alert.alert("Invalid credentials", "Please try again.");
            console.log('Invalid credentials. Please try again.');
        }
    };





    const handleSignup = async () => {
        const newUser = { email, password };

        const storedUsers = await AsyncStorage.getItem('registeredUsers');
        const users = storedUsers ? JSON.parse(storedUsers) : [];

        const userExists = users.some((user) => user.email === newUser.email);

        if (!userExists) {
            users.push(newUser);
            await AsyncStorage.setItem('registeredUsers', JSON.stringify(users));
            setRegistrationSuccess(true);
            setTimeout(() => {
                setRedirectToDashboard(true);
            }, 2000);
        } else {
            console.log('User already exists');
        }

        setShowSignupForm(false);
        setActiveButton('register');
    };

    console.log({ showSignupForm })
    const handleBack = () => {
        setShowSignupForm(true);
        setActiveButton('login');
    };
    if (userlogin) {
        return <Home />;
    }

    if (registrationSuccess) {
        if (redirectToDashboard) {
            return <Home />;
        }
        return <Success />;
    }


    return (
        <ImageBackground
            source={require('../assets/loginbg.png')}
            style={styles.WalkthrouhBG}
        >

            <View style={styles.maincont}>
                {/* Mian Head */}
                <View style={styles.head}>
                    {/* Login button */}
                    <TouchableOpacity
                        style={[
                            styles.btnlogin,
                            { backgroundColor: activeButton === 'login' ? '#111622' : '#181F30' },
                        ]}
                        onPress={handleBack}
                    >
                        <Text style={[styles.logintext, { color: activeButton === 'login' ? '#C1C7CD' : '#777777' }]}>Login</Text>
                    </TouchableOpacity>

                    {/* Register button */}
                    <TouchableOpacity
                        style={[
                            styles.btnlogin,
                            { backgroundColor: activeButton === 'register' ? '#111622' : '#181F30' },
                        ]}
                        onPress={handleSignup}
                    >
                        <Text style={[styles.reg, { color: activeButton === 'register' ? '#C1C7CD' : '#777777' }]}>Register</Text>
                    </TouchableOpacity>
                </View>

                {showSignupForm ? (
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
                )
                    : (
                        <View style={{ display: "flex", gap: 40 }} >
                            <Text style={styles.loginone}>
                                Register
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

                                </View>

                            </View>
                            <View style={{ display: "flex", gap: 20, alignItems: "center" }} >
                                <Button mode='contained' title="Signup" onPress={handleSignup} style={styles.loginbtn} >
                                    Register
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
                    )}


            </View>

        </ImageBackground>
    );
};


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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
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
        width: "100%",
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


