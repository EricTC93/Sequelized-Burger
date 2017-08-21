module.exports = function(sequelize, DataTypes) {
  // Burger is a table the contains burgers
  //Each burger has a name a a bool that says if it was eaten or not
  var Burger = sequelize.define("Burger", {
    burger_name: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    
    devoured: {
    	type: DataTypes.BOOLEAN,
      defaultValue: false,
    	allowNull: false
    }
  
  });

  return Burger;
};