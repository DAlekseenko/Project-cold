export default class Layout {

    constructor(jsFile, cssFile, url) {
        this.store = null;
        this.jsFile = jsFile;
        this.cssFile = cssFile;
        this.url = url;
        this.title = '';
        this.description = '';
    }

    setStore(store) {
        this.store = store;
    }

    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }

    render(componentHtml) {

        return `<!DOCTYPE html>
        <html lang="ru">
            <head>
                <meta charset="utf-8">
                <meta name="yandex-verification" content="939609526306d3f8" />
                <meta name="google-site-verification" content="a_Z_vZQpCBCsW5ynHVzODUQHfKhPlE43TE5OGFF-kuM"/>
                <link rel="shortcut icon" href="${this.url}/images/favicon.ico" type="image/x-icon">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta 
                name="description" 
                content="${this.description}">
                <meta name="keywords" content="сервисное обслуживание кондиционеров, ремонт кондиционеров, монтаж сервисное обслуживание кондиционеров, сервисное обслуживание кондиционера москва, кондиционер ремонт обслуживание, кондиционер сервис техническое обслуживание кондиционеров, техническое обслуживание кондиционеров цена, стоимость технического обслуживания кондиционеров, кондиционер техобслуживание">
                <title>${this.title}</title>
                <link rel="stylesheet" href="${this.cssFile}">
                <!-- Yandex.Metrika counter -->
                <script type="text/javascript" >
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                    
                    ym(52948192, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                    });
                </script>
                <!-- /Yandex.Metrika counter -->
                <!-- Global site tag (gtag.js) - Google Analytics -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136874169-1"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                
                    gtag('config', 'UA-136874169-1');
                </script>

            </head>
            <body>
            <noscript><div><img src="https://mc.yandex.ru/watch/52948192" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
                <div id="app">${componentHtml}</div>
                <script type="application/javascript" src="${this.jsFile}"></script>
            </body>
        </html>`
    }
}