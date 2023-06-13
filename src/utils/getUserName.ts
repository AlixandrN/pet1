export const getUserName = () => {
    const storageUserName = localStorage.getItem('accountUserName');
    return typeof storageUserName === 'string' ? storageUserName : ' ';
  };