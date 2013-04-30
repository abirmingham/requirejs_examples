define(['backbone', 'models/todo'], function(Backbone, Todo) {

    return Backbone.Collection.extend({
        model: Todo,

        initialize: function() {
            this.add(new Todo({ text: 'Build this without require.js' }));
            console.log("TodoList collection instantiated", this);
        }
    });
});
