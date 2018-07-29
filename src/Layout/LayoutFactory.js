import Layout from './Layout'

export default new class LayoutFactory {

    url = '';
    cssFile = 'assets/styles.css';
    jsFile = 'assets/bundle.js';

    setUrl(url) {
        this.url = url;
        return this;
    }

    getCssFile() {
        return this.url + this.cssFile
    }

    getJsFile() {
        return this.url + this.jsFile
    }

    setJsFile(fileName) {
        this.jsFile = fileName;
        return this;
    }

    setCssFile(fileName) {
        this.cssFile = fileName;
        return this;
    }
    /**
     * @return {Layout}
     */
    getLayout() {
        return new Layout(this.getJsFile(), this.getCssFile(), this.url)
    }
}