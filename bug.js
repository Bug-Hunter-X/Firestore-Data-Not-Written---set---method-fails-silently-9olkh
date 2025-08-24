In a Firebase project, I'm encountering an issue where data isn't being written to Firestore as expected. The `set()` method appears to be successful (no errors are thrown), but the data doesn't show up in the Firestore console.  I've checked the security rules, and they seem to allow writes from my client app.  The code is structured like this: 

```javascript
// Assuming necessary Firebase initialization has been done

db.collection('myCollection').doc('myDoc').set({
  fieldName: 'myValue'
}).then(() => {
  console.log('Data written successfully!');
}).catch((error) => {
  console.error('Error writing document: ', error);
});
```

No errors are logged, yet the data remains absent.