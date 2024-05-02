/* Create a database and a table with some data
    Run this script in MySQL Workbench or any other MySQL client when you are connecting for the first time.
 */

CREATE DATABASE posts;
USE posts;

CREATE TABLE Posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  tag VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO posts (title, description, tag, image) VALUES
('Post 1', 'Description 1', 'Tag 1', 'image1.jpg'),
('Post 2', 'Description 2', 'Tag 2', 'image2.jpg');
