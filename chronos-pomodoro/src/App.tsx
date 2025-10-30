import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import { Menu } from "./components/Menu"
import { Countdown } from "./components/Countdown"
import { Logo } from "./components/Logo";
import { Input } from "./components/Input"
import { Summary } from "./components/Summary"
import { Cycle } from "./components/Cycle"
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { PlayIcon } from "lucide-react";



import './styles/theme.css';
import './styles/global.css';

export function App(){
    return (
        <>
            <Container>
                <Logo/>
                <Menu/>
                <Countdown/>
                <form>
                    <div>
                        <Input description="task" id="task" type="text"/>
                    </div>
                    <Summary/>
                    <Cycle/>
                    <Button>
                        <PlayIcon/>
                    </Button>
                </form>
                <Footer/>
            </Container>
        </>
    )
}