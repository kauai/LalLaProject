import { FiXCircle } from "react-icons/fi";

export function ModalMap({modal,setModal}) {
    return (
        <div className="modal" style={{display:modal ? 'block': 'none'}}>
           <span onClick={() => setModal(!modal)}>
            <FiXCircle className='text-2xl'/></span>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.366410445583!2d-46.6540934!3d-23.6628512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ab65bbb9f19%3A0x54b8f1f86fddd3e3!2sPar%C3%B3quia%20Nossa%20Senhora%20Ref%C3%BAgio%20dos%20Pecadores!5e0!3m2!1sen!2sbr!4v1681697837411!5m2!1sen!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}