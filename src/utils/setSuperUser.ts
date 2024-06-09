const superuser = (process.env.SUPERUSER as any) || "hola@alvarocastillo.dev";

export const setSuperUser = (email: string) => {
  if (email == superuser) {
    return "admin";
  }
  return "user";
};
