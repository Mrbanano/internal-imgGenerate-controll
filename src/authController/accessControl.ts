export type Session = {
  data: {
    rol: string;
  };
};

export const debbuger = ({ session }: { session: Session }) => {
  console.log(session);
  return true;
};

export const isAdmin = ({ session }: { session: Session }) =>
  Boolean(session?.data.rol === "admin");

export const isUser = ({ session }: { session: Session }) =>
  Boolean(session?.data.rol === "admin");

export const isAdminOrUser = ({ session }: { session: Session }) =>
  Boolean(session?.data.rol === "admin" || session?.data.rol === "user");

export const isAdminOrModerator = ({ session }: { session: Session }) =>
  Boolean(session?.data.rol === "admin" || session?.data.rol === "moderator");

export const isModerator = ({ session }: { session: Session }) =>
  Boolean(session?.data.rol === "moderator");

export const hasRol = ({ session }: { session: Session }) =>
  Boolean(
    session?.data.rol === "admin" ||
      session?.data.rol === "moderator" ||
      session?.data.rol === "user"
  );
