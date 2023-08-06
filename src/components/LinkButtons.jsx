import { FcGoogle,FcAlarmClock,FcCalendar,FcHome } from 'react-icons/fc';
import Countdown from 'react-countdown';

const MyCountdownComponent = () => {
  // Calculate the target date for day 12 of the current month
  const currentDate = new Date();
  const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 12);

  // If the current date is already past day 12, then set the target to next month's day 12
  if (currentDate.getDate() > 12) {
    targetDate.setMonth(targetDate.getMonth() + 1);
  }

  return (
    <div>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render something when the countdown is completed
    return <p>Evento encerrado!</p>;
  } else {
    // Render the countdown timer with days, hours, minutes, and seconds
    return (
      <div>
        {days} Dias | {hours}:{minutes}:{seconds}
      </div>
    );
  }
};

export function LinkButtons({ googleLogin,setModal,modal }) {
    return (
        <section>
        {/* <Calendar onChange={onChange} value={value}  minDetail="year"/> */}
        <button onClick={() => setModal(!modal)} className="content-link reset">
          <span>
            <FcHome className='text-2xl'/> 
          </span>
          <div style={{width:"70%"}}>
            Local
          </div>
        </button>
        <button className="content-link reset">
        <span>
            <FcCalendar className='text-2xl'/>  
          </span>
          <MyCountdownComponent/>
        </button>
        <button className="content-link reset">
         <span>
            <FcAlarmClock className='text-2xl'/>  
          </span>
          <div style={{width:"70%"}}>
            16:00
          </div>
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