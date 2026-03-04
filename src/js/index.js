import { fetchGithubUser } from './api.js';
import { showLoading, renderProfile, clearProfile } from './dom.js';

const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        showLoading(profileResults);
        try {
            const userData = await fetchGithubUser(userName);
            renderProfile(profileResults, userData);
        } catch (error) {
            alert('Usuário não encontrado. Por favor, tente novamente.');
            clearProfile(profileResults);
        }
    } else {
        alert('Por favor, digite um nome de usuário do Github.');
    }
});

