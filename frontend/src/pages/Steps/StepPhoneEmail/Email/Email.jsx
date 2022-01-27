import React,{useState} from 'react'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css'
import Card from '../../../../components/shared/Card/Card'


const Email = ({onNext}) => {
    const [email,setemail]=useState('');
    return (
        <div>
            
            <Card title="Enter Your Email Adress" icon="email-emoji.png">
             <TextInput
                value={email}
                onChange={(e) => setemail(e.target.value)}
            />
            <div>
                <div className={styles.actionButtonwrap}>
                <Button  text="Next" onClick={onNext}/>
                <p className={styles.bottomParagraph}>
                    By entering your number,you are agree to our terms and condtions thanks!
                </p>
                </div>
            </div>
            
            </Card>
        </div>
    )
}

export default Email
