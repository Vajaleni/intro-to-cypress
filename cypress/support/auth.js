export const signIn = () => {
    const userCreds = {
        email: 'lenatest1978@gmail.com',
        password: 'testPwd1',
        remember: true
    };
    return cy.request ('POST', 'https://qauto.forstudy.space/api/auth/signin',userCreds).then((responce)=>{
    const headers = responce.headers;
    const cookie = headers['set-cookie'] [1];
    const cookieArray = cookie.split('\n]');
    let sid = ''
    for ( const cookie of cookieArray )
        if( cookie.trim().startsWith('sid=')) {
            sid = (cookie.trim().split('=')[1]).split(';')[0];
            break;
}
    
cy.log (`SID: ${sid}`);

return cy.wrap(sid);
    })
}

