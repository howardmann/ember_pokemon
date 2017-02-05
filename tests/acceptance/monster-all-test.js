import { test } from 'qunit';
import moduleForAcceptance from 'ember-pokemon/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | monster all');

test('visiting /monsters', function(assert) {
  visit('/monsters');

  andThen(function() {
    assert.equal(currentURL(), '/monsters', 'displays correct url');
    assert.equal(find('.monster-all-test').length, 10, 'displays 10 monsters');
    assert.equal(find('.monster-all-test:last').text().trim(), 'Charmander', 'last monster name is Charmander');
  });

  click('.monster-all-test:first');

  andThen(function(){
    assert.equal(currentURL(), '/monsters/1', 'redirects to correct show page');
  });
});
