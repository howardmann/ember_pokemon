import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteMonster(){
      if(confirm("Are you sure?")){
        let model = this.get('model');
        model.destroyRecord().then(()=>{
          this.get('router').transitionTo('monsters');
        });
      }
    }
  }
});
