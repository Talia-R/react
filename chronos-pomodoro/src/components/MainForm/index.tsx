import { PlayIcon } from "lucide-react";
import { MainButton } from "../MainButton";
import { Cycle } from "../Cycle";
import { Input } from "../Input";
import { Summary } from "../Summary";

export function MainForm(){
    return (
        <form>
            <div>
            <Input labelText="" id="task" type="text" placeholder="Digite algo"/>
            </div>
            <Summary/>
            <Cycle/>
            <MainButton icon={<PlayIcon/>} color="green"/>       
        </form>
    )
}