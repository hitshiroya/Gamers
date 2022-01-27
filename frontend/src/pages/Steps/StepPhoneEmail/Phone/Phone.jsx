import React,{useState} from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css'
import {sendOtp}  from '../../../../http/index'
import { useDispatch } from 'react-redux'
import {setOtp} from '../../../../store/authSlice'

const Phone = ({onNext}) => {
     const [phoneNumber,setPhoneNumber]=useState('');
     const dispatch=useDispatch();
     async function submit(){
         if(!phoneNumber)
         alert('Pls enter valid number');
        
        const {data}=await sendOtp({phone:phoneNumber});
        console.log(data);
        dispatch(setOtp({phone:data.phone,hash:data.hash}))
        onNext();
     }
    // 
    // async function submit(){
    //     const {data} = await sendOtp({phone:phoneNumber});
    //     console.log(data);
    //     //dispatch(setOtp({phone:data.phone,hash:data.hash}))
        
    //     //onNext();
    // }
    // function next(){

    // }
    
    return (
        <Card title="Enter Your Phone Number" icon="phone.png">
             <TextInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                
            />
            <div>
                <div className={styles.actionButtonwrap}>
                <Button  text="Next" onClick={submit}/>
                <p className={styles.bottomParagraph}>
                    By entering your number,you are agree to our terms and condtions thanks!
                </p>
                </div>
            </div>
            
            </Card>
    )
}

export default Phone
