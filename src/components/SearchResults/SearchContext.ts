import { createContext, FC, ReactNode, useState, useContext } from "react";
import { IUser, MockinContextType } from "../../@types/types";

export const SearchContext = createContext<MockinContextType>({
    users: [],
    setUsers: () => {}
});

