requirejs.config({
    paths: {
        jquery:     'http://code.jquery.com/jquery-1.9.1',
        underscore: '../../../assets/underscore.amd',
        backbone:   '../../../assets/backbone.amd'
    }
});

require(['jquery', 'views/app'], function($, AppView) {
    $(function() {
        new AppView();
    });
});
