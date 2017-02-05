import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  newMonster: {},
  actions: {
    createMonster(){
      let model = this.get('store').createRecord('monster', this.get('newMonster'));
      model.save();
      this.get('router').transitionTo('monsters');
      this.set('newMonster', {});
    }
  }
});
