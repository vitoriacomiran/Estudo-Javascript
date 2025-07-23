/* 1. Verificador de idade / Crie uma função verificarIdade(idade) que recebe a idade de uma pessoa e imprime:
"É maior de idade" se for 18 anos ou mais.
"É menor de idade" caso contrário.
*/
function verificarIdade(idade){
  if (idade >= 18) {
    return "É maior de idade"
  } else {
    return "É menor de idade"
  }
}

console.log(verificarIdade(19))

/*
2. Par ou ímpar / Crie uma função verificarParOuImpar(numero) que recebe um número inteiro e retorna:
"Par" se o número for par.
"Ímpar" se o número for ímpar.
*/
function verificarParOuImpar(numero){
  if (numero % 2 === 0){ // Se o resto da divisão por 2 for 0, o número é par
    return "Número é par"
  } else {
    return "Número é impar"
  }
  console.log(verificarParOuImpar(8))


/*
3. Calculadora simples / Crie uma função calculadora(a, b, operacao) que recebe dois números e uma string ('soma', 'subtracao', 'multiplicacao', 'divisao') e retorna o resultado da operação.
Exemplo: calculadora(10, 2, 'divisao') → 5
*/
  
/*
4. Classificador de notas / Crie uma função classificarNota(nota) que receba uma nota de 0 a 10 e retorne:
"Nota inválida" se for menor que 0 ou maior que 10
"Reprovado" se for menor que 5
"Recuperação" se for entre 5 e 6.9
"Aprovado" se for 7 ou mais
*/

function classificarNota(nota){
  if (nota < 0 || nota > 10){
    return "Nota Inválida"
} else if (nota < 5){
    return "Reprovado"
  } else if (nota > 5 && nota < 6.9){
    return "Recuperação"
  } else {
    return "Aprovado"
  }
  console.log(classificarNota(9))
  

/*
5. Validador de login /Crie uma função validarLogin(usuario, senha) que verifica se:
O usuário é "admin" e a senha é "1234".
Se ambos estiverem corretos, retorne "Login bem-sucedido", senão "Usuário ou senha incorretos".
*/

/*
6. Maior número / Crie uma função maiorNumero(a, b, c) que recebe três números e retorna o maior entre eles.
*/

/*  
7. Verificador de ano bissexto / Crie uma função ehBissexto(ano) que retorna true se o ano for bissexto, ou false caso contrário.
(Um ano é bissexto se for divisível por 4 e não for por 100, exceto se também for por 400)
*/

/*    
8. Calculadora de IMC / Crie uma função calcularIMC(peso, altura) que retorna o IMC e, com base no valor, retorna também:
"Abaixo do peso" (IMC < 18.5)
"Peso normal" (IMC entre 18.5 e 24.9)
"Sobrepeso" (IMC entre 25 e 29.9)
"Obesidade" (IMC >= 30)
*/


  
/*
9. Conversor de temperatura / Crie uma função converterTemperatura(valor, escala) que:
Se a escala for 'C', converte de Celsius para Fahrenheit.
Se a escala for 'F', converte de Fahrenheit para Celsius.
*/

/*  
10. Verificador de vogal ou consoante / Crie uma função verificarLetra(letra) que diz se a letra é:
"Vogal"
"Consoante"
"Caractere inválido" (caso não seja letra)
*/
