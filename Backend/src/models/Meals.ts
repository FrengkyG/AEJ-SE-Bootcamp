import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
	tableName: Meals.VAR_TABLE_NAME
})
export class Meals extends Model {
	public static VAR_TABLE_NAME = 'meals' as string;
	public static VAR_ID = 'id' as string;
	public static VAR_NAME = 'name' as string;
	public static VAR_IMAGE_URL = 'image_url' as string;

	@Column({
		type: DataType.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		field: Meals.VAR_ID
	})
	id!: number;
	@Column({
		type: DataType.STRING,
		field: Meals.VAR_NAME
	})
	name!: string;
	@Column({
		type: DataType.STRING,
		field: Meals.VAR_IMAGE_URL
	})
	image_url!: string;
}
