let num = [5, 8, 2, 9, 3]
num[5] = 6 // Bota um elemento na posição definida
num.push(7) // Adiciona um elemento no fim do array

console.log(`${num}`) // Mostra o num
console.log(num.length) // Tamanho do num
console.log(num[0]) // 1º elemento do num
console.log(`${num.sort()}`) // sort() ordena o num, o padrão é crescente

for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}