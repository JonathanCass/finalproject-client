import React from 'react'
import { Link } from 'react-router-dom'

const styles ={
    header:{
        width: 1300,
         background: 'linear-gradient( to right, #00C9FF , #92FE9D )',
         border:' 2px solid black',
         borderRadius: 5
    },
    topBar:{
        width: 1300,
        height: 160,
        padding: 10,
        paddingTop: 20
    },
    imageBox:{
        width: 1280,
        height: 130,
        margin: 0,
        borderRadius: 10,
        border: ' solid 2px black'
    },
    loginBar:{
        float: 'right',
        marginRight: 20
    },
    bottomBar:{
        display: 'flex',
        height: 50,
        justifyContent: 'space-between',  
    },
    social:{
        height: 50,
        width: 180,
        fontSize: 48,
        display: 'flex',
        justifyContent:'space-between',
        marginLeft: 200,
        marginRight: 20,
    },
    facebook:{
        background: 'transparent',
        borderRadius: 7,
        color: '#3E5B99',
        width: 50,
        height: 50,
        paddingLeft: 15,
        paddingTop: 3
    },
    twitter:{
        background: 'transparent',
        borderRadius: 7,
        color: '#1DA1F2',
        width: 50,
        height: 50,
        paddingLeft: 3,
        paddingTop: 3
    },
    rss:{
        background: 'transparent',
        borderRadius: 7,
        color: '#F36F24',
        width: 50,
        height: 50,
        paddingLeft: 7,
        paddingTop: 3
    },
    link:{
        marginTop: 10,
        marginLeft: 10,
        width: 120,
        height: 30,
        color: 'white',
        fontSize: 20,
        paddingBottom: 10
    },
    login:{
        marginTop: 10,
        marginLeft: 10,
        width: 120,
        height: 30,
        borderRadius: 5,
        background: '#E50914',
        color: 'white',
        fontSize: 20
    },
    white:{
        color: 'white',
        textDecoration: 'none'
    },
    inputLogin:{
        marginTop: 10,
    },
    displayNone:{
        display: 'none'
    },
    input: {
        height: 30,
        width: 120,
        fontSize: 14,
        marginLeft: 10,
        borderRadius: 5,
        textIndent: 5
    }
}

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            login: '',loginShow: 0
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()   
    }
    handleClick = (e) => {
        e.preventDefault()
    }
    showLogin = (e) => {
        e.preventDefault()
        this.setState({
            loginShow: 1 
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div style={styles.header}>
                <div style={styles.logo} className="logoPic"></div>
                <div style={styles.topBar}>
                    <div style={styles.imageBox} className="headerImage">
                        <div style={styles.loginBar}>      
                                <button style={styles.login} onClick={this.handleClick}><Link style={styles.white} to={'/CreateUser/'}>Sign Up</Link></button>
                                <button style={styles.login} onClick={this.showLogin}> Login</button>  
                                {/*Button above Needs to Link to a Login Page */}
                                <div style={this.state.loginShow === 1 ? styles.inputLogin : styles.displayNone}>
                                    <input style={styles.input} type='text' name='login' placeholder='Username' /><input style={styles.input} type='password' name='password' placeholder='Password'/>
                                </div>
                        </div>
                    </div>
                </div>
                <div style={styles.bottomBar}>
                    <Link style={styles.link} to={'/'} >Home</Link>
                    {/*<Link style={styles.link} to={'/CreateUser/'} >Create User</Link>*/}
                    <Link style={styles.link} to={'/UserProfile/' + this.props.cuserid} >UserProfile</Link>  
                    <Link style={styles.link} to={'/UserHomePage/'} >UserHomePage</Link>
                    <Link style={styles.link} to={'/ParkView/'} >ParkView</Link>
                    <div style={styles.social}>
                        <a href="https://www.facebook.com/profile.php?id=100017026063125"><i style={styles.facebook} className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/GoActiveVegas?lang=en"> <i style={styles.twitter} className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="https://www.rss.com/" ><i style={styles.rss} className="fa fa-rss" aria-hidden="true"></i></a>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default Header