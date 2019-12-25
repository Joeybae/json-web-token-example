# json-web-token-example

참고 : https://victorydntmd.tistory.com/116

1. jsonwebtoken database 생성

  # create datbase jsonwebtoken;
  
  - 결과
  
  mysql> show databases;
  +-----------------------+
  | Database              |
  +-----------------------+
  | information_schema    |
  | jsonwebtoken          |
  | mysql                 |
  | performance_schema    |
  | sys                   |
  +-----------------------+
  5 rows in set (0.00 sec)
  
2. user table 생성

  # sequelize db:migrate

  - 결과
  
  mysql> desc users;
  +-----------+--------------+------+-----+---------+----------------+
  | Field     | Type         | Null | Key | Default | Extra          |
  +-----------+--------------+------+-----+---------+----------------+
  | id        | int(11)      | NO   | PRI | NULL    | auto_increment |
  | email     | varchar(255) | NO   |     | NULL    |                |
  | pwd       | varchar(255) | NO   |     | NULL    |                |
  | createdAt | datetime     | NO   |     | NULL    |                |
  | updatedAt | datetime     | NO   |     | NULL    |                |
  +-----------+--------------+------+-----+---------+----------------+
  5 rows in set (0.00 sec)
