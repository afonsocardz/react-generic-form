# React Generic Form
Generic form components to easily send POST requests and receive errors or success responses from the server.


# Form Component
It receives some props as showed in the example below:

    function Form({ children, body, auth, action, endpoint })

## Body

This prop must contain an object with the data to be sent to the server.


    const objExample = {
	    name,
	    lname,
	    phone,
    }

## Auth

This auth prop is an `boolean`type, which indicates if the **requested route** will need specific headers.

## Action

The main resposibility of **Action** is to receive an array of errors from the server, sending it to **Input Components**
You also need to know, that this is a function sent by call back and with will be executed after the promise has been resolved.

    function myFunction(response){
	    //do something with the response
    }
    <Form action={myFunction}>

## Endpoint

Where the request will be sent, need to be an `String` like `"/user"` 

## Children 

This needs to receive Input and ButtonForm components, thoses going to be explained in the following lines.

    function Form ({ children, body, action, auth, endpoint }){
	    return(
		    <form>
			    {children}
		    </form>
		);
		    


# Input Component
This component is develop with controlled input, it means that you'll need to send **state and setState** to work, and some other props for input data, like the code snippet below:

funtion Input ({ state, setState, text, results, name, type }){

	const  error = results && results.find(r  =>  r.label === name)

	return(
		<div>
			<input name={name}
			placeholder={text}
			type={type}
			onChange={e => setState(e.target.value)}
			/>
			{error && <span>{error.text}</span>}
		</div>
	);
}

## Results

The array containing the objects with errors data response from the server, it needs to be formated as the example below:

    const results = [
	    {
		    text: "Error input message",
		    label: "email",
	    }
    ];

## Add a button to your Form

Once every input is set up, all you need to do is to nest a submit type button to your Form component.
