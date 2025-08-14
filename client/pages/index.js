import buildClient from '../api/build-client';

const landingPage = ({currentUser}) => {
    return currentUser ? <h1>Your are signed in</h1> : <h1>Your are NOT signed in</h1>
}

// its callded from server when hard refresh, url enter ; its called from client side when ridirect from one page to this page, like signup/login
landingPage.getInitialProps = async (context) =>{
    const client = buildClient(context);
    const {data} = await client.get('/api/users/currentuser');

    return data;
}

export default landingPage;