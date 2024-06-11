import { allowAll } from "@keystone-6/core/access";
import {
  relationship,
  select,
  text,
  timestamp,
  float,
} from "@keystone-6/core/fields";
import { isAdmin } from "../authController/accessControl";
import { hiddenInfo, limitInfo } from "../authController/hiddeInfo";

export const GenerationRecordSchema = {
  ui: {
    label: "Registro de generaciones",
    description: "Registro de generaciones de la app",
    listView: {
      initialColumns: [
        "generatedBy",
        "generationID",
        "status",
        "apiCreditCost",
        "createdAt",
        "updatedAt",
      ],
    },
  },
  access: {
    operation: {
      query: () => true,
      create: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    generationID: text({
      label: "ID de la generación",
      validation: { isRequired: true },
      isIndexed: "unique",
      ui: {
        createView: { fieldMode: "edit" },
        itemView: { fieldMode: "read" },
        listView: { fieldMode: "read" },
      },
    }),
    generatedBy: relationship({
      ref: "User",
      label: "Usuario",
      many: false,
      ui: {
        ...(hiddenInfo as any),
      },
    }),
    prompt: text({
      label: "Texto de entrada",
      validation: { isRequired: true },
      ui: {
        ...(limitInfo as any),
      },
    }),
    generation: text({
      label: "Imagenes generadas",
      validation: { isRequired: false },
      ui: {
        ...(limitInfo as any),
      },
    }),

    status: select({
      label: "Estado de la generación",
      options: [
        { label: "Pendiente", value: "PENDING" },
        { label: "Completa", value: "COMPLETE" },
        { label: "Fallo", value: "FAILED" },
      ],
      defaultValue: "En proceso",
      ui: {
        displayMode: "segmented-control",
      },
    }),

    apiCreditCost: float({
      label: "Costo en creditos",
      validation: { isRequired: true },
      ui: {
        ...(hiddenInfo as any),
      },
    }),

    updatedAt: timestamp({
      label: "Fecha de Actualización",
      ui: {
        createView: { fieldMode: "hidden" },
        itemView: { fieldMode: "read" },
        listView: { fieldMode: "read" },
      },
    }),
    createdAt: timestamp({
      label: "Fecha de Creación",
      defaultValue: { kind: "now" },
      ui: {
        createView: { fieldMode: "hidden" },
        itemView: { fieldMode: "read" },
        listView: { fieldMode: "read" },
      },
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
      // if (operation === "update") {
      //   const { updatedAt } = resolvedData;
      //   if (!updatedAt) {
      //     return {
      //       ...resolvedData,
      //       updatedAt: new Date().toISOString(),
      //     };
      //   }
      // }
      return resolvedData;
    },
  },
};
