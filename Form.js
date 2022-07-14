export default function Form({ children, body, auth, action, endpoint }) {
    const { user } = useUserContext();

    async function sendForm(e) {
        e.preventDefault();
        
        const promise = auth ?
            axios.post(API + endpoint, body, user.auth) :
            axios.post(API + endpoint, body);
        promise.then(res => {
            action(res);
            console.log(res);
        }).catch(err => {
            const { response } = err;
            action(response);
        });
    }
    return (
            <form onSubmit={(e) => sendForm(e)}>
                {children}
            </form>
    );
}
