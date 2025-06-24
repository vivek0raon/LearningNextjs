"use server";
import { prisma } from "@/lib/prisma";

const index = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });
};

export default index;
