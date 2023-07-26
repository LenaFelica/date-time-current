//* текущая дата и время - пряо сейчас
// console.log(new Date())
//

// const now = new Date()

//* в скобки передаем кол-во милисекунд, которые прошли с 1 января 1970
//* (1000) = 3: 00: 01 милиекунда
//* new Date(1000 * 60) - 03:01:00 - 1 секунда
//* new Date(1000 * 60 * 60) - 04:00:00 - доавили час
//* new Date(1000 * 60 * 60 * 24)  - получили 2 января
//* new Date(1000 * 60 * 60 * 24 * 365)  - получили 1 янв 03:00:00 1971 год
// const start = new Date(1000 * 60 * 60 * 24 * 365)

// console.log(start) //Thu Jan 01 1970 03:00:00 GMT+0300 (Москва, стандартное время)

//* хотим получить 2011 год

// const date = new Date(2011, 0, 4, 12, 42, 25) // в порядке - год, месяц, день и далее, часы, минуты, секунды

// console.log(date) //Tue Jan 04 2011 00:00:00 GMT+0300 (Москва, стандартное время)

//* какой сейчас год - get.... - получить
// console.log(now.getFullYear()) //2023
// console.log(now.getMonth()) // 6 (январь - это 0 месяц , ну и тд, как с массивами)
// console.log(now.getDate()) // 24
// console.log(now.getHours())
// console.log(now.getMinutes()) // и так далее - секунды милисекунды

//* set... - задавать какие-то значения:
//* все методы  - если поменять get на set- можно задавать вручную
//* главное, чтобы объект был от объекта new Date()
// now.setFullYear(2055, 2, 5)
// console.log(now)//Fri Mar 05 2055 18:05:09 GMT+0300 (Москва, стандартное время)


//* нужный формат

// console.log(now.toDateString()) //Mon Jul 24 2023 - тольео дата-  ничего лишнего
// console.log(now.toTimeString()) //показывает только время
// console.log(now.toLocaleDateString()) //24.07.2023 !!!!
// console.log(now.toLocaleTimeString()) //18:31:46 !!!!

//==================================
// const now = new Date()


// output.textContent = new Date().toLocaleDateString() // 25.07.2023
// output.textContent = new Date().toLocaleTimeString() //11:28:54


//* сли написать так, то бует сразу дата и врмя, но строчки дублируюутся
// output.textContent = format(mode)

//* если я обнавляю страницу, то у нас заглушка по умолчанию, потомучто в функию передаем new Date()
//* по хорошему надо напиать format(mode)
//* Дублирование строчек всегда плохо!!

//* поэтому создаем фнкцию update(), выносим в нее функционал из сетинтервала
//* в сет интервал передаем update()
//* и вызываем update() выше !

//* время В РЕАЛЬНОМ ВРЕМЕНИ
// setInterval(() => {
//    update()
// }, 1000)
//* та как в даном случае update не принимает никаких параметров
//* мы можем написать так:
// setInterval(update, 1000)
//
//* теперь надо оживить кнопи!!
// fullBn.onclick = () => {mode = 'full'}
// timeBn.onclick = () => {mode = 'time'}
// dateBn.onclick = () => {mode = 'date'}
//
//* update() вызывать на клике - чтобы не было задержки
//* и теперь переключние будет моментальное
//
//* эти функции анонимные меняют mode и вызывают update()
//* идеальный случай описать функционал через замыкание!!
//
//* fuction bindMode() {}
//
//* и теперь всем кликам присваиваем bindMode с именем!!


//мы заходим в приложение и по умолчанию time, если поставим date - будет дата, если фул - то и дата и время
let mode = 'full'; 
const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');


//* Замыкание!
function bindMode(name) {
    return function() {
      mode = name //mode будет присваивать себе name
      update() //и вызывать update()
    }
}

// fullBtn.onclick = function() {
//    mode = 'full'
//    update()
// }
// timeBtn.onclick = function() {
//    mode = 'time'
//    update()
// }
// dateBtn.onclick = function() {
//    mode = 'date'
//    update()
// }

fullBtn.onclick = bindMode('full')
timeBtn.onclick = bindMode('time')
dateBtn.onclick = bindMode('date')



setInterval(update, 1000)

update();

function update() {
   output.textContent = format(mode)
}

// Pure function
function format(formatMode) {
   const now = new Date()
    switch(formatMode) {
      case 'time': 
         return now.toLocaleTimeString()
      case 'date': 
         return now.toLocaleDateString()
      case 'full':
         return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
      default:
         return now.toLocaleTimeString()
      }
}

