import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions';
import {reduxSagaFirebase,fireStoreProvider} from '../../base';









function* getBasicInfoFromDb({payload}) {
  try {
    


    const {data}=payload;

    var getQuery="techresume/"+data+"";
    const snapshot = yield call(reduxSagaFirebase.firestore.getDocument, getQuery);
    const resume = snapshot.data();
    yield put(actions.setBasicInfoToStore(resume));
    
   
  } catch (error) {
    console.log(error);

  }
}




function* getCollectionsFromDb({payload}) {
  try {
    
    const {userId,collectionName}=payload;
 
    var skills=[];

    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, `techresume/${userId}/${collectionName}`);
    snapshot.forEach((doc) => {
      //  var id={"id":doc.id};
      //  var data=doc.data();
       const newItem = { ...doc.data(), Id: doc.id };
      skills.push(newItem);
     });
   var sortedSkills=  skills.sort((a, b) => (a.Order > b.Order) ? 1 : -1);
   yield put(actions.setCollectionToStore(sortedSkills,collectionName));
   
  } catch (error) {
    console.log(error);

  }

  
}





function* saveCollectionIntoDb({ payload }) {
  const { id,data,actionName,collectionName} = payload;
    

  
  try {
    switch (actionName) {
     
      case 'update':
      {
        
       debugger;
        // var query= `techresume/4Kn3Cbir0lWZOjhBWoMU/${collectionName}/${id}`;
        var query="techresume/4Kn3Cbir0lWZOjhBWoMU/Skills/"+id;
        yield call(
          reduxSagaFirebase.firestore.setDocument,
          query,
          data
        );
        break;

      }
}
yield put(actions.getCollectionsFromDb("4Kn3Cbir0lWZOjhBWoMU",collectionName));

  } catch (error) {
    console.log(error);
    yield put(actions.saveIntoDbError(error));
  }
}





function* saveBasicInfoIntoDb({ payload }) {
  const { id,data,actionName} = payload;
    

  
  try {
    switch (actionName) {
     
      case 'update':
      {
        
       debugger;
        var query= `techresume/${id}`;
        // var query="techresume/4Kn3Cbir0lWZOjhBWoMU";
        yield call(
          reduxSagaFirebase.firestore.setDocument,
          query,
          data
        );
        break;

      }
}
yield put(actions.getBasicInfoFromDb("4Kn3Cbir0lWZOjhBWoMU"));

  } catch (error) {
    console.log(error);
    yield put(actions.saveIntoDbError(error));
  }
}









export default function* rootSaga() {
  yield all([
    
    takeEvery(actions.GET_BASIC_INFO_FROM_DB, getBasicInfoFromDb),
    takeEvery(actions.GET_COLLECTIONS_FROM_DB, getCollectionsFromDb),

    takeEvery(actions.SAVE_COLLECTION_INTO_DB, saveCollectionIntoDb),
    
    takeEvery(actions.SAVE_BASIC_INFO_INTO_DB, saveBasicInfoIntoDb)
  

  ]);
}
