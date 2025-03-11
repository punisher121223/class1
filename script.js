const persianAlphabet = ['الف', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی'];

const mathTopics = ['جمع', 'تفریق', 'ضرب', 'تقسیم'];
const writingTopics = ['نوشتن حروف', 'نوشتن کلمات', 'نوشتن جملات'];

function selectLanguage(language) {
    let content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    if (language === 'persian') {
        persianAlphabet.forEach(letter => {
            const button = document.createElement('button');
            button.innerText = letter;
            button.onclick = () => showExercise(letter);
            content.appendChild(button);
        });
    } else if (language === 'math') {
        mathTopics.forEach(topic => {
            const button = document.createElement('button');
            button.innerText = topic;
            button.onclick = () => showMathExercise(topic);
            content.appendChild(button);
        });
    } else if (language === 'writing') {
        writingTopics.forEach(topic => {
            const button = document.createElement('button');
            button.innerText = topic;
            button.onclick = () => showWritingExercise(topic);
            content.appendChild(button);
        });
    }
}

function showExercise(letter) {
    const exercise = `تمرین برای حرف ${letter}: `;
    const options = ['گزینه ۱', 'گزینه ۲'];
    displayQuestion(exercise, options);
}

function showMathExercise(topic) {
    const exercise = `تمرین برای ${topic}: `;
    const options = ['گزینه ۱', 'گزینه ۲'];
    displayQuestion(exercise, options);
}

function showWritingExercise(topic) {
    const exercise = `تمرین برای ${topic}: `;
    const options = ['گزینه ۱', 'گزینه ۲'];
    displayQuestion(exercise, options);
}

function displayQuestion(exercise, options) {
    let content = document.getElementById('content');
    content.innerHTML = `<h2>${exercise}</h2>`;
    
    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        content.appendChild(button);
    });
}
