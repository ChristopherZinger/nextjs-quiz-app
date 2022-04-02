import { PrismaClient } from  '@prisma/client';
const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail+1@gmail.com`,
      role: 'ADMIN',
    },
  })

  const question = await prisma.question.create({
    data: {
      question: 'What\'s that name',
      correctAnswer: 'adam'
    }
  })

  await prisma.wrongAnswer.create({
    data: {
      answer: 'John',
      questionId: question.id
    }
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })