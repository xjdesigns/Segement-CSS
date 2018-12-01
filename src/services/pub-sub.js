export const pubsub = {
  events: {},

  subscribe: function(event, listener) {
    if(!this.events[event]) this.events[event] = [];
    var self = this

    const index = this.events[event].push(listener) -1

    return {
      remove: function () {
        delete self.events[event][index]
      }
    }
  },

  publish: function(event, data) {
    if(!this.events[event] || this.events[event].length < 1) return;

    this.events[event].forEach(function(listener) {
      listener(data || {})
    });
  }
}
