import { useEffect, useState } from "react";


function InputForm() {
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    useEffect(() => {
        console.log('Вводимые данные изменены: ', { inputValue });
    }, [inputValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue ); // забираем данные формы для отправки
        setInputValue(''); // очищаем форму после отправки
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit">Отправить</button>
                {submittedValue && <p>Отправленные данные: {submittedValue}</p>}

            </form>
        </div>
    );
}

export default InputForm;
