import conectarAoBanco from "../config/dbconfig.js";
// Estabelece uma conexão com o banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
    // Conecta ao banco de dados 'imersao-instabytes'
    const db = conexao.db("imersao-instabytes");
    // Seleciona a coleção 'posts'dentro do banco de dados
    const colecao = db.collection("posts");
    // Encontra todos os documentos na coleção e os converte para um array
    return colecao.find().toArray();
}
