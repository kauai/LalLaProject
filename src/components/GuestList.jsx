import { FiXCircle } from "react-icons/fi";

export function GuestList({ data,guests,setModalGuests }) {
    return (
        <div className={`gest-list ${!guests ? '' : 'gest-list-active'}`}>
            <div className="fireworks">
                
            </div>

           <span onClick={() => setModalGuests(!guests)}>
              <FiXCircle style={{fontSize:"30px",zIndex:"9999",color:"#666",position:'absolute',right:'10px',top:'10px'}}/>
            </span> 
            <ul>
            <li className="description">
                Presenças confirmadas  ❤️🙌
            </li>
            {Object.values(data).length ? Object.values([ data ][0].users)
            .map((item,key) => <li key={key}>
                <img src={item.imageUrl} referrerPolicy="no-referrer"/> 
                <span>{item.name}</span>
            </li>) : "testes"}
            </ul>
        </div>
    )
}