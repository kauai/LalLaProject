import Typewriter from 'typewriter-effect';
import { useState } from 'react'
export function Header() {
    const [none,setNone] = useState(true)
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

                <Typewriter className={none ? "none" : ''}
                onInit={(typewriter) => {
                    typewriter.typeString(
                        "Só pra confirmar você vai no meu <b>batizado?</b>"
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(
                        "Se você for por favor confirme sua <b>presença</b> clicando no botão logo abaixo"
                    )
                    .callFunction(() => {
                        setNone(() => {
                            return !none;
                        });
                    })
                    .start();
                }}
                />
          </div>
          <h1>Lalá</h1>
        </header>
    )
}