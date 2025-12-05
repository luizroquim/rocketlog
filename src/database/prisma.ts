//Ele inicializa o PrismaClient (que é a ferramenta que você usa para fazer prisma.users.create, prisma.users.findMany, etc.) e exporta essa conexão na variável prisma para ser usada em outros arquivos do projeto (como no seu UsersController).
import { PrismaClient} from "@prisma/client"

export const prisma = new PrismaClient({
    log:process.env.NODE_ENV === "production" ? [] : ["query"]
})