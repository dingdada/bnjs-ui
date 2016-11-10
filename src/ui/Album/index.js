/**
 * BNJS UI Album
 *
 * @file Album
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
        document.getElementById(this.options.renderTo).innerHTML = html;
        return html;
    }
}

module.exports = List;
