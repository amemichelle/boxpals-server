/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("orders", (table) => {
    table.integer("id").primary();
    table.string("name").notNullable();
    table.integer("host_id").unsigned();
    table.foreign("host_id").references("id").inTable("users");
    table.string("status").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
