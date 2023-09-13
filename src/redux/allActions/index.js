export const AddUser=(data)=>{
      return {
          type:"ADD_USER",
          payload:data
      }
}

export const removeUser=(data)=>{
    return {
        type:"REMOVE_USER",
        payload:data
    }
}

export const updateStudentFatherName=(fname)=>{
    return {
        type:"SET_FATHER_NAME",
        payload:fname
    }
}