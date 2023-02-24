/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      username: "AmeMichelle",
      email: "swolfsmichelle8@gmail.com",
      password: "bananas",
    },

    {
      id: 2,
      username: "smartoctopus",
      email: "octo@hotmail.com",
      password: "hailmary",
    },

    {
      id: 3,
      username: "fruitbasket",
      email: "fruits@yahoo.ca",
      password: "apples",
    },
  ]);
};
