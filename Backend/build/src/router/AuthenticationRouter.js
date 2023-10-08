"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthenticationController_1 = __importDefault(require("../controller/AuthenticationController"));
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
class AuthenticationRoutes extends BaseRouter_1.default {
    routes() {
        /**
         * @openapi
         * '/api/v1/auth/login':
         *  post:
         *    tags:
         *    - Auth
         *    summary: Login User
         *    requestBody:
         *      description: Request Body for Login
         *      required: true
         *      content:
         *        application/json:
         *          schema:
         *            type: object
         *            properties:
         *              email:
         *                type: string
         *                example: frengky.gg@gmail.com
         *              password:
         *                type: string
         *                example: Test1234
         *    responses:
         *      200:
         *        description: Success
         *      500:
         *        description: Internal server Error!
         */
        this.router.post('/login', AuthenticationController_1.default.login);
        /**
         * @openapi
         * '/api/v1/auth/register':
         *  post:
         *    tags:
         *    - Auth
         *    summary: Register User
         *    requestBody:
         *      description: Request Body for Register
         *      required: true
         *      content:
         *        application/json:
         *          schema:
         *            type: object
         *            properties:
         *              name:
         *                type: string
         *                example: frengky
         *              username:
         *                type: string
         *                example: frengkydev
         *              email:
         *                type: string
         *                example: frengky.gg@gmail.com
         *              password:
         *                type: string
         *                example: Test1234
         *    responses:
         *      200:
         *        description: Success
         *      500:
         *        description: Internal server Error!
         */
        this.router.post('/register', AuthenticationController_1.default.register);
    }
}
exports.default = new AuthenticationRoutes().router;
