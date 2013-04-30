App = App || {};
App.Models = App.Models || {};

App.Models.Todo = Backbone.Model.extend({
    initialize: function() {
        this.set('completed', false);
    },
    isIncomplete: function() {
        return ! this.get('completed');
    }
});

App = App || {};
App.Collections = App.Collections || {};

App.Collections.TodoList = Backbone.Collection.extend({
    model: App.Models.Todo,
    initialize: function() {
        this.add(new App.Models.Todo({ text: 'Build this with require.js' }));
        console.log("TodoList collection instantiated", this);
    }
});

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

$(function() {
    new App.Views.Global();
});
