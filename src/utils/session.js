


export function setSession(data) {
    sessionStorage.setItem('user', JSON.stringify(data));
}