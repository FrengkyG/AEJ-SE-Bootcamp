import { Request, Response } from 'express';
import { Meals } from '../models/Meals';
import { MealsRepo } from '../repository/MealsRepo';

class MealsController {
	async create(req: Request, res: Response) {
		try {
			const { name, image_url } = req.body;

			const new_meal = new Meals();
			new_meal.name = name;
			new_meal.image_url = image_url;
			await new MealsRepo().save(new_meal);

			return res.status(200).json({
				status: 'Success!',
				message: 'Successfully created new meals!'
			});
		} catch (error) {
			console.log(error);
			return res.status(500).json({
				status: 'Internal server error!',
				message: 'Internal server error!'
			});
		}
	}

	async getAll(req: Request, res: Response) {
		try {
			const resp_data = await new MealsRepo().getAll();

			return res.status(200).json({
				status: 'Success!',
				message: 'Successfully fetch all meals data!',
				result: resp_data
			});
		} catch (error) {
			return res.status(500).json({
				status: 'Internal server error!',
				message: 'Internal server error!'
			});
		}
	}

	async update(req: Request, res: Response) {
		try {
			const { id } = req.params;

			const { name, image_url } = req.body;

			const new_meal = new Meals();
			new_meal.id = Number(id);
			new_meal.name = name;
			new_meal.image_url = image_url;
			await new MealsRepo().update(new_meal);

			return res.status(200).json({
				status: 'Success!',
				message: 'Successfully update meals!'
			});
		} catch (error) {
			return res.status(500).json({
				status: 'Internal server error!',
				message: 'Internal server error!'
			});
		}
	}

	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const resp_data = await new MealsRepo().delete(Number(id));

			return res.status(200).json({
				status: 'Success!',
				message: 'Successfully delete meal!'
			});
		} catch (error) {
			return res.status(500).json({
				status: 'Internal server error!',
				message: 'Internal server error!'
			});
		}
	}
}

export default new MealsController();
