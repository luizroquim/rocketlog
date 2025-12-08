//ativar tipagem do express, criando e exportando uma interface com o mesmo nome que ja existe vai mesclar elas
declare namespace Express{
    export interface Request{
        user?:{
            id:string
            role:string
        }
    }
}