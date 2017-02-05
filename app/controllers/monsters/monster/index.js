import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteMonster(){
      if(confirm("Are you sure?")){
        let model = this.get('model');
        model.destroyRecord().then(()=>{
          this.transitionToRoute('monsters');
        });
      }
    }
  }
});
