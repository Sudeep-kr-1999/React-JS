import React from 'react';


// Note:---Every Context object created using the createContext() method comes with a provider and a consumer React Component 
        //   THE Value in the React.createContext() method is the default value we assign to the Context , here the default value Is 'React Learner'
        // Default value will only be used when a component doesnot have a matching Provider above it in a component tee 
const UserContext=React.createContext('React Learner');

const UserProvider=UserContext.Provider;
const UserConsumer=UserContext.Consumer;

export{UserProvider,UserConsumer}

// Context type property :=====================================
// It is a another way the consumer component can consume the value using context type property  on a class

// Note:---- here we are doing this In ContextComponentE 

// -----> firstly we have to export default UserContext;
export default UserContext;
