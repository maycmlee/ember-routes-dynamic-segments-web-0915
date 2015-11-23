import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('artist', params["artist_id"]);
  }
  //model(params){...} is not needed because if you named your dynamic segment after a model, it will try to look that model up automatically. 
});
