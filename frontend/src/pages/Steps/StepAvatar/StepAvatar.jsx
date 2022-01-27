import React,{useState,useEffect} from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import styles from './StepAvatar.module.css'
import {useSelector,useDispatch } from 'react-redux'
import {setAvatar} from '../../../store/activateSlice'
import {activate} from '../../../http/index'
import {setAuth} from '../../../store/authSlice'
import Loader from '../../../components/shared/loader/Loader'

const StepAvatar = ({onNext}) => {
    const dispatch=useDispatch();
    const {name,avatar}=useSelector((state)=>state.activate)
    const [image,setImage]=useState('/images/monkey-avatar.png')
    const [loading,setLoading]=useState(false);
    const [unMounted,setUnMounted]=useState(false);
    function captureImage(e){
        const file=e.target.files[0];
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=function(){
            setImage(reader.result);
            dispatch(setAvatar(reader.result));
        }

    }
    async function submit(){
        if(!name || !avatar)return;
        setLoading(true);
        try{
            const {data}=await activate({name,avatar})
            //console.log(data);

            if(data.auth){
                if(!unMounted){
                    dispatch(setAuth(data))
                }
            }

        }
        catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }

    }
    useEffect(() => {
        
        return () => {
            setUnMounted(true)
        }
    }, [])

    if(loading) return <Loader message="Activation in progress...!"/>
    return (
        <>
        <Card title={`Hlw, ${name}`} icon="lock-emoji.png">
            <p className={styles.subHeading}>
                ohh photo is looking good
            </p>
            <div className={styles.avatarWrapper}>
                    <img className="styles.avatarImage" src={image} alt="image"/>
            </div>

            <div>
                <input onChange={captureImage} id="avatarInput" type="file" className={styles.avatarInput} />
            </div>
            <label className={styles.avatarLabel} htmlFor="avatarInput">
                Choose custom image
            </label>


                <div>
                    <Button onClick={submit} text="Next" />
                </div>
            </Card>
        
        
        </>
    )
}

export default StepAvatar
