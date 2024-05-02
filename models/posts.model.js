/*
  This file contains the schema for the posts table in the database.
  It uses the sequelize.define() method to define the schema.
  The schema contains the following fields:
  - title: A string field that cannot be null.
  - description: A string field that cannot be null.
  - tag: A string field that cannot be null.
  - image: A string field that cannot be null.
*/

import { DataTypes } from "sequelize";
import { sequelize } from "../config/admin.js";

const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Post;
