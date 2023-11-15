
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
// import { TextInput, Button } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';





// const LoginScreen = ({ navigation }) => {
//     // State variables to store user input
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordVisible, setPasswordVisible] = useState(true);
//     const [showSignupForm, setShowSignupForm] = useState(true);
//     const [activeButton, setActiveButton] = useState('login');




//     // Function to handle login button press
//     const handleLogin = async () => {
//     // Implement your authentication logic here
//     // For example, you can use Firebase, AsyncStorage, or make API calls

//     // Check if the user exists in local storage
//     const storedUsers = await AsyncStorage.getItem('registeredUsers');
//     const users = storedUsers ? JSON.parse(storedUsers) : [];

//     const userExists = users.some(user => user.email === email && user.password === password);

//     if (userExists) {
//         // If authentication is successful, navigate to the home screen
//         navigation.replace('Home'); // Replace with the actual name of your home screen
//     } else {
//         // Handle unsuccessful login (e.g., show an error message)
//     }
// };

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     const handleSignup = async () => {
//         const newUser = { email, password };

//         // Get existing users from local storage
//         const storedUsers = await AsyncStorage.getItem('registeredUsers');
//         const users = storedUsers ? JSON.parse(storedUsers) : [];

//         // Check if the user with the same email already exists
//         const userExists = users.some(user => user.email === newUser.email);

//         if (!userExists) {
//             // If the user doesn't exist, add the new user to the array
//             users.push(newUser);

//             // Store the updated array in local storage
//             await AsyncStorage.setItem('registeredUsers', JSON.stringify(users));

//             // Navigate to the home screen or dashboard upon successful registration
//             navigation.replace('Home'); // Replace with the actual name of your home screen
//         } else {
//             // Handle the case where the user already exists (e.g., show an error message)
//         }
//         setShowSignupForm(false);
//         setActiveButton('register');

//     };

//     const handleBack = () => {
//         setShowSignupForm(true);
//         setActiveButton('login');

//     };

import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Image,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Success from './Success';
import Home from './Home';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [showSignupForm, setShowSignupForm] = useState(true); // Set it to false initially
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
            // Handle unsuccessful login
            console.log('Invalid credentials. Please try again.');
            // Optionally, set a state variable to show an error message in your UI
            // setErrorMsg('Invalid credentials. Please try again.');
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
            // Handle the case where the user already exists
            // Optionally, you can show an error message or take other actions
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


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
// import { TextInput, Button } from 'react-native-paper';
// import RegisterScreen from './RegisterScreen'; // Import your RegisterScreen component
// import Header from './Header';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(true);
//   const [isRegister, setIsRegister] = useState(false); // New state to track whether to show the Register screen

//   const handleLogin = () => {
//     // Implement your authentication logic here
//     // If authentication is successful, navigate to the home screen
//     navigation.replace('Home'); // Replace with the actual name of your home screen
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleToggleScreen = () => {
//     navigation.navigate('Register'); // Navigate to the 'Register' screen
//   };


//   return (
//     <ImageBackground
//       source={require('../assets/loginbg.png')}
//       style={styles.WalkthrouhBG}
//     >
//       <View style={styles.maincont}>
//         <View style={styles.head}>
//           <TouchableOpacity style={styles.btnlogin} onPress={handleToggleScreen}>
//             <Text style={styles.logintext}>
//               Login
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.btnlogin} onPress={() => navigation.navigate('Register')} >
//             <Text style={styles.reg}>
//               Register
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{ display: "flex", gap: 40 }} >
//           <Text style={styles.loginone}>
//             {isRegister ? 'Register' : 'Login'}
//           </Text>
//           {isRegister ? (
//             <View>
//                 Hello
//             </View>
//           ) : (
//             <View style={{ display: "flex", gap: 28 }}>
//               <View style={{ display: "flex", gap: 28 }}>
//                         <View>
//                             <Text style={styles.email}>Email</Text>

//                             <TextInput mode='flat' style={styles.input} label="Email Address" value={email} onChangeText={(text) => setEmail(text)} />
//                         </View>
//                         <View>
//                             <Text style={styles.email}>Password</Text>
//                             <TextInput
//                                 mode='flat'
//                                 style={styles.input}
//                                 label="Password"
//                                 value={password}
//                                 secureTextEntry={!passwordVisible}
//                                 onChangeText={(text) => setPassword(text)}
//                             />
//                             <TouchableOpacity onPress={togglePasswordVisibility}>
//                                 {passwordVisible ? (
//                                     <Image source={require('../assets/eye-on.png')} style={styles.icon} />
//                                 ) : (
//                                     <Image source={require('../assets/eye-slash.png')} style={styles.icon} />
//                                 )}
//                             </TouchableOpacity>
//                             <TouchableOpacity>
//                                 <Text style={styles.forgetpass}>Forgot password?</Text>
//                             </TouchableOpacity>
//                         </View>

//                     </View>
//                     <View style={{ display: "flex", gap: 20, alignItems: "center" }} >
//                         <Button mode='contained' title="Login" onPress={handleLogin} style={styles.loginbtn} >
//                             Login
//                         </Button>
//                         <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
//                             <Image source={require('../assets/Line-one.png')} />
//                             <Text style={styles.orlogin}>Or login with</Text>
//                             <Image source={require('../assets/Line-one.png')} />
//                         </View>
//                         <View>
//                             <TouchableOpacity style={styles.googlebtn}>
//                                 <Image source={require('../assets/google-icon.png')} />
//                                 <Text style={styles.googletxt}>Google</Text>

//                             </TouchableOpacity>
//                         </View>
//                     </View>
//             </View>
//           )}
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     head: {
//         height: 43.243446350097656,
//         borderRadius: 11.280899047851562,
//         backgroundColor: "#181F30",
//         textAlign: "center",
//         padding: 4,
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between"
//     },
//     maincont: {
//         marginHorizontal: 16,
//         marginTop: 30,
//         display: "flex",
//         gap: 53.52

//     },
//     googlebtn: {
//         width: 162.63296508789062,
//         height: 50.76404571533203,
//         backgroundColor: "white",
//         borderRadius: 15,
//         display:"flex",
//         flexDirection:"row",
//         alignItems:"center",
//         justifyContent:"center",
//         gap:10
//     },
//     googletxt: {
//         fontFamily: 'SF-Pro-Text-Regular',
//         fontSize: 16.921348571777344,
//         fontWeight: "400",
//         fontStyle: "normal",
//         lineHeight: 16.921348571777344,
//         letterSpacing: 2.640000104904175,
//         textAlign: "center",
//         color: "#1B232A"
//     },
//     orlogin: {
//         height: 16,
//         fontFamily: 'SF-Pro-Text-Regular',
//         fontSize: 13.161048889160156,
//         fontWeight: "400",
//         fontStyle: "normal",
//         lineHeight: 13.161048889160156,
//         letterSpacing: 2.640000104904175,
//         textAlign: "center",
//         color: "#777777"
//     },
//     icon: {
//         width: 20,
//         height: 20,
//         position: "absolute",
//         right: 10,
//         top: -25



//     },
//     loginbtn: {
//         width:"100%",
//         borderRadius: 15.04119873046875,
//         backgroundColor: "#3249FF",
//         shadowColor: "rgba(94, 213, 168, 0.16)",
//         fontFamily: 'SF-Pro-Text-Regular',
//         fontSize: 16.921348571777344,
//         fontWeight: "400",
//         fontStyle: "normal",
//         lineHeight: 16.921348571777344,
//         letterSpacing: 2.640000104904175,
//         textAlign: "center",
//         color: "#FFFFFF",
//         shadowOffset: {
//             width: 0,
//             height: 11.280899047851562
//         },
//         shadowRadius: 28.202247619628906,
//         shadowOpacity: 1
//     },
//     forgetpass: {
//         fontFamily: 'SF-Pro-Text-Regular',
//         fontSize: 13.161048889160156,
//         fontWeight: "400",
//         fontStyle: "normal",
//         lineHeight: 13.161048889160156,
//         letterSpacing: 2.640000104904175,
//         color: "#304BFF",
//         marginTop: 7.5

//     },
//     red: {
//         fontFamily: 'SF-Pro-Text-Regular',
//         fontSize: 13.161048889160156,
//         fontWeight: "400",
//         fontStyle: "normal",
//         lineHeight: 13.161048889160156,
//         textAlign: "center",
//         color: "#777777"
//     },
//     email: {
//         fontSize: 13.161048889160156,
//         fontStyle: "normal",
//         lineHeight: 13.161048889160156,
//         letterSpacing: 2.640000104904175,
//         color: "#A7AFB7",
//         fontFamily: 'SF-Pro-Text-Regular',

//     },
//     input: {
//         width: "100%",
//         height: 50,
//         borderRadius: 11,
//         backgroundColor: "#0A0D14",
//         marginTop: 12,


//     },
//     btnlogin: {
//         width: 168.27340698242188,
//         height: 35.72284698486328,
//         borderRadius: 11.280899047851562,
//         backgroundColor: "#111622",
//         display: "flex",
//         justifyContent: 'center',
//         alignItems: 'center',

//     },
//     logintext: {
//         fontFamily: 'SF-Pro-Text-Regular',
//         fontSize: 13.161048889160156,
//         fontWeight: "400",
//         fontStyle: "normal",
//         lineHeight: 13.161048889160156,
//         textAlign: "center",
//         color: "#C1C7CD",
//         textAlignVertical: "center"

//     },
//     loginone: {
//         fontSize: 30.0823974609375,
//         fontStyle: "normal",
//         lineHeight: 43.243446350097656,
//         letterSpacing: 2.640000104904175,
//         color: "#FFFFFF",
//         fontFamily: "SF-Pro-Text-Bold"

//     },
//     WalkthrouhBG: {
//         height: '100%',
//         width: '100%',
//         resizeMode: 'cover',
//     },
//     heading: {
//         fontSize: 24,
//         marginBottom: 20,
//     },

//     loginButton: {
//         backgroundColor: 'blue',
//         padding: 10,
//         borderRadius: 5,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         textAlign: 'center',
//     },
// });

// export default LoginScreen;

