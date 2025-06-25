"use server";
import * as auth from "@/auth";

export const signIn = () => {
  return auth.signIn();
};
