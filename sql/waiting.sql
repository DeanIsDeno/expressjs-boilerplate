create table waiting
(
    store_key varchar(20)          not null comment '상점 KEY',
    num       int                  not null comment '웨이팅 번호',
    user_key  varchar(20)          not null comment '회원 KEY',
    status    enum ('W', 'E', 'C') not null comment '상태 W-웨이팅, E-입장, C-취소',
    primary key (store_key, num)
)
    comment '웨이팅 테이블';


insert into waiting(store_key, num, member_key, status)
values ('S2024032111181001', 1, 'U2024032111143801', 'W'),
       ('S2024032111181001', 2, 'U2024032111143802', 'W'),
       ('S2024032111181002', 1, 'U2024032111143803', 'W');