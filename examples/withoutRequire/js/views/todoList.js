App = App || {};
App.Views = App.Views || {};

App.Views.TodoList = Backbone.View.extend({
    initialize: function() {
        console.log("Views.TodoList.this.options.collection", this.options.collection);
    },
    render: function() {
        // Show this.options.collection
    },
});
