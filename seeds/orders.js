/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("orders").del();
  await knex("orders").insert([
    {
      id: 11,
      name: "ktown4u",
      host_id: 1,
      status: "in progress",
    },
    {
      id: 12,
      name: "osumekeys",
      host_id: 2,
      status: "completed",
    },

    {
      id: 13,
      name: "yesstyle",
      host_id: 3,
      status: "payments due",
    },
  ]);
};
