hexo.extend.tag.register('generate_links', function() {
    const fs = require('fs');
    const path = require('path');
    const profilesPath = path.join(hexo.source_dir, '/links/profiles.json');
    const profiles = JSON.parse(fs.readFileSync(profilesPath));

    let html = `
        <style>
            .profile-container {
                display: flex;
                flex-wrap: wrap;
            }
            .profile-item {
                flex: 1 1 45%;
                display: flex;
                align-items: center;
                margin: 10px;
                padding: 10px;
            }
            .profile-item img {
                border-radius: 50%;
                width: 64px;
                height: 64px;
                margin-right: 10px;
            }
            .profile-item .info {
                flex: 1;
            }
            .profile-item .name {
                font-weight: bold;
                font-size: 1.4em;
            }
            .profile-item .description {
                margin-down: 10px;
            }
            .profile-item a {
                text-decoration: none;
                color: inherit;
                display: flex;
                align-items: center;
                width: 100%;
            }
            @media (max-width: 600px) {
                .profile-item {
                    flex: 1 1 100%;
                }
            }
        </style>
        <div class="profile-container">
    `;

    profiles.forEach(profile => {
        html += `
            <div class="profile-item">
                <a href="${profile.url}">
                    <div style="display: flex; align-items: center;">
                        <img src="${profile.image}">
                        <div class="info">
                            <div class="name">${profile.name}</div>
                            <div class="description">${profile.description}</div>
                        </div>
                    </div>
                </a>
            </div>
        `;
    });

    html += '</div>';
    return html;
});
