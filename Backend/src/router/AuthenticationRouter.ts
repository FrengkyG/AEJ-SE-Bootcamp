import AuthenticationController from '../controller/AuthenticationController';
import BaseRoutes from './BaseRouter';

class AuthenticationRoutes extends BaseRoutes {
	routes(): void {
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
		this.router.post('/login', AuthenticationController.login);
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
		this.router.post('/register', AuthenticationController.register);
	}
}

export default new AuthenticationRoutes().router;
