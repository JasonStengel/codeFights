//return the domain of a email address passed in. example sadfhsdkjf@yahoo.com
//should return yahoo.com
function findEmailDomain(address) {
    return address.replace(/.*@/, "");
}
