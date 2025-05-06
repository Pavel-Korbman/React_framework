
import Header from "../Header";
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

function Lesson() {
    const steps = ['Урок 1', 'Урок 2', 'Урок 3'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
        <div>
            <Header />
            <div className="pages center">
                <Typography className='pages__title' variant="h4" gutterBottom>
                    Frontend-разработка
                </Typography>
                <div className='box'>
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                // if (isStepOptional(index)) {
                                //     labelProps.optional = (
                                //         <Typography variant="caption">Optional</Typography>
                                //     );
                                // }
                                if (isStepSkipped(index)) {
                                    stepProps.completed = false;
                                }
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <div className="centerbox">
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        Поздравляем - вы закончили курс!
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleReset}>Начать заново</Button>
                                    </Box>
                                </div>

                            </React.Fragment>
                        ) : (
                            <React.Fragment>


                                {/* <Typography sx={{ mt: 2, mb: 1 }}>Урок {activeStep + 1}</Typography> */}
                                {/* <h3 className="pleer">ЗДЕСЬ ПЛЕЕР {activeStep + 1}</h3> */}
                                <div className="centerbox">
                                    <video className="pleer" src="video.mp4" poster={require("../../media/poster.jpg")} controls></video>
                                </div>



                                <Box className='center btn_step' sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Предыдущий
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    {/* {isStepOptional(activeStep) && (
                                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                            Skip
                                        </Button>
                                    )} */}
                                    <Button onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Завершить' : 'Следующий'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Box>
                </div>




            </div>

        </div>
    );
}

export default Lesson;