/**
 * BNJS UI
 *
 * @author shaoshuai02@baidu.com
 */

if (!window.BNJS) {
    window.BNJS = {};
}

BNJS.create = (id, options) => {
    // loader
    // load widget and instance with options
    const Widget = load(id);
    const widget = new Widget(options);
    return Promise.resolve(widget.render());
};