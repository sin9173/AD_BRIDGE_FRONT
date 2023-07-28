import { ReactNode, createContext, useState } from 'react';

const UserContext = createContext({});


interface IUser {
    memberId : string;
    username : string;
    token : string;
    email : string;
    phone : string;
}

interface Props {
    children : ReactNode;
}

export const UserProvider = ({children} : Props) => {
    const [user, setUser] = useState<IUser>();

    return (<UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>);
}

export default UserContext;