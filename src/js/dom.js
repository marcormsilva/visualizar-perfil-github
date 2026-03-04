export function showLoading(container) {
    container.innerHTML = '<p class="loading">Carregando...</p>';
}

export function renderProfile(container, userData) {
    container.innerHTML = `
        <div class = "profile-card">
            <img src="${userData.avatar_url}" alt= "Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || 'Sem biografia disponível 😔😔.'}</p>
            </div>
        </div>
        <div class = "profile-counters">
            <div class="followers">
                <h4>🥷Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>🥷Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>`;
}

export function clearProfile(container) {
    container.innerHTML = '';
}
