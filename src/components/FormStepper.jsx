import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Step,
    StepButton,
    Stepper,
    Typography
} from "@mui/material";
import {useState} from "react";
import {Type} from "./Forms/AddTask/Type";
import {General} from "./Forms/AddTask/General";
import {Details} from "./Forms/AddTask/Details";
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";

function ExpandMoreIcon() {
    return null;
}

export const FormStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const [data, setData] = useState(
        {
            Type: "",
            Title: "",
            Description: "",
            Category: "",
            StartDate: dayjs(),
            Deadline: dayjs(),
            Priority: 50
        }
    )

    const Structure = () => [
        ["Type of Task", "General information's", "Details"],
        [
            <Type data={data} setData={setData} />,
            <General data={data} setData={setData}/>,
            <Details data={data} setData={setData}/>
        ]
    ]


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const steps = Structure()[0];

    const isLastStep = () => {
        return activeStep === steps.length - 1;
    };

    const allStepsCompleted = () => {
        return Object.keys(completed).length === steps.length;
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };
    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={e =>  setActiveStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div className="formstepper">
                {allStepsCompleted() ? (
                    <Box className="formstepper__wrapper">
                            <Typography>
                                Task Summary
                            </Typography>
                            <Accordion expanded={expanded === 'Type'} onChange={handleChange('Type')}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                    <Typography>Type</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Type of Task - {data.Type}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'General'} onChange={handleChange('General')}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                    <Typography>General</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                        <Typography>
                                            Task Title - {data.Title}
                                        </Typography>
                                        <Typography>
                                            Task Description - {data.Description}
                                        </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'Details'} onChange={handleChange('Details')}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                    <Typography>Details</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                        <Typography>
                                            Task Category - {data.Category}
                                        </Typography>
                                        <Typography>
                                            Task Start Date - {data.StartDate.toLocaleString()}
                                        </Typography>
                                        <Typography>
                                            Task Deadline - {data.Deadline.toLocaleString()}
                                        </Typography>
                                        <Typography>
                                            Priority of Task - {data.Priority}
                                        </Typography>
                                </AccordionDetails>
                            </Accordion>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={e => navigate(`/Manager/`)} >Cancel</Button>
                            <Button>Create</Button>
                        </Box>
                    </Box>
                ) : (
                    <div className="formstepper__wrapper">
                        <div className="formstepper__wrapper--body">
                            {Structure()[1][activeStep]}
                        </div>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext} sx={{ mr: 1 }}>
                                Next
                            </Button>
                            {activeStep !== steps.length &&
                                (completed[activeStep] ? (
                                    <></>
                                ) : (
                                    <Button onClick={handleComplete}>
                                        {Object.keys(completed).length === steps.length - 1
                                            ? 'Finish'
                                            : 'Complete Step'}
                                    </Button>
                                ))}
                        </Box>
                    </div>
                )}
            </div>
        </Box>
    );
}