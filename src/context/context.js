import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import { createContext } from 'react';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext()

const GithubProvider = ({ children }) => {
    const [user, setUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers)



    return (
        <GithubContext.Provider value={{ user, repos, followers }}>{children}</GithubContext.Provider>
    );
};

export { GithubProvider, GithubContext }