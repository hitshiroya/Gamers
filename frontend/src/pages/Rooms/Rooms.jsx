import React,{useState} from 'react'
import AddRoomModel from '../../components/AddRoomModel/AddRoomModel'
import RoomCard from '../../components/RoomCard/RoomCard'
import styles from './Rooms.module.css'

const rooms=[
  {
    id:1,
    topic:'which is good',
    speakers:[
      {
        id:1,
        name:'john doe',
        avatar:'/images/monkey-avatar.png'
      },
      {
        id:2,
        name:'john bark',
        avatar:'/images/monkey-avatar.png'
      }
    ],
    totalPeople:33,
  },
  {
    id:11,
    topic:'mental health',
    speakers:[
      {
        id:1,
        name:'john doe',
        avatar:'/images/monkey-avatar.png'
      },
      {
        id:2,
        name:'john bark',
        avatar:'/images/monkey-avatar.png'
      }
    ],
    totalPeople:33,
  },
  {
    id:111,
    topic:'mental health',
    speakers:[
      {
        id:1,
        name:'john doe',
        avatar:'/images/monkey-avatar.png'
      },
      {
        id:2,
        name:'john bark',
        avatar:'/images/monkey-avatar.png'
      }
    ],
    totalPeople:33,
  },
  {
    id:111,
    topic:'How to be Chutiya',
    speakers:[
      {
        id:1,
        name:'Shn',
        avatar:'/images/monkey-avatar.png'
      },
      {
        id:2,
        name:'john bark',
        avatar:'/images/monkey-avatar.png'
      }
    ],
    totalPeople:33,
  },
  {
    id:1,
    topic:'mental health',
    speakers:[
      {
        id:1,
        name:'john doe',
        avatar:'/images/monkey-avatar.png'
      },
      {
        id:2,
        name:'john bark',
        avatar:'/images/monkey-avatar.png'
      }
    ],
    totalPeople:33,
  }
]

const Rooms = () => {
  const [showModel,setShowModel]=useState(false);

  function openModel(){
    setShowModel(true);
  }
    return (
       <>
       <div className="container">
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.heading}>All Voice Room</span>
            <div className={styles.searchBox}>
              <img src="./images/search-icon.png" alt="search" />
              <input type="text" className={styles.searchInput} />

            </div>
          </div>
          <div className="styles.right">
            <button onClick={openModel} className={styles.startRoomButton}>
              <img src="/images/add-room-icon.png" alt="add-room"/>
              <span>Start a room</span>
            </button>
          </div>
          </div>

          <div className={styles.roomList}>
                {
                  rooms.map((room)=>(
                    <RoomCard key={room.id} room={room}/>
                  ))
                }
          </div>

       </div>
       {showModel && <AddRoomModel onClose={()=>setShowModel(false)}/>}
       
       
       </>
    )
}

export default Rooms
