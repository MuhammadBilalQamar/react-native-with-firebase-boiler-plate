const RootNavLogged = StackNavigator({
    ...
 },{
     initialRouteName : 'Home'
 });
 
 const RootNav = StackNavigator({
    ...
 },{
     initialRouteName : 'Login'
 });
 
 class App extends Component {
     render(){
         if (this.props.userLogged == true ){
             return (
                 <RootNavLogged/>
             ) 
         } else {
             return(
                 <RootNav/>
             ) 
         }
     }
 }
 
 export default connect(mapStateToProps)(App)
 