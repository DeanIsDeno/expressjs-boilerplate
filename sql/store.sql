create table store
(
    store_key varchar(20)  not null comment '상점 KEY'
        primary key,
    name      varchar(100) not null comment '상점명'
)
    comment '상점 테이블';

insert into store(store_key, name)
values ('S2024032111181001', '상점1'),
       ('S2024032111181002', '상점2'),
       ('S2024032111181003', '상점3');