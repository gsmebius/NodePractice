module.exports = {
    async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Books', [{
        name: 'Libro segundo', 
        author: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },
    async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Books', null, {});
    }
  };
  
