import { Application, Express, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { version } from '../../package.json';
import swaggerJSDoc from 'swagger-jsdoc';

class Swagger {
	public static swaggerDocs(app: Application, port: number): void {
		const options = {
			definition: {
				openapi: '3.0.0',
				info: {
					title: 'REST API Docs',
					version
				},
				components: {
					securitySchemes: {
						bearerAuth: {
							type: 'http',
							scheme: 'bearer',
							bearerFormat: 'JWT'
						}
					}
				},
				security: [
					{
						bearerAuth: []
					}
				]
			},
			apis: ['./src/router/*.ts', './src/schemas/*.ts']
		};

		const swaggerSpec = swaggerJSDoc(options);
		// Swagger page
		app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

		// Docs in JSON format
		app.get('/docs.json', (req: Request, res: Response) => {
			res.setHeader('Content-Type', 'application/json');
			res.send(swaggerSpec);
		});

		console.log(`Docs available at http://localhost:${port}/docs`);
	}
}
export default Swagger;
