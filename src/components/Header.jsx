import Typewriter from 'typewriter-effect';
import { useState, useRef } from 'react'
export function Header() {
    const ref = useRef(null);
    const [ none, setNone ] = useState(false)
    return (
        <header>
          <div className="container-img">
            <img src="Lala.png" alt=""/>
            {/* <Typewriter
                options={{
                    strings: [
                        'Só pra confirmar você vai no meu batizado?'
                    ],
                    autoStart: true,
                    loop:false,
                    deleteAll:false

                }}
                /> */}

                <Typewriter ref={ref}
                onInit={(typewriter) => {
                    typewriter.typeString(
                        "Olá você está convidado para o meu <b>aniversário</b> Você poderia confirmar a sua presença?"
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(() => {
                        // document.querySelector('.Typewriter').style.display = 'none';
                        ref.current.typewriter.style.transition = '.4s';
                        ref.current.typewriter.style.opacity = '0';
                    })
                    .start();
                }}
                />
          </div>
          <h1>Lalá</h1>
        </header>
    )
}