import { FiXCircle } from "react-icons/fi";

export function GuestList({ data,guests,setModalGuests }) {
    return (
        <div className={`gest-list ${!guests ? '' : 'gest-list-active'}`}>
            <div className="fireworks">
                
            </div>

           <span onClick={() => setModalGuests(!guests)}>
              <FiXCircle style={{fontSize:"20px",color:"#666",position:'absolute',right:'10px',top:'10px'}}/>
            </span> 
            <ul>
            {data && Object.values(data).map((item,key) => <li key={key}>
                <img src={item.imageUrl} referrerpolicy="no-referrer"/> <span>{item.name}</span></li>)}
            </ul>
        </div>
    )
}