/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("participants").del();
  await knex("participants").insert([
    {
      id: 21,
      user_id: 1,
      order_id: 11,
      isHost: true,
    },
    {
      id: 22,
      user_id: 1,
      order_id: 12,
      isHost: false,
    },

    {
      id: 23,
      user_id: 2,
      order_id: 12,
      isHost: true,
    },

    {
      id: 24,
      user_id: 2,
      order_id: 13,
      isHost: false,
    },

    {
      id: 25,
      user_id: 3,
      order_id: 13,
      isHost: true,
    },

    {
      id: 26,
      user_id: 3,
      order_id: 11,
      isHost: false,
    },
  ]);
};
