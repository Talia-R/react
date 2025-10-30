import { Heading } from "./components/Heading";
import { Container } from "./components/Container"
import { IconsSection } from "./components/IconsSection"
import { Timer } from "./components/Timer"
import { Title } from "./components/Title";
import { Form } from "./components/Form"


import './styles/theme.css';
import './styles/global.css';

export function App(){
    return (
        <>
            <Container>
                <Title/>
                <IconsSection/>
                <Timer/>
                <Form>
                    task
                </Form>
            </Container>
        </>
    )
}