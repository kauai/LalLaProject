import { FiXCircle } from "react-icons/fi";

export function GuestList({ data,guests,setModalGuests }) {
    return (
        <div className={`gest-list ${!guests ? '' : 'gest-list-active'}`}>
           <span onClick={() => setModalGuests(!guests)}>
              <FiXCircle style={{fontSize:"20px"}}/>
            </span> 
            <ul>
            {data && Object.values(data).map((item,key) => <li key={key}>
                <img src={item.imageUrl} referrerpolicy="no-referrer"/> <span>{item.name}</span></li>)}
            </ul>
        </div>
    )
}