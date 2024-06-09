import "dotenv/config";
const DATABASE_URL = process.env.DATABASE_URL as any;

export const databaseConfig = {
  provider: "postgresql",
  url: DATABASE_URL,
  onConnect: async () => {
    console.log("connected to the database");
  },
  enableLogging: false,
  idField: { kind: "uuid" },
};
