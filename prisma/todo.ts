import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function todo() {
  const todo = await prisma.todo.findMany()
  return todo
}

todo()
  .catch( (e) => { throw e} )
  .finally( async () => await prisma.$disconnect() )

export default todo 
