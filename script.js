
// JavaScript валидация формы
(function() {
    'use strict';
    
    const form = document.getElementById('subscriptionForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const agreeTerms = document.getElementById('agreeTerms');
    
    // Функция проверки email
    function validateEmail(email) {
        return email.includes('@');
    }
    
    // Функция проверки пароля
    function validatePassword(password) {
        return password.length >= 6;
    }
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        let isFormValid = true;
        
        // Проверка email
        if (!validateEmail(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            isFormValid = false;
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }
        
        // Проверка пароля
        if (!validatePassword(passwordInput.value)) {
            passwordInput.classList.add('is-invalid');
            isFormValid = false;
        } else {
            passwordInput.classList.remove('is-invalid');
            passwordInput.classList.add('is-valid');
        }
        
        // Проверка чекбокса
        if (!agreeTerms.checked) {
            agreeTerms.classList.add('is-invalid');
            isFormValid = false;
        } else {
            agreeTerms.classList.remove('is-invalid');
        }
        
        if (isFormValid) {
            // В реальном приложении здесь был бы AJAX запрос
            alert('Спасибо за подписку! Вы успешно подписались на наши новости.');
            form.reset();
            // Сбрасываем стили валидации
            emailInput.classList.remove('is-valid', 'is-invalid');
            passwordInput.classList.remove('is-valid', 'is-invalid');
            agreeTerms.classList.remove('is-invalid');
        }
        
        form.classList.add('was-validated');
    });
    
    // Валидация при вводе (опционально, для лучшего UX)
    emailInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            if (!validateEmail(this.value)) {
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
            } else {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        } else {
            this.classList.remove('is-invalid', 'is-valid');
        }
    });
    
    passwordInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            if (!validatePassword(this.value)) {
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
            } else {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        } else {
            this.classList.remove('is-invalid', 'is-valid');
        }
    });
    
    agreeTerms.addEventListener('change', function() {
        if (this.checked) {
            this.classList.remove('is-invalid');
        }
    });
    
})();
