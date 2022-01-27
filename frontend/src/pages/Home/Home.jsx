import React from 'react'
import styles from './Home.module.css'
import {Link,useHistory} from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'
const Home = () => {
    const signInLinkStyle={
            color:'#0077ff',
            fontWeight:'bold',
            textDecoration:'none',
            marginLeft:'10px'       
    }
    const history=useHistory();
    function startRegister(){
            history.push('/authenticate')
            //console.log("Button Clicked....!")
    }
    return (
        <div className={styles.cardwraper}>
            <Card title="Wlcm to real-time-Voice App:)" icon="logo.png">
            <p className={styles.text}>
                Lorem ipsum dolor si amet consectetur adipisicing elit. Quas, assumenda soluta fuga suscipit, distinctio doloremque error sequi omnis ipsa maiores, labore libero nisi. Laudantium saepe, enim quia fugit ex laborum!
            </p>
            <div>
                <Button onClick={startRegister} text="Let's Go"/>
            </div>
            <div className={styles.signinwraper}>
                <span className={styles.hasInvite}>Have an Invited Code?!!</span>
                {/* <Link style={signInLinkStyle} to="/login">Sign in</Link> */}
            </div>
            </Card>
            {/* <div className={styles.card}>
            <div className={styles.headingWraper}>
                <img src="./images/logo.png"></img>
                <h1 className={styles.heading}>Wlcm to real-time-chat App</h1>
            </div>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, assumenda soluta fuga suscipit, distinctio doloremque error sequi omnis ipsa maiores, labore libero nisi. Laudantium saepe, enim quia fugit ex laborum!
            </p>
            <div>
                <button>
                    <span>Get Your username</span>
                    <img src="./images/arrow-forward.png" alt="arrow"></img>
                </button>
            </div>
            <div>
                <span>Have an Invited Code?!!</span>
                <Link to="/login">Sign in</Link>
            </div>
    </div> */}
        </div>
    )
}

export default Home
