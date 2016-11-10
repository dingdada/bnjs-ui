/**
 * BNJS UI
 *
 * @file loader for BNJS-UI
 * @author dinglingjuan(dinglingjuan@baidu.com)
 */

/* eslint-disable no-use-before-define */

if (!window.BNJS) {
    window.BNJS = {};
}

const BNJS = window.BNJS;

BNJS.create = (id, options) => {
    return getWidget(id).then(Widget => {
        const widget = new Widget(options);
        return widget.render();
    });
};

const makeDefine = () => {
    let module = null;

    const getDefined = () => {
        return module;
    };

    BNJS.define = fn => {
        module = fn();
    };

    return getDefined;
};

const getDefined = makeDefine();

const getScriptSrcById = id => {
    // TODO baseUri path
    const relativePath = id.split('.').slice(1).join('/');
    return '../../dist/' + relativePath + '.js';
};

const loadWidget = id => {
    return new Promise((resolve, reject) => {

        const script = document.createElement('script');
        script.src = getScriptSrcById(id);
        script.addEventListener('load', () => {
            resolve(getDefined());
        });
        script.addEventListener('error', reject);
        document.head.appendChild(script);

    });
};

const loadedWidgets = {};

const getWidget = (id) => {

    if (!loadedWidgets[id]) {
        loadedWidgets[id] = loadWidget(id);
    }

    return loadedWidgets[id];
};