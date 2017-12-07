import Component from '@ember/component';

export default Component.extend({
  actions: {
    showCharacter(person) {
      Ember.$('h2').text(person);
    }
  }
});
