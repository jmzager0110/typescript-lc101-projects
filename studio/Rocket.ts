import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number {
        let summedItems: number = 0;
        for (let i: number = 0; i < items.length; i++) {
            summedItems += items[i].massKg;
        } return summedItems;
    }

    currentMassKg(): number {
        let combinedMassKg = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return combinedMassKg;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) !== true) {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) !== true) {
            return false;
        }
    }
}   

