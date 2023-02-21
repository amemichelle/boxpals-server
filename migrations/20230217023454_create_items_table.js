/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("img_src");
    table.string("price");
    table.string("specifications");
    table.integer("order_id").unsigned();
    table.foreign("order_id").references("id").inTable("orders");
    table.integer("user_id").unsigned;
    table.foreign("user_id").references("id").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
