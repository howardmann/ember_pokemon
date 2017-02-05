import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateMonster(){
      this.get('model').save();
      this.get('router').transitionTo('monsters');
    }
  }
});
