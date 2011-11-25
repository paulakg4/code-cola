var YUI_config = {
    groups: {}
};
YUI_config.groups['codecola'] = {
    combine: false,
    base :'https://raw.github.com/paulakg4/code-cola/master/',
    modules:{
        'codecola-i18n': function(){
            var language = navigator.language.toLowerCase() == 'zh-cn'?'zh-CN':'en';
            return {
                fullpath: '/codecola/native/'+language+'.js'
            }
        }(),
        'codecola-color-css': {
            fullpath: '/codecola/master/code-cola-widget/src/color/codecola-color.css',
            type: 'css'
        },
        'codecola-color': {
            fullpath: '/codecola/master/code-cola-widget/src/color/codecola-color.js',
            requires: ['node', 'widget-base', 'codecola-color-css']
        },
        'codecola-degree-css': {
            fullpath: '/codecola/master/code-cola-widget/src/degree/codecola-degree.css',
            type: 'css'
        },
        'codecola-degree': {
            fullpath: '/codecola/master/code-cola-widget/src/degree/codecola-degree.js',
            requires: ['node', 'widget-base', 'codecola-degree-css']
        },
        'codecola-gradient-css': {
            fullpath: '/codecola/master/code-cola-widget/src/gradient/codecola-gradient.css',
            type: 'css'
        },
        'codecola-gradient': {
            fullpath: '/codecola/master/code-cola-widget/src/gradient/codecola-gradient.js',
            requires: ['codecola-color', 'node', 'widget-base', 'ua', 'codecola-gradient-css']
        },
        'codecola-css': {
            fullpath: '/codecola/master/codecola.css',
            type: 'css'
        },
        'codecola-plugs': {
            fullpath: '/codecola/master/plugin.js'
        },
        'codecola': {
            fullpath: '/codecola/master/codecola.js',
            requires: ['codecola-i18n', 'codecola-plugs', 'codecola-color', 'codecola-gradient', 'codecola-degree', 'codecola-css', 'widget-base', 'node-base', 'event-base', 'io-base', 'dd-plugin', 'ua', 'json-parse']
        }
    }
};