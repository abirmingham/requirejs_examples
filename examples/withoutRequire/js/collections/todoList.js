App = App || {};
App.Collections = App.Collections || {};

App.Collections.TodoList = Backbone.Collection.extend({
    model: App.Models.Todo,
    initialize: function() {
        this.add(new App.Models.Todo({ text: 'Build this with require.js' }));
        console.log("TodoList collection instantiated", this);
    }
});
