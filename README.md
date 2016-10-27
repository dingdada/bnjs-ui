# BNJS 2.0 UI

BNJS 2.0 UI

## 开发

clone代码到本地后

```
npm install
webpack --watch
```

控件代码在 `src/ui/WidgetName` ，在这里创建代码，在 `test/widgetName` 预览和调试，具体请参见 `src/ui/List`

## 技术规格

* 所有widgets，浏览器/nodejs端通用
* 只可以使用handlebars模板，而且也必须要使用
* 所有构建DOM的操作，必须通过模板引擎，不能使用js直接操作DOM
* 根据options构建不同DOM结构的，同上
