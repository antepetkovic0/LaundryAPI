module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define(
    "Permission",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {}
  );

  Permission.associate = (models) => {
    Permission.belongsToMany(models.Role, {
      through: "RolePermission",
      foreignKey: "permissionId",
      as: "roles",
    });
  };

  return Permission;
};
