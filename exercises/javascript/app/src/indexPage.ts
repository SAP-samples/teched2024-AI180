interface Route {
    path: string;
    title: string;
    description: string;
}

const routes: Route[] = [
    {
        path: '/orchestration/simple',
        title: 'Simple Orchestration',
        description: 'Perform a basic chat completion using the OrchestrationClient.'
    },
    {
        path: '/orchestration/template',
        title: 'Dynamic Templates',
        description: 'Use templating to create prompts with placeholders for input parameters.'
    },
    {
        path: '/orchestration/filtering',
        title: 'Content Filtering',
        description: 'Apply input filtering to ensure content safety.'
    },
    {
        path: '/orchestration-stream',
        title: 'Streaming Orchestration',
        description: 'Implement real-time streaming for chat completion responses.'
    }
];

export function generateIndexPage(): string {
    const routeItems = routes.map(route => `
        <li class="route-item">
            <h2>${route.title}</h2>
            <p>${route.description}</p>
            <a href="${route.path}">Explore</a>
        </li>
    `).join('');

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SAP Cloud SDK for AI - Intelligent Orchestration</title>
        <link rel="stylesheet" href="/index.css">
        <style>
            body {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .route-list {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }
            .route-item {
                width: 100%;
                max-width: 600px;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>SAP Cloud SDK for AI - Intelligent Orchestration</h1>
        </header>
        <main>
            <nav>
                <ul class="route-list">
                    ${routeItems}
                </ul>
            </nav>
        </main>
    </body>
    </html>
    `;
}
