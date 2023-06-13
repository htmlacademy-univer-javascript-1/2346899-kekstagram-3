// Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomInt(from, to) {
  if (from < 0 || to < 0) {
    return 'Диапазон должен быть положительным (включая ноль)';
  }
  if (from === to) {
    return from;
  }
  if (from > to) {
    // Деструктурирующее присваивание, избегаем лишней переменной.
    [from, to] = [to, from];
  }
  // Math.random() возвращает случайное число от 0 до 1.
  // Из этого числа получаем число из интервала и округляем до целого.
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

// Функция для проверки максимальной длины строки.
function checkStringLength(string, maxLength) {
  // Проверяем, что аргументы являются строкой и числом: повышвет защищенность от ошибок.
  // Оператор typeof возвращает строку с типом значения.
  if (typeof string !== 'string' || typeof maxLength !== 'number') {
    return 'Аргументы должны быть строкой и числом';
  }
  // .length возвращает длину строки, массива или объекта, подобного массиву.
  return string.length <= maxLength;
}

checkStringLength();
getRandomInt();
