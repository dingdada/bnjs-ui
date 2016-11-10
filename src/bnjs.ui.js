/**
 * BNJS UI
 *
 * @file loader for BNJS-UI
 * @author shaoshuai02@baidu.com
 */

/* eslint-disable no-use-before-define */

if (!window.BNJS) {
    window.BNJS = {};
}

const BNJS = window.BNJS;

BNJS.create = (id, options) => {
    return fetchWidgetById(id).then(Widget => {
        const widget = new Widget(options);
        return widget.render();
    });
};

const fetchWidgetById = (() => {
    const existedWidgets = {};

    return id => {
        if (existedWidgets[id]) {
            return Promise.resolve(existedWidgets[id]);
        }

        const relativePath = id.split('.').slice(1).join('/');

        // TODO baseUri path
        const absolutePath =  '../../dist/' + relativePath + '.js';

        return load(absolutePath).then(factory => {
            const Widget = factory();

            existedWidgets[id] = Widget;

            return Widget;
        });
    };
})();

const load = path => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');

        const options = {
            src: path,
            charset: 'utf-8',
            onload() {
                resolve(getCurrentFactory());
            },
            onerror: reject
        };

        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                script[key] = options[key];
            }
        }

        document.head.appendChild(script);
    });
};

const getCurrentFactory = (() => {
    let currentFactory;

    BNJS.define = factory => void (currentFactory = factory);

    return () => currentFactory;
})();
