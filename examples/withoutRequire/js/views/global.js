import "../views/todoList"

App = App || {};
App.Views = App.Views || {};

App.Views.Global = Backbone.View.extend({
    initialize: function() {
        this.todoListView = new App.Views.TodoList({ collection: new App.Collections.TodoList() });
        // this.$el.append(this.todoListView.el);
    },
    render: function() {
        this.$el.text("Backbone stuff gutted so reader can focus on require.js");
        // this.todoListView.render()
    },
});
