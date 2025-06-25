"use server";
import * as auth from "@/auth";

export const signOut = () => {
  return auth.signOut();
};
