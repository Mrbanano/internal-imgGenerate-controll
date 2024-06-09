import { randomBytes } from "crypto";
import { createAuth } from "@keystone-6/auth";

import { statelessSessions } from "@keystone-6/core/session";

let sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = randomBytes(32).toString("hex");
}

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",

  sessionData: "name rol createdAt",
  secretField: "password",

  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["name", "email", "password"],

    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  },
});

// statelessSessions uses cookies for session tracking
//   these cookies have an expiry, in seconds
//   we use an expiry of 30 days for this starter
const sessionMaxAge = 60 * 60 * 24 * 30;

// you can find out more at https://keystonejs.com/docs/apis/session#session-api
const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret!,
});

export { withAuth, session };
