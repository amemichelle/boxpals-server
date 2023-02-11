// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
      connection: {
        host: "127.0.0.1",
        user: "root",
        password: "new_password",
        database: "boxpalsDB",
        charset: "utf8",
      },
    },
  },
};
