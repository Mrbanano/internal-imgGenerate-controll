import { integer, relationship, timestamp } from "@keystone-6/core/fields";
import { isAdmin } from "../authController/accessControl";

export const BalanceSchema = {
  ui: {
    label: "Balance",
    description: "Balance de los usuarios",
    listView: {
      initialColumns: ["user", "balance", "updatedAt", "createdAt"],
    },
  },
  access: {
    operation: {
      query: () => true,
      create: () => true,
      update: () => true,
      delete: () => isAdmin,
    },
  },
  fields: {
    user: relationship({
      ref: "User",
      label: "Usuario",
      many: false,
      ui: {
        displayMode: "select",
      },
    }),
    balance: integer({
      label: "Balance",
      validation: { isRequired: true },
      defaultValue: Number(process.env.DEFAULT_BALANCE) || 0,
    }),
    updatedAt: timestamp({
      label: "Actualizado",
      validation: { isRequired: false },
    }),
    createdAt: timestamp({
      label: "Creado",
      validation: { isRequired: true },
      defaultValue: new Date().toISOString(),
    }),
  },
  hooks: {
    resolveInput: ({
      operation,
      resolvedData,
    }: {
      operation: string;
      resolvedData: any;
    }) => {
      if (operation === "update") {
        const { updatedAt } = resolvedData;
        if (!updatedAt) {
          return {
            ...resolvedData,
            updatedAt: new Date().toISOString(),
          };
        }
      }
      return resolvedData;
    },
  },
};
