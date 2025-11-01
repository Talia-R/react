import { PlayIcon } from "lucide-react";
import { Button } from "../Button";
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
            <Button>
            <PlayIcon/>
            </Button>
        </form>
    )
}