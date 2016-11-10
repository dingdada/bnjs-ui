/**
 * BNJS UI
 *
 * @file loader for BNJS-UI
 * @author shaoshuai02@baidu.com
 */

if (!window.BNJS) {
    window.BNJS = {};
}

let BNJS = window.BNJS;

const existedWidgets = {};

BNJS.create = (id, options) => {
    // loader
    // load widget and instance with options

    return load(id).then(Widget => {

        const widget = new Widget(options);
        return widget.render();
    });
};

const getDefined = (defined => {
    BNJS.define = factory => void (defined = factory);
    return () => defined;
})();


function load(id) {

    if (!existedWidgets[id]) {

        const relativePath = id.split('.').slice(1).join('/');

        // TODO baseUri path
        const absolutePath = '../../dist/' + relativePath + '.js';

        existedWidgets[id] = new Promise((resolve, reject) => {

            const script = Object.assign(document.createElement('script'), {
                src: absolutePath,
                charset: 'utf-8',
                onload() {
                    resolve(getDefined()());
                },
                onerror: reject
            });

            document.head.appendChild(script);
        });
    }

    return existedWidgets[id];
}
