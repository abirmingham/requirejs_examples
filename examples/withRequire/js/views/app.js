define(['backbone', 'collections/todoList', 'views/todoList'], function(Backbone, TodoList, TodoListView) {
    return Backbone.View.extend({
        initialize: function() {
            this.todoListView = new TodoListView({ collection: new TodoList() });
        },
        render: function() {
            this.$el.text("Backbone stuff gutted so reader can focus on require.js");
        },
    });
});
