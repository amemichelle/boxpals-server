/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("particpants", (table) => {
    table.increments("id").primary();

    table.integer("user_id").unsigned();
    table.foreign("user_id").references("id").inTable("users");

    table.integer("order_id").unsigned();
    table.foreign("order_id").references("id").inTable("orders");

    table.boolean("isHost");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
