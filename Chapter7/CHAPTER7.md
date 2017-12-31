# Chapter7

### Mongo Native

####MongoClient => Connect（連線）

```
const MongoClient = require('mongodb').MongoClient; 
MongoCient.connect({url},{callbackfunction})

```
- url : mongodb database所在網址，若為本地端的話通常為mongodb://localhost:27017
- callbackfunction : 通常含有兩個參數 : err & client(db)
	-  err : 連線錯誤時的錯誤訊息
	-  client(db) : 連線正確時，回傳的正確連線物件 
 

#### db.collection => Insert

```
// client should be as a conneted db after Mongoclient connect the db
const db = client.db({documentName})
db.collection({collectionName}).insertOne({objectDetail})
```
- documentName : 為選定資料表的名稱
- collectionName : 為選定產生物件(Table)的名稱
- objectDetail : 要插入物件的詳細資料（可以有多組 key : value）