
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('characters', [
        {
          name:'Brad Pitt',
          age:50,
          weight:81.1,
          history:'good actor',
          mov_serie:JSON.stringify(['fight club','Unglorious Bastards']),
          image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/1200px-Brad_Pitt_2019_by_Glenn_Francis.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
      
        },
        {
          name:'Leonardo Di Caprio',
          age:55,
          weight:83.1,
          history:'the best actor',
          mov_serie:JSON.stringify(['Titanic','The Revenant']),
          image:'https://www.metroworldnews.com/resizer/wKOI9LojjYVAfRifH9zyGnPtWVA=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/35/52/66/20426137.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
      
        },
        {
          name:'Robert De Niro',
          age:70,
          weight:91.1,
          history:'top3 actor',
          mov_serie:JSON.stringify(['GodFather','The irishman']),
          image:'https://upload.wikimedia.org/wikipedia/commons/5/58/Robert_De_Niro_Cannes_2016.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
  
    ] ,{})
    } catch (error) {
      console.log(error)
    }
   


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('characters',null,{})
  }
};
