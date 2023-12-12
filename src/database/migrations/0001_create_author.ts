import { Knex } from "knex";

export const up = async (knex: Knex) => {
	await knex.schema
		.createTable("author", (table) => {
			table.string("id").primary().index();
			table.string("name").notNullable().unique().index().checkLength(">=", 2);
		})
		.then(() => {
			console.log("# Created table author");
		});
};

export const down = async (knex: Knex) => {
	await knex.schema.dropTable("author").then(() => {
		console.log("# Dropped table author");
	});
};
