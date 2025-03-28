export function generateIndexPage(): string {
    const introText = "Welcome to the SAP Cloud SDK for AI. This page provides quick access to various intelligent orchestration routes. Explore the categories below to get started with AI-powered workflows and processes.";

    const routes = [
        {
            path: '/orchestration/simple',
            description: 'Kickstart your AI workflow with simple orchestration',
            category: 'Basic Orchestration'
        },
        {
            path: '/orchestration/template',
            description: 'Create flexible AI processes using dynamic templates',
            category: 'Advanced Orchestration'
        },
        {
            path: '/orchestration/filtering',
            description: 'Master data filtering and manipulation techniques',
            category: 'Advanced Orchestration'
        },
        {
            path: '/orchestration-stream',
            description: 'Explore real-time streaming AI orchestration',
            category: 'Stream Processing'
        }
    ];

    // Group routes by category
    const categorizedRoutes = routes.reduce((acc, route) => {
        if (!acc[route.category]) {
            acc[route.category] = [];
        }
        acc[route.category].push(route);
        return acc;
    }, {} as Record<string, typeof routes>);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SAP Cloud SDK for AI</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/index.css">
        <script>
            function toggleDarkMode() {
                document.body.classList.toggle('dark-mode');
                localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
            }

            document.addEventListener('DOMContentLoaded', (event) => {
                if (localStorage.getItem('darkMode') === 'true') {
                    document.body.classList.add('dark-mode');
                }
            });
        </script>
    </head>
    <body>
        <div class="container">
            <header class="header">
                <h1>SAP Cloud SDK for AI</h1>
                <p>Navigate Through Intelligent Orchestration Routes</p>
                <button onclick="toggleDarkMode()" class="theme-toggle">Toggle Dark Mode</button>
            </header>

            <div class="intro">
                <p>${introText}</p>
            </div>

            <div class="route-categories">
                ${Object.entries(categorizedRoutes).map(([category, categoryRoutes]) => `
                    <section class="route-section">
                        <h2>${category}</h2>
                        <div class="route-list">
                            ${categoryRoutes.map(route => `
                                <div class="route-item">
                                    <a href="${route.path}">${route.path}</a>
                                    <p>${route.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                `).join('')}
            </div>
        </div>
    </body>
    </html>
    `;
}