import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, H1, H3 } from 'native-base';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            uid: null
        };
    }

    componentDidMount() {

    }
    Login() {

        this.props.navigation.navigate("Home", { hi: "hello world" })
    }

    navigateToSignup() {
        // console.log("signup clicked")
        // this.props.navigation.navigate("Signup", { uid: e.user.uid })
        this.props.navigation.navigate("Signup", { hi: "hello world" })

    }
    render() {
        return (
            <Container>
                {/* <Header /> */}
                <Content style={{ margin: 20 }}>
                    <Form style={{ marginTop: 150, alignItems: 'center' }}>
                        <H1 style={{ fontSize: 30, fontWeight: "bold" }}>Login</H1>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel style={{ marginTop: 10 }}>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} />
                        </Item>
                        <Button full primary style={{ padding: 10, marginTop: 45 }} onPress={() => { this.Login() }}>
                            <Text> Login </Text>
                        </Button>
                        <Button full primary style={{ padding: 10, marginTop: 45 }} onPress={() => { this.Login() }}>
                            <Text> SignIn with facebook </Text>
                        </Button>
                        <Text style={{ padding: 15, fontSize: 18 }}> If you'r new signup from <H3 onPress={() => { this.navigateToSignup() }} style={{ color: "blue" }} >Here .</H3> </Text>
                        {/* <Button full light primary><Text> Sign Up </Text></Button> */}
                    </Form>
                </Content>
            </Container>
        );
    }
}