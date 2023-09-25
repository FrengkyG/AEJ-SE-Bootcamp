import MealsController from '../controller/MealsController';
import { auth } from '../middleware/AuthMiddleware';
import BaseRoutes from './BaseRouter';

class MealsRoutes extends BaseRoutes {
	routes(): void {
		this.router.post('/', auth, MealsController.create);
		this.router.get('/', auth, MealsController.getAll);
		this.router.put('/:id', auth, MealsController.update);
		this.router.delete('/:id', auth, MealsController.delete);
	}
}

export default new MealsRoutes().router;
