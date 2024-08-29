export const removeDomainName = (email: string) => {
    if (email == null)
        return;
    
    return email.substring(0, email.indexOf("@"));
}