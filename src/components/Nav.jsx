import { RxHamburgerMenu } from 'react-icons/rx';

export function Nav({ guests, setModalGuests }) {
    return (
        <nav>
             <RxHamburgerMenu onClick={() => setModalGuests(!guests)} style={{fontSize:'2.5em'}} className='ms-1'/> 
        </nav>
    )
}