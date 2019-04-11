const moment = require('moment');

angular.module('app', [])
  .service('clients', function(db) {

    db.defaults({ clients: [] }).write();

    const generateEndDate = (startDate) => {
      return moment(startDate).add(1, 'month').toDate();
    }

    const incrementId = (list) => {
      if (list.length <= 0) {
        return 1;
      }
      return list[list.length - 1].id + 1;
    }

    return {
      listeners: [],
      create: function(payload) {
        const list = this.list();
        const id = incrementId(list);
        const endDate = generateEndDate(payload.startDate);
        db.get('clients').push({ id, ...payload, endDate }).write();
        this.refresh();
      },
      list: function() {
        return db.get('clients').value();
      },
      update: function(id, payload) {
        db.get('clients').find({ id }).assign(payload).write();
      },
      remove: function(id) {
        db.get('clients').remove({ id }).write();
        this.refresh();
      },
      refresh: function() {
        this.listeners.map(listener => listener());
      },
    };
  });