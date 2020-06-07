const DOCUMENT = 'RESUME_';

const actions = {

  GET_BASIC_INFO_FROM_DB: DOCUMENT + 'GET_BASIC_INFO_FROM_DB',
  SET_BASIC_INFO_TO_STORE: DOCUMENT + 'SET_BASIC_INFO_TO_STORE',
  GET_COLLECTIONS_FROM_DB: DOCUMENT + 'GET_COLLECTIONS_FROM_DB',
  SET_COLLECTION_TO_STORE: DOCUMENT + 'SET_COLLECTION_TO_STORE',
  SAVE_COLLECTION_INTO_DB: DOCUMENT + 'SAVE_COLLECTION_INTO_DB',
  SAVE_BASIC_INFO_INTO_DB:DOCUMENT+'SAVE_BASIC_INFO_INTO_DB',
 
 

  saveCollectionIntoDb: (id,data, actionName = 'insert',collectionName) => ({
 
    type: actions.SAVE_COLLECTION_INTO_DB,
    payload: { id,data,actionName,collectionName }
  }),


  saveBasicInfoIntoDb: (id,data, actionName = 'insert') => ({
 
    type: actions.SAVE_BASIC_INFO_INTO_DB,
    payload: { id,data,actionName }
  }),


  getCollectionsFromDb: (userId,collectionName) => ({
    type: actions.GET_COLLECTIONS_FROM_DB,
    payload: { userId,collectionName },
  }),
  setCollectionToStore: (data,collectionName) => ({
    type: actions.SET_COLLECTION_TO_STORE,
    payload: { data,collectionName },
  }),



  getBasicInfoFromDb: (data) => ({
    type: actions.GET_BASIC_INFO_FROM_DB,
    payload: { data },
  }),
  setBasicInfoToStore: (data) => ({
    type: actions.SET_BASIC_INFO_TO_STORE,
    payload: { data },
  }),

 

 






};
export default actions;
