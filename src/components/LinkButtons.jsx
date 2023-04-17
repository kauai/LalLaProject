import { FcGoogle } from 'react-icons/fc';

export function LinkButtons({ googleLogin,setModal,modal }) {
    return (
        <section>
        {/* <Calendar onChange={onChange} value={value}  minDetail="year"/> */}
        <button onClick={() => setModal(!modal)} className="content-link">
          Local
        </button>
        <button className="content-link">
          24/09/2023
        </button>
        <button style={{ padding:0 }} onClick={googleLogin} className="content-link confirmar">
          <span>
            <FcGoogle className='text-2xl'/>  
          </span>
          Confirmar
        </button>
      </section>
    )
}