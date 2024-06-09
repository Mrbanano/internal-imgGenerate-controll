import { Session } from "./accessControl";

export const hiddenInfo = {
  createView: {
    fieldMode: ({ session }: { session: Session }) => {
      console.log(session.data);
      return session.data.rol === "admin" ? "edit" : "hidden";
    },
  },
  itemView: {
    fieldMode: ({ session }: { session: Session }) =>
      session.data.rol === "admin" ? "edit" : "hidden",
  },
  listView: {
    fieldMode: ({ session }: { session: Session }) =>
      session.data.rol === "admin" ? "read" : "hidden",
  },
};

export const limitInfo = {
  createView: {
    fieldMode: ({ session }: { session: Session }) =>
      session.data.rol === "admin" ? "edit" : "hidden",
  },
  itemView: {
    fieldMode: ({ session }: { session: Session }) =>
      session.data.rol === "admin" ? "edit" : "hidden",
  },
  listView: {
    fieldMode: ({ session }: { session: Session }) =>
      session.data.rol === "admin" ? "read" : "hidden",
  },
};
