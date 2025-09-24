const defaultConfig = {
    theme: 'light',
    language: 'fa',
    notifications: true
};

function initApp(userConfig = {}) {
    const {
        theme = 'light',
        language = 'fa',
        notifications = true,
        fontSize = 16
    } = userConfig;

    console.log(`پیکربندی: ${theme}, ${language}, ${fontSize}`);
}

initApp({ theme: 'dark', fontSize: 18 });
