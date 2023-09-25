import express, { Application, Request, Response } from 'express';
import Database from './config/database';
import MealsRouter from './router/MealsRouter';
import AuthenticationRouter from './router/AuthenticationRouter';

class App {
	public app: Application;

	constructor() {
		this.app = express();
		this.databaseSync();
		this.plugins();
		this.routes();
	}

	protected routes(): void {
		this.app.route('/').get((req: Request, res: Response) => {
			res.send('Welcome World');
		});

		this.app.use('/api/v1/meals', MealsRouter);
		this.app.use('/api/v1/auth', AuthenticationRouter);
	}

	protected databaseSync(): void {
		const db = new Database();
		db.sequelize?.sync();
	}

	protected plugins(): void {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}
}

const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
	console.log('server started...');
});
