// /graphql/context.ts
import { PrismaClient } from '@prisma/client'
import { prisma } from '../pages/api/prisma'

export type Context = {
  prisma: PrismaClient
}
export async function createContext(): Promise<Context> {
  return {
    prisma,
  }
}