import React, { Component } from 'react';
import { Container, Header, Content, Form, Picker, Item, Input, Label, Button, Text, H1, H3, Image, Icon } from 'native-base';
import { db } from '../config/Firebase';
import { auth } from '../config/Firebase';

// import { ImagePicker, Location, Permissions, Constants } from "expo";


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pass: '',
            repeatPass: '',
            image: '',
            date: '',
            time: '',
            selected2: "Karachi",
            uid: null
        };
    }

    componentDidMount() {
        // console.log( this.props.navigation.state.params.hi)
        this.getDateAndTime()

    }

    getDateAndTime() {
        var d = new Date();
        var today = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
        var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        this.setState({ date: today, time })
        // console.log(today)
    }
    navigateToLogin() {
        this.props.navigation.navigate("Login", { hi: "hello world" })
    }

    // _pickImage = async () => {
    //     let result = await expo.ImagePicker.launchImageLibraryAsync({
    //         allowsEditing: true,
    //         aspect: [4, 3]
    //     });
    //     // console.log(result);
    //     if (!result.cancelled) {
    //         this.setState({ image: result.uri });
    //     }
    // };

    onValueChange2(value) {
        console.log(value)
        this.setState({
            selected2: value
        });
    }
    Signup() {
        console.log(this.state);
        //  this.props.navigation.navigate("Home")
        // const { name, email, phone, image, location, pass, repeatPass } = this.state;
        const { name, image, email, pass, repeatPass, date, time } = this.state;
        if (name != "" && email != "" && pass != '' && repeatPass != '') {
            if (pass === repeatPass) {

                auth.createUserWithEmailAndPassword(email, pass).then((e) => {
                    // console.log("user uid******", e.user.uid);
                    db.ref("Users/" + e.user.uid + "/").set({
                        name,
                        email,
                        pass,
                        date,
                        time
                    }).then(() => {
                        alert("Conguratulations You Have Been Successfully Registered");
                        this.setState({
                            uid: e.user.uid
                        });
                        this.props.navigation.navigate("Login")
                    })
                }).catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // console.log(errorMessage);
                    alert(errorMessage);
                });
            }
            else {
                alert("Your Password Must Be Same");
            }

        }
        else {
            alert("Please fill all the fields");
        }

    }

    render() {
        return (
            <Container>
                {/* <Header /> */}
                <Content style={{ margin: 15 }}>
                    <Form style={{ marginTop: 80, alignItems: 'center' }}>
                        <H1 style={{ fontSize: 30, fontWeight: "bold" }}>Sign Up</H1>
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input onChangeText={(text) => this.setState({ name: text })}
                                value={this.state.name} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input onChangeText={(text) => this.setState({ email: text })}
                                value={this.state.email} />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 10 }}>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} onChangeText={(text) => this.setState({ pass: text })}
                                value={this.state.pass} />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 10 }}>
                            <Label>Repeat Password</Label>
                            <Input secureTextEntry={true} onChangeText={(text) => this.setState({ repeatPass: text })}
                                value={this.state.repeatPass} />
                        </Item>

                        {/* IMAGE WORK */}
                        {/* <Button full primary style={{ padding: 10, marginTop: 45 }} onPress={() => this._pickImage()}>
                            <Text>Pick an image</Text>
                        </Button>
                        {this.state.image &&
                            <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200, padding: 20 }} />
                        } */}

                        {/* PICKER WORK */}
                        <Item picker style={{ marginTop: 15, marginLeft: 5 }}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={(text) => this.onValueChange2(text)}
                            >
                                <Picker.Item label="Karachi" value="Karachi" />
                                <Picker.Item label="Lahore" value="Lahore" />
                                <Picker.Item label="Islamabad" value="Islamabad" />
                            </Picker>
                        </Item>
                        <Button full primary style={{ padding: 10, marginTop: 45 }} onPress={() => this.Signup()}>
                            <Text> Sign Up </Text>
                        </Button>
                        <Text style={{ padding: 15, fontSize: 18 }}> If you already have an account: <H3 onPress={() => { this.navigateToLogin() }} style={{ color: "blue" }} >Login</H3> </Text>
                        {/* <Button full light primary><Text> Sign Up </Text></Button> */}
                    </Form>
                </Content>
            </Container>
        );
    }
}