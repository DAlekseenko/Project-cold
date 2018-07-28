

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

    setTitle(title) {
        this.title = title;
    }

    render(componentHtml) {

        return `<!DOCTYPE html>
        <html>
            <head>
                <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
                <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
                <!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
                <!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
                <!--[if lt IE 9]>
                      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
                      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
                <![endif]-->
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="description" content="Ремонт и обслуживание систем кондиционирования">
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