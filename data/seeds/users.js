exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        // User 1
				{
					username: 'Yogi',
					password: 'bear',
					department: 'picnic'
				}
      ]);
    });
};