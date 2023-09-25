"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MealsController_1 = __importDefault(require("../controller/MealsController"));
const AuthMiddleware_1 = require("../middleware/AuthMiddleware");
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
class MealsRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post('/', AuthMiddleware_1.auth, MealsController_1.default.create);
        this.router.get('/', AuthMiddleware_1.auth, MealsController_1.default.getAll);
        this.router.put('/:id', AuthMiddleware_1.auth, MealsController_1.default.update);
        this.router.delete('/:id', AuthMiddleware_1.auth, MealsController_1.default.delete);
    }
}
exports.default = new MealsRoutes().router;
