
   export function Myreducer(state=0,action){
           switch(action.type){
            case 'inc':
                return state+1;
            case 'dec':
               if(state!==0){
                return  state-1;
               }
               else{
                alert("state already 0")
               }
               case 'reset':
               return state==0
            default : return state=0;
           }
      }