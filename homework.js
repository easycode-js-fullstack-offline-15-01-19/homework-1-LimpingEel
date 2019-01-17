// -------------------------- Home work 1 --------------------------
// -------------------------- Дорошенко Никита Андреевич --------------------------


// Строки. Задачи.
// #1 Получить первую и последнюю буквы строки
let string = 'some test string';
value = string[0] + string[string.length -1];
console.log(value)

// #2 Сделать первую и последнюю буквы в верхнем регистре
value = string[0].toUpperCase() + string[string.length -1].toUpperCase();
console.log(value)

// #3 Найти положение слова ‘string’ в строке
value = string.indexOf('string');
console.log(value)

// #4 Найти положение второго пробела (“вручную” ничего не считать)
value = string.indexOf(' '); 
value = string.indexOf(' ', 5);
console.log(value)

// #5 Получить строку с 5-го символа длиной 4 буквы
value = string.substr(5, 4);
console.log(value)

// #6 Получить строку с 5-го по 9-й символы
value = string.slice(5, 10);
console.log(value)

// №7 Получить новую строку из исходной путем удаления последних 6-и символов
value = string.slice(0, -6);
console.log(value)

// #8 Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = '20',
	b = '16';
string = a + b;
console.log(string)



// Числа. Задачи.
// #1 Получить число pi из Math и округлить его до 2-х знаков после точки
value = Math.PI.toFixed(2);
console.log(value)

// #2  Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value)

value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value)

// #3a Получить случайное число и округлить его до двух цифр после запятой
value = Math.random().toFixed(2);
console.log(value)

// #3b Получить случайное целое число от 0 до X. X - любое произвольное число. 
value = Math.ceil(Math.random() * 500);
console.log(value)

// #4 Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let numbers = 0.6 + 0.7;
value = numbers == 1.3;
console.log(value)

value = numbers.toFixed(1);
console.log(value)

// #5 Получить число из строки ‘100$’
let money = '100$';
value = parseFloat(money);
console.log(value)



// Объекты. Задачи.
// #1 Создать объект с полем product, равным ‘iphone’
let shop = {
	product: 'iphone'
};
console.log(shop)

// #2 Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
shop.price = 1000;
shop.currency = 'dollar';

// #3 Добавить поле details, которое будет содержать объект с полями model и color
shop.details = {
	model: 'X',
	color: 'Silver'
};