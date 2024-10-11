const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
    member.addEventListener('click', () => {
        member.classList.toggle('clicked'); // Adiciona ou remove a classe 'clicked'
    });
});
