"use strict";

module.exports = (sequelize, DataTypes) => {
  const UserSchema = sequelize.define(
    "User",
    {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      tableName: "Users",
      underscored: true,
      timestamps: false,
    }
  );

  return UserSchema;
};
