async function getApi(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');

        const data = await res.json();

        console.log(data[5].title)
        } 
    catch(err){
        console.log(err.message)
    }
}

getApi();
