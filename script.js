const persianAlphabet = ['الف', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی'];

const mathTopics = ['جمع', 'تفریق', 'ضرب', 'تقسیم'];
const writingTopics = ['نوشتن حروف', 'نوشتن کلمات', 'نوشتن جملات'];

let currentExercises = [];
let currentAnswer = "";

function selectLanguage(language) {
    let content = document.getElementById('content');
    content.innerHTML = ''; // پاک کردن محتوای قبلی
    document.getElementById('result').innerHTML = ''; // پاک کردن نتیجه قبلی
    currentExercises = []; // پاک کردن تمرینات قبلی

    if (language === 'persian') {
        persianAlphabet.forEach(letter => {
            const button = document.createElement('button');
            button.innerText = letter;
            button.onclick = () => generatePersianExercise(letter);
            content.appendChild(button);
        });
    } else if (language === 'math') {
        mathTopics.forEach(topic => {
            const button = document.createElement('button');
            button.innerText = topic;
            button.onclick = () => generateMathExercise(topic);
            content.appendChild(button);
        });
    } else if (language === 'writing') {
        writingTopics.forEach(topic => {
            const button = document.createElement('button');
            button.innerText = topic;
            button.onclick = () => generateWritingExercise(topic);
            content.appendChild(button);
        });
    }
}

function generatePersianExercise(letter) {
    const question = `کلمه‌ای که با "${letter}" شروع می‌شود را بنویسید:`;
    currentExercises.push({ letter, question, answer: letter });
    displayExercise(question);
}

function generateMathExercise(topic) {
    let question, answer;
    switch (topic) {
        case 'جمع':
            question = '5 + 3 = ?';
            answer = '8';
            break;
        case 'تفریق':
            question = '9 - 4 = ?';
            answer = '5';
            break;
        case 'ضرب':
            question = '3 × 2 = ?';
            answer = '6';
            break;
        case 'تقسیم':
            question = '16 ÷ 4 = ?';
            answer = '4';
            break;
        default:
            question = '';
            answer = '';
    }

    currentExercises.push({ topic, question, answer });
    displayExercise(question);
}

function generateWritingExercise(topic) {
    let question, answer;
    switch (topic) {
        case 'نوشتن حروف':
            question = 'حرف الف را بنویسید:';
            answer = 'الف';
            break;
        case 'نوشتن کلمات':
            question = 'کلمه "کتاب" را بنویسید:';
            answer = 'کتاب';
            break;
        case 'نوشتن جملات':
            question = 'جمله‌ای به مناسبت "عید" بنویسید:';
            answer = 'عید مبارک';
            break;
        default:
            question = '';
            answer = '';
    }

    currentExercises.push({ topic, question, answer });
    displayExercise(question);
}

function displayExercise(question) {
    let content = document.getElementById('content');
    content.innerHTML = `<p>${question}</p>`;
    
    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.placeholder = 'پاسخ خود را وارد کنید';

    const submitButton = document.createElement('button');
    submitButton.classList.add('submit');
    submitButton.innerText = 'ارسال';
    submitButton.onclick = () => {
        handleAnswer(answerInput.value);
        answerInput.value = ''; // پاک کردن ورودی
    };

    content.appendChild(answerInput);
    content.appendChild(submitButton);
}

function handleAnswer(userAnswer) {
    const currentExercise = currentExercises[currentExercises.length - 1];
    const isCorrect = userAnswer.trim() === currentExercise.answer;

    const resultDiv = document.getElementById('result');
    if (isCorrect) {
        resultDiv.innerHTML = 'پاسخ صحیح است!';
    } else {
        resultDiv.innerHTML = `پاسخ نادرست است، جواب صحیح: ${currentExercise.answer}`;
    }
}

