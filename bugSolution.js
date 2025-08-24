The issue might be due to asynchronous operations. While the `set()` method returns a promise, the `console.log` might be executing before the data is actually written. Here is a solution which uses `get()` to check for the data after writing: 

```javascript
// Assuming necessary Firebase initialization has been done

db.collection('myCollection').doc('myDoc').set({
  fieldName: 'myValue'
}).then(() => {
  // Wait for data to be written before confirming
  db.collection('myCollection').doc('myDoc').get().then((doc) => {
    if (doc.exists) {
      console.log('Data written successfully!', doc.data());
    } else {
      console.log('Data not written.');
    }
  }).catch(error => {
      console.error('Error getting data: ', error);
  });
}).catch((error) => {
  console.error('Error writing document: ', error);
});
```

Another potential problem is a race condition if another part of your application is modifying the same document.  Consider using transactions or optimistic concurrency control techniques for data consistency if this scenario is relevant.