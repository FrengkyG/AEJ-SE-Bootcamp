import { Meals } from '../models/Meals';

interface IMealsRepo {
	save(meals: Meals): Promise<void>;
	getAll(): Promise<Meals[]>;
	getById(mealsId: number): Promise<Meals>;
	update(meals: Meals): Promise<void>;
	delete(mealsId: number): Promise<void>;
}

export class MealsRepo implements IMealsRepo {
	async save(meals: Meals): Promise<void> {
		try {
			await Meals.create({
				name: meals.name,
				image_url: meals.image_url
			});
		} catch (error) {
			console.log(error);
			throw new Error('Failed to save new meals!');
		}
	}
	async getAll(): Promise<Meals[]> {
		try {
			return await Meals.findAll();
		} catch (error) {
			throw new Error('Failed to fetch all data!');
		}
	}
	async getById(mealsId: number): Promise<Meals> {
		try {
			const new_meal = await Meals.findOne({
				where: {
					id: mealsId
				}
			});

			if (!new_meal) {
				throw new Error('Meals not found');
			}
			return new_meal;
		} catch (error) {
			throw new Error('Failed to fetch Meal!');
		}
	}
	async update(meals: Meals): Promise<void> {
		try {
			const new_meals = await Meals.findOne({
				where: {
					id: meals.id
				}
			});

			if (!new_meals) {
				throw new Error('Meals not found');
			}

			new_meals.name = meals.name;
			new_meals.image_url = meals.image_url;

			await new_meals.save();
		} catch (error) {
			throw new Error('Failed to update meals!');
		}
	}
	async delete(mealsId: number): Promise<void> {
		try {
			const meal = await Meals.findOne({
				where: {
					id: mealsId
				}
			});

			if (!meal) {
				throw new Error('Meal not found');
			}

			await meal.destroy();
		} catch (error) {
			throw new Error('Failed to delete meal!');
		}
	}
}
