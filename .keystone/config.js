"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core2 = require("@keystone-6/core");

// src/models/User.ts
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");

// src/authController/hiddeInfo.ts
var hiddenInfo = {
  createView: {
    fieldMode: ({ session: session2 }) => {
      return session2.data.rol === "admin" ? "edit" : "hidden";
    }
  },
  itemView: {
    fieldMode: ({ session: session2 }) => session2.data.rol === "admin" ? "edit" : "hidden"
  },
  listView: {
    fieldMode: ({ session: session2 }) => session2.data.rol === "admin" ? "read" : "hidden"
  }
};
var limitInfo = {
  createView: {
    fieldMode: ({ session: session2 }) => session2.data.rol === "admin" ? "edit" : "hidden"
  },
  itemView: {
    fieldMode: ({ session: session2 }) => session2.data.rol === "admin" ? "edit" : "hidden"
  },
  listView: {
    fieldMode: ({ session: session2 }) => session2.data.rol === "admin" ? "read" : "hidden"
  }
};

// src/utils/setSuperUser.ts
var superuser = process.env.SUPERUSER || "hola@alvarocastillo.dev";
var setSuperUser = (email) => {
  if (email == superuser) {
    return "admin";
  }
  return "user";
};

// src/models/User.ts
var UserSchema = {
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
        "createdAt"
      ]
    }
  },
  access: import_access.allowAll,
  fields: {
    //General information
    name: (0, import_fields.text)({
      label: "Nombre del usuario",
      validation: { isRequired: true },
      ui: {
        ...hiddenInfo
      }
    }),
    second_name: (0, import_fields.text)({
      label: "Segundo nombre del usuario",
      validation: { isRequired: false },
      ui: {
        ...hiddenInfo
      }
    }),
    lastname: (0, import_fields.text)({
      label: "Apellido del usuario",
      validation: { isRequired: false },
      ui: {
        ...hiddenInfo
      }
    }),
    second_lastname: (0, import_fields.text)({
      label: "Segundo apellido del usuario",
      validation: { isRequired: false },
      ui: {
        ...hiddenInfo
      }
    }),
    email: (0, import_fields.text)({
      validation: { isRequired: true },
      isIndexed: "unique",
      ui: {
        ...hiddenInfo
      }
    }),
    phone: (0, import_fields.text)({
      label: "Tel\xE9fono del usuario",
      validation: { isRequired: false },
      ui: {
        ...hiddenInfo
      }
    }),
    gender: (0, import_fields.select)({
      label: "G\xE9nero del usuario",
      options: [
        { label: "Masculino", value: "Male" },
        { label: "Femenino", value: "Female" },
        { label: "Otro", value: "Other" }
      ]
    }),
    reference: (0, import_fields.select)({
      label: "Referencia",
      type: "enum",
      options: [
        { label: "Facebook", value: "facebook" },
        { label: "LinkedIn", value: "linkedIn" },
        { label: "Instagram", value: "instagram" },
        { label: "Twitter", value: "twitter" },
        { label: "Google", value: "google" },
        { label: "un amigo me dijo", value: "friend" },
        { label: "Otro", value: "otro" }
      ],
      ui: {
        ...hiddenInfo
      }
    }),
    country: (0, import_fields.text)({
      label: "Pa\xEDs del usuario",
      validation: { isRequired: false },
      ui: {
        ...hiddenInfo
      }
    }),
    state: (0, import_fields.text)({
      label: "Estado del usuario",
      validation: { isRequired: false },
      ui: {
        ...hiddenInfo
      }
    }),
    city: (0, import_fields.text)({
      label: "Ciudad del usuario",
      validation: { isRequired: false },
      ui: {
        ...hiddenInfo
      }
    }),
    password: (0, import_fields.password)({
      label: "Contrase\xF1a del usuario",
      validation: { isRequired: true },
      ui: {
        ...hiddenInfo
      }
    }),
    birthDate: (0, import_fields.text)({
      label: "Fecha de nacimiento",
      ui: {
        ...hiddenInfo
      }
    }),
    onBoardingStep: (0, import_fields.integer)({
      label: "Paso de registro",
      defaultValue: 0,
      validation: {
        isRequired: true
      },
      ui: {
        ...hiddenInfo
      }
    }),
    createdAt: (0, import_fields.timestamp)({
      label: "Creado",
      defaultValue: { kind: "now" },
      ui: {
        createView: { fieldMode: ({ session: session2, context }) => "hidden" },
        itemView: {
          fieldMode: ({ session: session2, context, item }) => "read"
        },
        listView: {
          fieldMode: ({ session: session2, context }) => "read"
        }
      }
    }),
    rol: (0, import_fields.select)({
      label: "Tipo de usuario",
      type: "enum",
      defaultValue: "user",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Usuario", value: "user" },
        { label: "Moderador", value: "moderator" }
      ]
      //   ui: {
      //     ...(hiddenInfo as any),
      //   },
    }),
    registerDevice: (0, import_fields.text)({
      label: "Dispositivo",
      ui: {
        ...hiddenInfo
      }
    }),
    customerId: (0, import_fields.text)({
      label: "ID de stripe",
      isIndexed: "unique",
      ui: {
        ...hiddenInfo
      }
    })
  },
  hooks: {
    resolveInput: ({
      operation,
      resolvedData
    }) => {
      if (operation === "create" || operation === "update") {
        const { email } = resolvedData;
        if (email) {
          return {
            ...resolvedData,
            rol: setSuperUser(email)
          };
        }
      }
      return resolvedData;
    }
  }
};

// schema.ts
var import_core = require("@keystone-6/core");

// src/models/GenerationRecord.ts
var import_fields2 = require("@keystone-6/core/fields");
var GenerationRecordSchema = {
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
        "updatedAt"
      ]
    }
  },
  access: {
    operation: {
      query: () => true,
      create: () => true,
      update: () => true,
      delete: () => true
    }
  },
  fields: {
    generationID: (0, import_fields2.text)({
      label: "ID de la generaci\xF3n",
      validation: { isRequired: true },
      isIndexed: "unique",
      ui: {
        createView: { fieldMode: "edit" },
        itemView: { fieldMode: "read" },
        listView: { fieldMode: "read" }
      }
    }),
    generatedBy: (0, import_fields2.relationship)({
      ref: "User",
      label: "Usuario",
      many: false,
      ui: {
        ...hiddenInfo
      }
    }),
    prompt: (0, import_fields2.text)({
      label: "Texto de entrada",
      validation: { isRequired: true },
      ui: {
        ...limitInfo
      }
    }),
    generation: (0, import_fields2.text)({
      label: "Imagenes generadas",
      validation: { isRequired: false },
      ui: {
        ...limitInfo
      }
    }),
    status: (0, import_fields2.select)({
      label: "Estado de la generaci\xF3n",
      options: [
        { label: "Pendiente", value: "PENDING" },
        { label: "Completa", value: "COMPLETE" },
        { label: "Fallo", value: "FAILED" }
      ],
      defaultValue: "En proceso",
      ui: {
        displayMode: "segmented-control"
      }
    }),
    apiCreditCost: (0, import_fields2.float)({
      label: "Costo en creditos",
      validation: { isRequired: true },
      ui: {
        ...hiddenInfo
      }
    }),
    updatedAt: (0, import_fields2.timestamp)({
      label: "Fecha de Actualizaci\xF3n",
      ui: {
        createView: { fieldMode: "hidden" },
        itemView: { fieldMode: "read" },
        listView: { fieldMode: "read" }
      }
    }),
    createdAt: (0, import_fields2.timestamp)({
      label: "Fecha de Creaci\xF3n",
      defaultValue: { kind: "now" },
      ui: {
        createView: { fieldMode: "hidden" },
        itemView: { fieldMode: "read" },
        listView: { fieldMode: "read" }
      }
    })
  },
  hooks: {
    resolveInput: ({
      operation,
      resolvedData
    }) => {
      return resolvedData;
    }
  }
};

// src/models/Balance.ts
var import_fields3 = require("@keystone-6/core/fields");

// src/authController/accessControl.ts
var isAdmin = ({ session: session2 }) => Boolean(session2?.data.rol === "admin");

// src/models/Balance.ts
var BalanceSchema = {
  ui: {
    label: "Balance",
    description: "Balance de los usuarios",
    listView: {
      initialColumns: ["user", "balance", "updatedAt", "createdAt"]
    }
  },
  access: {
    operation: {
      query: () => true,
      create: () => true,
      update: () => true,
      delete: () => isAdmin
    }
  },
  fields: {
    user: (0, import_fields3.relationship)({
      ref: "User",
      label: "Usuario",
      many: false,
      ui: {
        displayMode: "select"
      }
    }),
    balance: (0, import_fields3.integer)({
      label: "Balance",
      validation: { isRequired: true },
      defaultValue: 0
    }),
    updatedAt: (0, import_fields3.timestamp)({
      label: "Actualizado",
      validation: { isRequired: false }
    }),
    createdAt: (0, import_fields3.timestamp)({
      label: "Creado",
      validation: { isRequired: true },
      defaultValue: (/* @__PURE__ */ new Date()).toISOString()
    })
  },
  hooks: {
    resolveInput: ({
      operation,
      resolvedData
    }) => {
      if (operation === "update") {
        const { updatedAt } = resolvedData;
        if (!updatedAt) {
          return {
            ...resolvedData,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          };
        }
      }
      return resolvedData;
    }
  }
};

// schema.ts
var lists = {
  User: (0, import_core.list)(UserSchema),
  GenerationRecord: (0, import_core.list)(GenerationRecordSchema),
  Balance: (0, import_core.list)(BalanceSchema)
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "name rol createdAt",
  secretField: "password",
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["name", "email", "password"]
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// src/config/db.config.ts
var import_config = require("dotenv/config");
var DATABASE_URL = process.env.DATABASE_URL;
var databaseConfig = {
  provider: "postgresql",
  url: DATABASE_URL,
  onConnect: async () => {
    console.log("connected to the database");
  },
  enableLogging: false,
  idField: { kind: "uuid" }
};

// keystone.ts
var keystone_default = withAuth(
  (0, import_core2.config)({
    db: databaseConfig,
    lists,
    session
  })
);
//# sourceMappingURL=config.js.map
