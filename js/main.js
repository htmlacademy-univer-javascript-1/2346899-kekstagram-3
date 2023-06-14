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

let lastId = 0;

const DESCRIPTIONS = [
  'Мой котик',
  'Моя собачка',
  'Мы с семьей',
  'Вчерашняя прогулка',
  'Встретились с друзьями',
  'Мой ужин',
  'Мой завтрак'
];

const createPhotoDetalization = () => {
  lastId++;
  return {
    id: lastId,
    url: `photos/${lastId}.jpg`,
    description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInt(15, 200),
    comments: getRandomInt(0, 200)
  };
};

// Создавая итоговый массив, мы изменяем lastId. Таким образом, если мы поптыемся создать
// еще один массив тем же билдером createPhotoDetalization, то в нем id не будут начинаться с 1,
// их перечисление продолжится из состояния после создания первого масива. При необходимости,
// можно переприсваивать lastId = 0, чтобы во всех массивах начальный id был равен 1.

const photoDetalizations = Array.from({length: 25}, createPhotoDetalization);

// Для проверки выведем полученный массив на консоль. Eslint на этом моменте выдает ошибку,
// будем ее игнорировать, так в коде все работает корректно.

/* eslint-disable no-console */
console.log(photoDetalizations);
/* eslint-enable no-console */
