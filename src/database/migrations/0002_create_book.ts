import { Knex } from "knex";

export const up = async (knex: Knex) => {
	await knex.schema
		.createTable("book", (table) => {
			table.uuid("id").primary().index();
			table.string("title").notNullable().index().checkLength(">=", 2);
			table.integer("pages").notNullable().checkLength(">=", 1);
			table.string("imgUrl", 255);
			table.text("description").notNullable().checkLength(">=", 10);
			table.uuid("author_id").unsigned();
			table.foreign("author_id").references("author.id");
		})
		.then(() => {
			console.log("# Created table book");
		});
};

export const down = async (knex: Knex) => {
	await knex.schema.dropTable("book").then(() => {
		console.log("# Dropped table book");
	});
};
