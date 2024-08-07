(async() => {
    const db = require ("./db")
    console.log ("Começou!")

    //console.log('INSERT INTO ALUNOS');//2º
    //const result = await db.insertCustomer({ nome: "Ana Clara", sexo "Feminino"});//2º
    //console.log(result);

    //console.log('SELECT * FROM ALUNOS');
    //const alunos = await db.selectCustomer();
    //console.log(alunos);

    //console.log('UPDATE ALUNOS');// 2º
    //const result2 = await db.updateCustomer(7, { nome: "Ana Clara", sexo "Feminino"});// 2º
    //console.log(result2);

    //console.log('DELETE ALUNOS');// 2º
    //await db.deleteCustomer(13);

    console.log ('INSERT INTO ALUNOS');// 1º
    await db.insertCustomer({ nome: "Fernando", sexo: "Masculino"});// 1º
    await db.insertCustomer({ nome: "Jorge", sexo: "Masculino"});// 2º
    await db.insertCustomer({ nome: "Alcione", sexo: "Feminino"});// 3º
    await db.insertCustomer({ nome: "Joana", sexo: "Feminino"});// 4º
})();