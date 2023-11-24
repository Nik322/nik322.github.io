function openRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'block';
}

function closeRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'none';
}

function flipCard(card) {
    card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
}
