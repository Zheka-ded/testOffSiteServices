const form = document.querySelector('#testForm');

const submitBtn = form["submit-btn"];

// Выбор нужных полей формы и перевод в обычный массив
const inputList = [...form.elements].filter(elem => elem.type !== 'submit');

// Проверка поля почты
function checkEmail (elem) {

    let check = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;

    if(check.test(elem.value.trim())){
        removeError(elem)
        return elem.value.trim()
    } else {
        createError(elem)
        return false
    }
}

// Проверка поля текста
function checkText (elem) {

    if(elem.value.trim()) {
        removeError(elem)
        return elem.value.trim();
    } else{
        createError(elem)
        return false
    }
}

// Можно сказать основная функция
const checkFunk = function (e) {
    let result = {};

    let count = 0;

    e.preventDefault();

    // Проверка на тип формы и дальнейший выбор действий
    inputList.forEach(elem => {

        if(elem.type === 'text') result[elem.name] = checkText(elem);

        if(elem.type === 'email') result[elem.name] = checkEmail(elem);

    })

    // Подсчет полей которые прошли валидацию
    for (let key in result) {
        if(result[key] !== false) count++
    }
    // Если количество полей которые прошли валидацию
    // совпадакт с количеством полей ввода тогда отправляем форму
    if(count === inputList.length) {
        sendFormFunc()
        clearValue(inputList)
    }

}

submitBtn.onclick = checkFunk;

// Визуальное оповещение ошибки
function createError (elem) {
    let parent = elem.parentNode;
    let span = document.createElement('p');
    span.classList.add('error-message')
    span.style.color = 'red'
    span.textContent = `field ${elem.name} is filled incorrectly`;
    
    if(!parent.querySelector('.error-message')) parent.append(span);

    if(parent.querySelector('input')) parent.querySelector('input').classList.add('error');

    if(parent.querySelector('label')) parent.querySelector('label').classList.add('error');
}

// Удаление визуального оповещения ошибки
function removeError (elem) {
    let parent = elem.parentNode;

    if(parent.querySelector('.error-message')) parent.querySelector('.error-message').remove()

    if(parent.querySelector('input')) parent.querySelector('input').classList.remove('error')

    if(parent.querySelector('label')) parent.querySelector('label').classList.remove('error')
}

// Отправка формы
const sendFormFunc = () => alert('Form submitted')
// Очистка формы
const clearValue = elem => elem.forEach(elem => elem.value = '')