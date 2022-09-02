module.exports = {
    async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Authors', [{
        firstName: 'John', 
        lastName: 'Doe', 
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },
    async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Authors', null, {});
    }
  };
  
