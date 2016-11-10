/**
 * BNJS UI List
 *
 * @file List
 * @author shaoshuai02@baidu.com
 */

require('./style.less');
const template = require('./tpl.hbs');

class List {
    constructor(options) {
        this.options = options;
    }

    render() {
        const html = template(this.options.data);
        // if (isBrowser) {
        document.getElementById(this.options.renderTo).innerHTML = html;
        // }
        return html;
    }
}

module.exports = List;
