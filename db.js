async function connect(){
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:senai@localhost:3306/escola")
    console.log("Conectou no banco");
    global.connection = connection;
    return connection;
}

//async function selectCustomers()
//{
//    const conn = await connect();
//    return await conn.query ('SELECT * FROM alunos;'); 
//}
 
async function insertCustomer(aluno)
{
    const conn = await connect();
    const sql = "INSERT INTO alunos(nome,sexo) VALUES (?,?);";
    const values =[aluno.nome, aluno.sexo];
    await conn.query (sql, values);
}
/*
async function updateCustomer(codigo_aluno, aluno)
{
    const conn = await connect();
    const sql = "UPDATE alunos SET nome=?, sexo=? WHERE codigo_aluno=?;";
    const values = [aluno.nome, aluno.sexo, codigo_aluno];
    await conn.query (sql,values);
}

async function deleteCustomer(codigo_aluno)
{
    const conn = await connect();
    const sql = "DELETE FROM alunos WHERE codigo_aluno=?;";
    await conn.query (sql,[codigo_aluno]);
}

module.exports = {selectCustomers, insertCustomer, updateCustomer, deleteCustomer}
 */
module.exports = {insertCustomer}