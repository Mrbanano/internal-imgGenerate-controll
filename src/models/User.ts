import { allowAll } from "@keystone-6/core/access";
import {
  integer,
  password,
  select,
  text,
  timestamp,
} from "@keystone-6/core/fields";

import { hiddenInfo } from "../authController/hiddeInfo";
import { setSuperUser } from "../utils/setSuperUser";

export const UserSchema = {
  ui: {
    label: "Usuarios de la app",
    description: "Lista de usuarios de la app",
    listView: {
      initialColumns: [
        "name",
        "lastName",
        "country",
        "email",
        "onBoardingStep",
        "createdAt",
      ],
    },
  },
  access: allowAll,
  fields: {
    //General information
    name: text({
      label: "Nombre del usuario",
      validation: { isRequired: true },
      ui: {
        ...(hiddenInfo as any),
      },
    }),

    second_name: text({
      label: "Segundo nombre del usuario",
      validation: { isRequired: false },
      ui: {
        ...(hiddenInfo as any),
      },
    }),

    lastname: text({
      label: "Apellido del usuario",
      validation: { isRequired: false },
      ui: {
        ...(hiddenInfo as any),
      },
    }),

    second_lastname: text({
      label: "Segundo apellido del usuario",
      validation: { isRequired: false },
      ui: {
        ...(hiddenInfo as any),
      },
    }),

    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
      ui: {
        ...(hiddenInfo as any),
      },
    }),
    phone: text({
      label: "Teléfono del usuario",
      validation: { isRequired: false },
      ui: {
        ...(hiddenInfo as any),
      },
    }),
    gender: select({
      label: "Género del usuario",
      options: [
        { label: "Masculino", value: "Male" },
        { label: "Femenino", value: "Female" },
        { label: "Otro", value: "Other" },
      ],
    }),

    reference: select({
      label: "Referencia",
      type: "enum",
      options: [
        { label: "Facebook", value: "facebook" },
        { label: "LinkedIn", value: "linkedIn" },
        { label: "Instagram", value: "instagram" },
        { label: "Twitter", value: "twitter" },
        { label: "Google", value: "google" },
        { label: "un amigo me dijo", value: "friend" },
        { label: "Otro", value: "otro" },
      ],
      ui: {
        ...(hiddenInfo as any),
      },
    }),
    country: text({
      label: "País del usuario",
      validation: { isRequired: false },
      ui: {
        ...(hiddenInfo as any),
      },
    }),

    state: text({
      label: "Estado del usuario",
      validation: { isRequired: false },
      ui: {
        ...(hiddenInfo as any),
      },
    }),

    city: text({
      label: "Ciudad del usuario",
      validation: { isRequired: false },
      ui: {
        ...(hiddenInfo as any),
      },
    }),

    password: password({
      label: "Contraseña del usuario",
      validation: { isRequired: true },
      ui: {
        ...(hiddenInfo as any),
      },
    }),

    birthDate: text({
      label: "Fecha de nacimiento",
      ui: {
        ...(hiddenInfo as any),
      },
    }),

    onBoardingStep: integer({
      label: "Paso de registro",
      defaultValue: 0,
      validation: {
        isRequired: true,
      },
      ui: {
        ...(hiddenInfo as any),
      },
    }),

    createdAt: timestamp({
      label: "Creado",
      defaultValue: { kind: "now" },
      ui: {
        createView: { fieldMode: ({ session, context }) => "hidden" },
        itemView: {
          fieldMode: ({ session, context, item }) => "read",
        },
        listView: {
          fieldMode: ({ session, context }) => "read",
        },
      },
    }),

    rol: select({
      label: "Tipo de usuario",
      type: "enum",
      defaultValue: "user",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Usuario", value: "user" },
        { label: "Moderador", value: "moderator" },
      ],
      //   ui: {
      //     ...(hiddenInfo as any),
      //   },
    }),

    registerDevice: text({
      label: "Dispositivo",
      ui: {
        ...(hiddenInfo as any),
      },
    }),

    customerId: text({
      label: "ID de stripe",
      isIndexed: "unique",
      ui: {
        ...(hiddenInfo as any),
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
      if (operation === "create" || operation === "update") {
        const { email } = resolvedData;
        if (email) {
          return {
            ...resolvedData,
            rol: setSuperUser(email),
          };
        }
      }
      return resolvedData;
    },
  },
};
