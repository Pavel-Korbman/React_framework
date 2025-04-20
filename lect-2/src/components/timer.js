import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []); // Если действие должно работать в момент монтирования и каждого обновления (здесь не обязательно)  - не добавляем второй аргумент (массив) в useEffect . Если только в момент монтирования  - добавляем вторым аргументом пустой массив, если действие зависит от пропса, передаваемого в useEffect ( напр useEffect((info) => ) - добавляем в массив этот пропс

    return (
        <div>
            <p>Время: {time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timer;