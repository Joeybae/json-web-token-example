# json-web-token-example

참고 : https://victorydntmd.tistory.com/116

----------------------------------------

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

3. 계정 생성

        # insert into users (email, pwd, createdAt, updatedAt) values ('foo@example.com', '1234', current_timestamp, current_timestamp), ('goo@example.com', '1111', current_timestamp, current_timestamp);

  - 결과
  
         mysql> select * from users;                                                                                                 +----+-----------------+------+---------------------+---------------------+
        | id | email           | pwd  | createdAt           | updatedAt           |
        +----+-----------------+------+---------------------+---------------------+
        |  1 | foo@example.com | 1234 | 2019-12-25 18:10:30 | 2019-12-25 18:10:30 |
        |  2 | goo@example.com | 1111 | 2019-12-25 18:11:07 | 2019-12-25 18:11:07 |
        +----+-----------------+------+---------------------+---------------------+
        2 rows in set (0.00 sec)

4. json-web-token-example 다운로드 및 설치

        # cd somewhere/json-web-token-example-master

        # npm install

5. 결과 확인

        # npm start
  
  - token 발행
  
        # localhost:3000/login
  
  - 결과
  
        # {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZvb0BleGFtcGxlLmNvbSIsImlhdCI6MTU3NzI2NzczOCwiZXhwIjoxNTc3MjY4MDM4fQ.lAl_L8p6pEHRJAnWnKxOXc3NVTpPajdlApDOQ0g-VTU"}
  
  - 연결확인
  
        # localhost:3000/someAPI
  
  - 결과
  
        # 권한이 있어서 API 수행 가능
