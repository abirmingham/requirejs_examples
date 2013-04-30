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
