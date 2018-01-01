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

### Delete

#### deleteMany
```
db.collection('Todos').deleteMany({filterFormula}).then( (result) => {
    console.log(result);
})
```
- filterFormula  : 篩選用的條件式，若留空則會回傳所有物件 ex: name : "Andrew"
- result : 刪除資料的細節，其中含 n & ok 兩參數，n表刪除了幾個物件，ok表是否成功，1->成功
- deleteMany : 刪除所有符合條件的物件

#### deleteOne
```
db.collection('Todos').deleteOne({filterFormula}).then( (result) => {
    console.log(result);
})
```
- filterFormula  : 篩選用的條件式，若留空則會回傳所有物件 ex: name : "Andrew"
- result : 刪除資料的細節，其中含 n & ok 兩參數，n表刪除了幾個物件，ok表是否成功，1->成功
- deleteOne : 刪除符合條件的第一個物件

#### findOneAndDelete
```
db.collection('Todos').findOneAndDelete({filterFormula}).then( (result) => {
    console.log(result);
})
```
- filterFormula  : 篩選用的條件式，若留空則會回傳所有物件 ex: name : "Andrew"
- result : 刪除資料的細節，其中含 n & ok 兩參數，n表刪除了幾個物件，ok表是否成功，1->成功，且含有被刪除的該物件
- findOneAndDelete : 刪除符合條件的第一個物件，並且回傳該物件至result


### Update

#### findOneAndUpdate

```
db.collection('Todos').findOneAndUpdate({filterFormula}, {
    $set : {
        {anyProperty} : {updateValue}
    },
    $inc : {
        {numnerProperty} : {number}
    }
}, {
    returnOriginal : {true||false} 
}).then((result) => {
    console.log(result)
})
```
- filterFormula  : 篩選用的條件式，若留空則會回傳所有物件 ex: name : "Andrew"
- $set : 要更新的物件列表
	- anyProperty : 要更新得物件的key
	- updateValue : 要更新得值（value）
- $inc : 要做加法運算更新的物件
	-  numnerProperty : 要更新得物件的key(value需為數字)
	-  number : 要增加多少數字
- returnOriginal : 只有true & false兩種，若為true則回傳物件尚未被更新的所有值，若為false則回傳已更新的


#### objectID 
```
const {ObjectID} = require('mongodb')
var obj = new ObjectID({objectidName});
```
- objectID組成：[連結](http://www.cnblogs.com/xjk15082/archive/2011/09/18/2180792.html)
- ObjectID : 為mongodb內建的ObjectID模組
- obj : 為一個objectID物件
- objectidName : 可為任一objectid名字（用在查詢）

### ES6 Feature

#### Destructuring

```
const = {{objectKeyName}} = require({moduleNmae})

```

- objectKeyName : 為模組裡的物件名稱
- moduleName: 物件名稱
- destructuring : 可簡化程式碼，它會創造一個與objectKeyName的變數，並把value取出來

