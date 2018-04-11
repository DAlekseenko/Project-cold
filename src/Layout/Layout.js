

export default class Layout {

    store   = null;
    title   = '';
    jsFile  = '';
    cssFile = '';

    constructor(jsFile, cssFile) {
        this.jsFile = jsFile;
        this.cssFile = cssFile
    }

    setStore(store) {
        this.store = store;
    }

    setProdMode() {
        this.isProd = true;
    }

    setTitle(title) {
        this.title = title;
    }

    render(componentHtml) {

        return `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${this.title}</title>
                <link rel="stylesheet" href="${this.cssFile}">
            </head>
            <body>
                <div id="app">${componentHtml}</div>
                <script type="application/javascript" src="${this.jsFile}"></script>
            </body>
        </html>`
    }
}