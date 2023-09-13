
const userState=[{
    name:"Rishu",
    father_name:"Navjot Singh"
},{
    name:"Karan",
    father_name:"Ramesh Kumar"
}];

const studentReducer=(state=userState,action)=>{
    switch(action.type){
          case "SET_FATHER_NAME":state={
            ...state,father_name:action.payload
          }
          return state
          break;
          default: return state
    }
}
export default studentReducer;