const subjects = [
    { id: 1, name: 'زبان فارسی' },
    { id: 2, name: 'نگارش' },
    { id: 3, name: 'ریاضی' },
];

const lessons = [
    { id: 1, subject_id: 1, title: 'درس 1: آشنایی با کلمات' },
    { id: 2, subject_id: 2, title: 'درس 1: نوشتن جملات ساده' },
    { id: 3, subject_id: 3, title: 'درس 1: جمع و تفریق' },
];

const exercises = [
    { id: 1, lesson_id: 1, question: 'فعل جمله “بابا می‌خورد” چیست؟', answer: 'می‌خورد', type: 'تشخیص' },
    { id: 2, lesson_id: 2, question: 'یک جمله با کلمه “کتاب” بنویسید.', answer: 'کتاب روی میز است.', type: 'نوشتن' },
    { id: 3, lesson_id: 3, question: '5 + 3 چیست؟', answer: '8', type: 'محاسبه' },
];

document.getElementById('subject-select').addEventListener('change', function() {
    const subjectId = parseInt(this.value);
    const lessonSelect = document.getElementById('lesson-select');
    lessonSelect.innerHTML = '<option value="">درس را انتخاب کنید</option>';
    subjects.forEach(subject => {
        if (subject.id === subjectId) {
            lessons.forEach(lesson => {
                if (lesson.subject_id === subjectId) {
                    lessonSelect.innerHTML += `<option value="${lesson.id}">${lesson.title}</option>`;
                }
            });
        }
    });

    document.getElementById('lesson-title').style.display = 'block';
    lessonSelect.style.display = 'block';
    document.getElementById('load-exercise').style.display = 'block';
});

document.getElementById('load-exercise').addEventListener('click', function() {
    const lessonId = parseInt(document.getElementById('lesson-select').value);
    const exerciseContainer = document.getElementById('exercise-container');
    exerciseContainer.innerHTML = ''; // Clear previous exercise

    const selectedExercises = exercises.filter(ex => ex.lesson_id === lessonId);
    if (selectedExercises.length > 0) {
        const exercise = selectedExercises[Math.floor(Math.random() * selectedExercises.length)];
        exerciseContainer.innerHTML = `<h3>${exercise.question}</h3>`;
        
        if (exercise.type === 'نوشتن') {
            exerciseContainer.innerHTML += `<input type="text" id="answer-input" placeholder="پاسخ را وارد کنید">`;
        }

        exerciseContainer.innerHTML += `<button id="submit-answer">ارسال پاسخ</button>`;
        document.getElementById('submit-answer').addEventListener('click', function() {
            const userAnswer = document.getElementById('answer-input') ? document.getElementById('answer-input').value.trim() : '';
            if (userAnswer.toLowerCase() === exercise.answer.toLowerCase()) {
                alert('پاسخ شما درست است!');
                document.getElementById('load-exercise').click(); // بارگذاری تمرین جدید
            } else {
                alert(`پاسخ شما غلط است! پاسخ صحیح: ${exercise.answer}`);
            }
        });
    } else {
        exerciseContainer.innerHTML = '<p>هیچ تمرینی برای این درس موجود نیست.</p>';
    }
});
