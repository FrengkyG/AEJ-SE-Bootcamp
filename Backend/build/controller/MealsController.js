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
const Meals_1 = require("../models/Meals");
const MealsRepo_1 = require("../repository/MealsRepo");
class MealsController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, image_url } = req.body;
                const new_meal = new Meals_1.Meals();
                new_meal.name = name;
                new_meal.image_url = image_url;
                yield new MealsRepo_1.MealsRepo().save(new_meal);
                return res.status(200).json({
                    status: 'Success!',
                    message: 'Successfully created new meals!'
                });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    status: 'Internal server error!',
                    message: 'Internal server error!'
                });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp_data = yield new MealsRepo_1.MealsRepo().getAll();
                return res.status(200).json({
                    status: 'Success!',
                    message: 'Successfully fetch all meals data!',
                    result: resp_data
                });
            }
            catch (error) {
                return res.status(500).json({
                    status: 'Internal server error!',
                    message: 'Internal server error!'
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, image_url } = req.body;
                const new_meal = new Meals_1.Meals();
                new_meal.id = Number(id);
                new_meal.name = name;
                new_meal.image_url = image_url;
                yield new MealsRepo_1.MealsRepo().update(new_meal);
                return res.status(200).json({
                    status: 'Success!',
                    message: 'Successfully update meals!'
                });
            }
            catch (error) {
                return res.status(500).json({
                    status: 'Internal server error!',
                    message: 'Internal server error!'
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const resp_data = yield new MealsRepo_1.MealsRepo().delete(Number(id));
                return res.status(200).json({
                    status: 'Success!',
                    message: 'Successfully delete meal!'
                });
            }
            catch (error) {
                return res.status(500).json({
                    status: 'Internal server error!',
                    message: 'Internal server error!'
                });
            }
        });
    }
}
exports.default = new MealsController();
