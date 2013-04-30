define(['backbone'], function(Backbone) {

    return Backbone.Model.extend({
        initialize: function() {
            this.set('completed', false);
        },

        isIncomplete: function() {
            return ! this.get('completed');
        }
    });
});
