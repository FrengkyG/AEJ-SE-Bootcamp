"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealsRepo = void 0;
const Meals_1 = require("../models/Meals");
class MealsRepo {
    save(meals) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Meals_1.Meals.create({
                    name: meals.name,
                    image_url: meals.image_url
                });
            }
            catch (error) {
                console.log(error);
                throw new Error('Failed to save new meals!');
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Meals_1.Meals.findAll();
            }
            catch (error) {
                throw new Error('Failed to fetch all data!');
            }
        });
    }
    getById(mealsId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_meal = yield Meals_1.Meals.findOne({
                    where: {
                        id: mealsId
                    }
                });
                if (!new_meal) {
                    throw new Error('Meals not found');
                }
                return new_meal;
            }
            catch (error) {
                throw new Error('Failed to fetch Meal!');
            }
        });
    }
    update(meals) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_meals = yield Meals_1.Meals.findOne({
                    where: {
                        id: meals.id
                    }
                });
                if (!new_meals) {
                    throw new Error('Meals not found');
                }
                new_meals.name = meals.name;
                new_meals.image_url = meals.image_url;
                yield new_meals.save();
            }
            catch (error) {
                throw new Error('Failed to update meals!');
            }
        });
    }
    delete(mealsId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const meal = yield Meals_1.Meals.findOne({
                    where: {
                        id: mealsId
                    }
                });
                if (!meal) {
                    throw new Error('Meal not found');
                }
                yield meal.destroy();
            }
            catch (error) {
                throw new Error('Failed to delete meal!');
            }
        });
    }
}
exports.MealsRepo = MealsRepo;
