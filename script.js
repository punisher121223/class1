const exercises = [
    { id: 1, subject_id: 1, question: 'فعل جمله “بابا می‌خورد” چیست؟', answer: 'می‌خورد', type: 'تشخیص' },
    { id: 2, subject_id: 2, question: 'یک جمله بنویسید', answer: '', type: 'نوشتن' },
    { id: 3, subject_id: 3, question: '5 + 3 چیست؟', answer: '8', type: 'محاسبه' },
];

document.getElementById('load-exercise').addEventListener('click', function() {
    const subjectId = parseInt(document.getElementById('subject-select').value);
    const exerciseContainer = document.getElementById('exercise-container');
    exerciseContainer.innerHTML = ''; // Clear previous exercise

    const selectedExercises = exercises.filter(ex => ex.subject_id === subjectId);
    if (selectedExercises.length > 0) {
        const exercise = selectedExercises[Math.floor(Math.random() * selectedExercises.length)];
        exerciseContainer.innerHTML = `<h3>${exercise.question}</h3>`;
        if (exercise.type === 'نوشتن') {
            exerciseContainer.innerHTML += `<input type="text" id="answer-input" placeholder="پاسخ را وارد کنید">`;
        }
        exerciseContainer.innerHTML += `<button id="submit-answer">ارسال پاسخ</button>`;
    } else {
        exerciseContainer.innerHTML = '<p>هیچ تمرینی برای این موضوع موجود نیست.</p>';
    }

    document.getElementById('submit-answer')?.addEventListener('click', function() {
        const userAnswer = document.getElementById('answer-input')?.value;
        if (userAnswer === exercise.answer) {
            alert('پاسخ شما درست است!');
        } else {
            alert(`پاسخ شما غلط است! پاسخ صحیح: ${exercise.answer}`);
        }
    });
});
