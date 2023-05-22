import {Region} from "./region";
export interface Cliente {
    id?: number;
    nombre?: string;
    apellido?: string;
    email?: string;
    region?: Region;
}

