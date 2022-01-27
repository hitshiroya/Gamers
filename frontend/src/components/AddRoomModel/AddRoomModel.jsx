import React,{useState} from 'react'
import styles from './AddRoomModel.module.css';
import TextInput from '../shared/TextInput/TextInput'
import { createRoom as create } from '../../http';
const AddRoomModel = ({onClose}) => {
        const [roomType,setRoomType]=useState('open');
        const [topic,SetTopic]=useState('');

        async function createRoom(){
            //server call
            if(!topic)return;
            try{
                const {data}=await create({topic,roomType});
                console.log(data);
            }
            catch(err){
                console.log(err.message);
            }
        }

    return (
        <div className={styles.modelMask}>
            <div className={styles.modelBody}>
                <button onClick={onClose} className={styles.closeButton}>
                    <img src="/images/close.png" alt="close"/>
                </button>
                <div className={styles.modelHeader}>
                    <h3 className={styles.heading}>Enter the topic to be discussed</h3>
                    <TextInput fullWidth="true" value={topic} onChange={(e)=>SetTopic(e.target.value)} />
                    <h2 className={styles.subHeading}>Room Types</h2>
                    <div className={styles.roomTypes}>
                        <div onClick={()=>setRoomType('open')}  
                        className={`${styles.typeBox} ${roomType==='open'? styles.active: ''}`}>
                            <img src="/images/globe.png" alt="globe"  />
                            <span>OPen</span>
                        </div>
                        <div onClick={()=>setRoomType('social')} 
                        className={`${styles.typeBox} ${roomType==='social'? styles.active: ''}`}>
                            <img src="/images/social.png" alt="globe"  />
                            <span>Social</span>
                        </div>
                        <div onClick={()=>setRoomType('private')} 
                        className={`${styles.typeBox} ${roomType==='private'? styles.active: ''}`}>
                            <img src="/images/lock.png" alt="globe"  />
                            <span>Private</span>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.modelFooter}><h2>Start a room,open to Everyone</h2>
                <button className={styles.footerButton} onClick={createRoom} ><img src="/images/celebration.png" alt="fuck u" /><span>Let's Go</span></button>
                </div>
            </div>
        </div>
    )
}

export default AddRoomModel
