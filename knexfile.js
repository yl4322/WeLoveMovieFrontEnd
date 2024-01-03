// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require("dotenv").config();
const path = require("path");
const {
  NODE_ENV = "development",
  DEVELOPMENT_DATABASE_URL,
  PRODUCTION_DATABASE_URL,
} = process.env;
const DATABASE_URL =
  NODE_ENV === "production"
    ? PRODUCTION_DATABASE_URL
    : DEVELOPMENT_DATABASE_URL;
module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(dirname, "src", "db", "seeds"),
    },
  },
  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(dirname, "src", "db", "seeds"),
    },
  },
  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};
