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
        /**
         * @openapi
         * '/api/v1/meals':
         *  post:
         *    tags:
         *    - Meals
         *    summary: Create New Meal
         *    requestBody:
         *      description: Request Body for Create Meal
         *      required: true
         *      content:
         *        application/json:
         *          schema:
         *            type: object
         *            properties:
         *              name:
         *                type: string
         *                example: Corba
         *              image_url:
         *                type: string
         *                example: https://www.themealdb.com/images/media/meals/58oia61564916529.jpg
         *    responses:
         *      200:
         *        description: Success
         *      401:
         *        description: Unauthorized
         */
        this.router.post('/', AuthMiddleware_1.auth, MealsController_1.default.create);
        /**
         * @openapi
         * '/api/v1/meals':
         *  get:
         *     security:
         *     - bearerAuth: []
         *     tags:
         *     - Meals
         *     summary: Get All Meals
         *     responses:
         *      200:
         *        description: Success
         *      401:
         *        description: Unauthorized
         */
        this.router.get('/', AuthMiddleware_1.auth, MealsController_1.default.getAll);
        /**
         * @openapi
         * '/api/v1/meals/{id}':
         *  put:
         *    tags:
         *    - Meals
         *    summary: Create New Meal
         *    parameters:
         *      - name: id
         *        in: path
         *        description: Meal ID
         *        type: integer
         *        required: true
         *    requestBody:
         *      description: Request Body for Update Meal
         *      required: true
         *      content:
         *        application/json:
         *          schema:
         *            type: object
         *            properties:
         *              id:
         *                type: integer
         *                example: 2
         *              name:
         *                type: string
         *                example: Corba
         *              image_url:
         *                type: string
         *                example: https://www.themealdb.com/images/media/meals/58oia61564916529.jpg
         *    responses:
         *      200:
         *        description: Success
         *      401:
         *        description: Unauthorized
         */
        this.router.put('/:id', AuthMiddleware_1.auth, MealsController_1.default.update);
        /**
         * @openapi
         * '/api/v1/meals/{id}':
         *  delete:
         *    tags:
         *    - Meals
         *    summary: Delete a Meal
         *    parameters:
         *      - name: id
         *        in: path
         *        description: Meal ID
         *        type: integer
         *        required: true
         *    responses:
         *      200:
         *        description: Success
         *      401:
         *        description: Unauthorized
         */
        this.router.delete('/:id', AuthMiddleware_1.auth, MealsController_1.default.delete);
    }
}
exports.default = new MealsRoutes().router;
