export const fakeAuth = {
    isAuthenticated: false,
    login (cb) {   // callback function function pass
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 500);
    },

    logout (cb) {
       fakeAuth.isAuthenticated = false;
       setTimeout(cb, 500); 
    }
};