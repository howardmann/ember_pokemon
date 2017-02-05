import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateMonster(){
      this.get('model').save();
      this.transitionToRoute('monsters');
    }
  }
});
