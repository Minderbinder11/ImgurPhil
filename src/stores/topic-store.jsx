var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
/* responsble for fetching and storing data */



module.exports = Reflux.createStore({

    listenables: [Actions],

    getTopics: function () {
        return Api.get('topics/defaults')
        .then(function(json){
            this.topics = json.data;
            this.triggerChange();
        }.bind(this));
    },

    triggerChange: function() {
        this.trigger('change', this.topics);
    }
});
