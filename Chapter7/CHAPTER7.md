# Chapter7

### Mongo Native

#### MongoClient => Connect（連線）

```
const MongoClient = require('mongodb').MongoClient; 
MongoCient.connect({url},{callbackFunction})

```
- url : mongodb database所在網址，若為本地端的話通常為 mongodb://localhost:27017
- callbackFunction : 通常含有兩個參數 : err & client(db)
	-  err : 連線錯誤時的錯誤訊息
	-  client(db) : 連線正確時，回傳的正確連線物件 
 

#### Insert

```
// client should be as a conneted db after Mongoclient connect the db
const db = client.db({documentName})
db.collection({collectionName}).insertOne({objectDetail})
```
- documentName : 選定資料表的名稱
- collectionName : 選定產生物件(Table)的名稱
- objectDetail : 要插入物件的詳細資料（可以有多組 key : value）

#### Find
##### Object

```
db.collection({collectionName}).find({filterFormula}).toArray().then((docs) => {
      console.log(JSON.stringify(docs,undefined,2))
}, (err) => {
      console.log('Unable to fetch todos ', err)
})
```
- collectionName : 為選定產生物件(Table)的名稱 
- filterFormula  : 篩選用的條件式，若留空則會回傳所有物件 ex: name : "Andrew"
- toArray : 表示把此物件轉為陣列
- 將會回傳符合條件的「物件」


##### Count
```
db.collection({collectionName}).count({filterFormula}).toArray().then((docs) => {
      console.log(JSON.stringify(docs,undefined,2))
}, (err) => {
      console.log('Unable to fetch todos ', err)
})
```
- collectionName : 為選定產生物件(Table)的名稱 
- filterFormula  : 篩選用的條件式，若留空則會回傳所有物件 ex: name : "Andrew"
- 將會回傳符合條件的物件的「數量」



#### objectID => [詳細分析](http://www.cnblogs.com/xjk15082/archive/2011/09/18/2180792.html)

### ES6 Feature

#### Destructuring

```
const = {{objectKeyName}} = require({moduleNmae})

```

- objectKeyName : 為模組裡的物件名稱
- moduleName: 物件名稱
- destructuring : 可簡化程式碼，它會創造一個與objectKeyName的變數，並把value取出來

