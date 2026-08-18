namespace bookshop;

using { Currency, managed, cuid } from '@sap/cds/common';

entity Books : cuid, managed {
  title  : String(200) not null;
  author : String(150);
  descr  : String(2000);
  price  : Decimal(9,2);
  currency : Currency;
  stock  : Integer default 0;
}
