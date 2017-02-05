import Ember from 'ember';

export default Ember.Controller.extend({
  newMonster: {},
  actions: {
    createMonster(){
      let model = this.store.createRecord('monster', this.get('newMonster'));
      model.save();
      this.transitionToRoute('monsters');
      this.set('newMonster', {});
    }
  }
});
