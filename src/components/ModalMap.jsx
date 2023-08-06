import { FiXCircle } from "react-icons/fi";

export function ModalMap({modal,setModal}) {
    return (
        <div className="modal" style={{display:modal ? 'block': 'none'}}>
           <span onClick={() => setModal(!modal)}>
            <FiXCircle className='text-2xl'/>
            </span>
        <div class="embed">
           {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3642.525120148104!2d-46.59850342775968!3d-24.083022033303035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDA0JzU4LjkiUyA0NsKwMzUnMzguMCJX!5e0!3m2!1sen!2sbr!4v1691283907608!5m2!1sen!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.554900729402!2d-46.59636838938388!3d-24.08197396980021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce271aeb797923%3A0xe20a3021a31d71de!2sHostel%20Sol%20e%20Mar!5e0!3m2!1sen!2sbr!4v1691285078086!5m2!1sen!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    )
}