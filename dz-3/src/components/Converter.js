import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const inputFahrenheit = (e) => {
        setCelsius('');
        setFahrenheit(e.target.value);        
    };

    const inputCelsius = (e) => {
        setFahrenheit('');
        setCelsius(e.target.value);        
    };

    const convert = () => {
        fahrenheit === '' ?
            setFahrenheit((celsius * 9 / 5 + 32))
            : setCelsius(((fahrenheit - 32) * 5 / 9));
    };


    return (
        <div className='converter'>
            <Box
                className=''
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField type="number" onInput={inputCelsius} label="&deg;C" variant="outlined" size='small' value={celsius} />
            </Box>

            <div>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={() => convert()}>Конвертировать</Button>
                </Stack>
            </div>

            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField type="number" onInput={inputFahrenheit} label="&deg;F" variant="outlined" size='small' value={fahrenheit} />
            </Box>
        </div>

    );
}

export default TemperatureConverter;

