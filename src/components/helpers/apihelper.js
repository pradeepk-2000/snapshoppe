export const apiHelper = ()=>{

    const invokeApi = async (endpoint,options)=>{
        const defaultHttpMethod = "GET";
        const defaultHttpHeaders ={
            "Content-Type":"application/json",
            Accept:"application/json",
        };
        options.method = options.method || defaultHttpMethod;
        options.headers = options.headers ? {...options.headers,...defaultHttpHeaders} : defaultHttpHeaders;
        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;

        try{
            const response = await fetch(endpoint,options);
            if(response.ok){
            return await response.json();
            }
            else{
                return null;
            }
        }
        catch(error){
            return error;
        }
    };

    const getApi = (endpoint,options={}) =>{
        return invokeApi(endpoint,options)
    };

    const postApi =(endpoint, options)=>{
        options.method = "POST";
        return invokeApi(endpoint,options)
    };
    return{
        getApi,
        postApi
    }
}