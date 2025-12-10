import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}
const globalForPrisma = global as typeof globalThis & { prisma?: PrismaClient };


export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma