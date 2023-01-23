import { Box, Typography, useTheme, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Header from "../components/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";

interface QuestionProps {
    question: string;
    answer: string;
};

const Question = ({ question, answer }: QuestionProps) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

const FAQ = () => {
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

            <Question question="An Important Question"
                      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget."/>

            <Question question="Another Important Question"
                      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget."/>

            <Question question="Your Favorite Question"
                      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget."/>

            <Question question="Some Random Question"
                      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget."/>

            <Question question="The Final Question"
                      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget."/>
        </Box>
    );
};

export default FAQ;