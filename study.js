const hours = new Date()
console.log(hours)
/*
Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos 
Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro 
de 1970 (UTC).
*/
hours.setDate('21')
//O método setDate() configura o dia do objeto Date relativamente ao início do mês configurado previamente.
const dia = new Date(10000)
console.log(dia.toLocaleTimeString('pt-br',{hour12: false, timeZone: 'utc'}))
console.log("Dia do mês " + hours.getDate())
//O método getDate() retorna o dia do mês da data especificada de acordo com a hours local.
console.log("Dia do semana " + hours.getDay())
/*
O valor retornado por getDay() é um inteiro que corresponde com o dia da semana: 
0 para Domingo, 1 para Segunda-Feira, 2 para Terça-Feira, e assim por diante.
*/
console.log("Ano atual " + hours.getFullYear(2000))
//O método getFullYear() retorna o ano da data especificada de acordo com a hora local.
console.log("Hora atual " + hours.getHours())
//O método getHours() retorna a hora para a data especificada, de acordo com a hora local.
console.log("Minuto atual " + hours.getMinutes())
//O método getMinutes() retorna os minutos em uma data específica de acordo com o horário local.
console.log("Milissegundos atual " + hours.getMilliseconds())
//O método getMilliseconds() retorna os milissegundos em uma data específica de acordo com o horário local.
console.log("Segundos atual " + hours.getSeconds())
//O método getSeconds() retorna os segundos de uma data específica de acordo com o horário local.
