'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {});
  
  User.associate = function(models) {
    User.belongsTo(models.Role, { foreignKey: 'roleId', as: 'role' });
  };
  
  return User;
};
