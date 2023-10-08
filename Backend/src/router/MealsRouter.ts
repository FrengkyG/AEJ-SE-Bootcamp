import MealsController from '../controller/MealsController';
import { auth } from '../middleware/AuthMiddleware';
import BaseRoutes from './BaseRouter';

class MealsRoutes extends BaseRoutes {
	routes(): void {
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
		this.router.post('/', auth, MealsController.create);
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
		this.router.get('/', auth, MealsController.getAll);
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
		this.router.put('/:id', auth, MealsController.update);
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
		this.router.delete('/:id', auth, MealsController.delete);
	}
}

export default new MealsRoutes().router;
