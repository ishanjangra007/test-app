
const userState=[{
    id:0,
    name:"Ram Singh",
    father_name:"BholaRam Singh"
},{
    id:1,
    name:"Karan",
    father_name:"Ramesh Kumar"
},{
    id:3,
    name:"Rakesh",
    father_name:"Ravi Kumar"
},{
    id:4,
    name:"Navjot Singh",
    father_name:"Karamchand Singh"
},{
    id:5,
    name:"Pawan",
    father_name:"Subhash Kumar"
},{
    id:6,
    name:"Parag",
    father_name:"Parveen Kumar"
},{
    id:7,
    name:"Ayush",
    father_name:"Pavesh Mehta"}];

const userReducer=(state=userState,action)=>{
    console.log("type?>>>>>",action);
    switch(action.type){
          case "ADD_USER":
            return state=action.payload
          break;

          case "REMOVE_USER": 
          return state = action.payload
           break;
          default: return state
    }
}
export default userReducer;