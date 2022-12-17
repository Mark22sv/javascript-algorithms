/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
*/

function anagram(str1, str2) {
    str1 = str1.toLowerCase().split('');
    str2 = str2.toLowerCase().split('');
    if (str1.length === str2.length && !(str1.every((element, index) => str2[index].includes(element))))
        return str1.sort().every(element => str2.sort().includes(element));
    else return false;

}
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP'));


