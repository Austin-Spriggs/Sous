/*
	Defines a Meal
*/
export type Meal = {
	id: string;
	area: string;
	country: string;
	instructions: string;
	directions: {ingredient: string, measurement: string};
	source: string;
	video: string;
};