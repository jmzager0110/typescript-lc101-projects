"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var summedItems = 0;
        for (var i = 0; i < items.length; i++) {
            summedItems += items[i].massKg;
        }
        return summedItems;
    };
    Rocket.prototype.currentMassKg = function () {
        var combinedMassKg = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return combinedMassKg;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) !== true) {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) !== true) {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
