import actions from './actions';


const initState={

 baseInfo:{

    Summary:null
 },

 Skills:[],
 Works:[]

 
};






export default function reducer(
    state = initState,
    { type, payload }
  ) {
    switch (type) {
  
      

  
      

          case actions.SET_BASIC_INFO_TO_STORE:
    
          return {
            ...state,
            baseInfo:payload.data
            // Summary:payload.data.Summary,
            // Email:payload.data.Email,
            // Facebook:payload.data.Facebook,
            // Github:payload.data.Github,
            // Highlights:payload.data.Highlights,
            // Name:payload.data.Name,
            // Surname:payload.data.Surname,
            // Twitter:payload.data.Twitter,
            // Webpage:payload.data.Webpage,
            // Stackoverflow:payload.data.Stackoverflow,
            // Skype:payload.data.Skype,
            // Phone:payload.data.Phone,
            // Instagram:payload.data.Instagram,
            // Linkedin:payload.data.Linkedin
           
          };

          case actions.SET_COLLECTION_TO_STORE:
          
         state[payload.collectionName]=payload.data;
          return {
            ...state,
               
            // Skills: payload.data
          };
    
          
    
  
  


        

      
     
  
      default:
        return state;
    }
  }
  
