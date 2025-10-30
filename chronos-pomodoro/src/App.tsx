import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

import './styles/theme.css';
import './styles/global.css';

export function App(){
    return (
        <>
            <Heading> 
                Olá mundo 1
                <button>
                    <TimerIcon/>
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates mollitia, eius corrupti facere rem 
                dolor consequuntur enim illum temporibus ratione quia cumque atque aspernatur neque, sint beatae modi, 
                quos earum.
            </p>
        </>
    )
}