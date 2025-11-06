import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string;
    name: string;
    durationInMinutes: number;
    startDate: number;
    completeDate: number | null;
    interruptDate: number | null;
    // type: "workTime" | "shortBreakTime" | "longBreakTime"
    type: keyof TaskStateModel['config'];
}

/* 
    completeDate: number | null; // se a pessoa interrompe é vira null
    interruptDate: number | null; // se a task for interrompida

    se a pessoa não interromper o contador: completeDate preenchida | interruptDate: null
    se a pessoa interromper o contador: completeDate null | interruptDate: preenchida
    
    
    */