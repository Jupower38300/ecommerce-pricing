import { Panier } from "../Models/Panier";

export interface RemiseInterface {
    appliquerRemise(panier: Panier): number;
}