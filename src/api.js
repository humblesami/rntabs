let apiClient = {};
(function () {
    const api_url = 'http://localhost:8069/api';
    async function fetch_request(endpoint, method, req_data={}) {
        let fetch_options = {
            method: method,
        }
        if(method.toLowerCase() == 'get'){
            fetch_options.data = req_data;
        }
        else{
            fetch_options.body = req_data;
        }
        // console.log(fetch_options, req_data);
        try{
            const fetchResult = await fetch(api_url+endpoint, fetch_options);
            const result = await fetchResult.json(); // parsing the response
            // console.log(result);
            if (fetchResult.ok) {
                return result; // return success object
            }
            const formatted_error = (result.code || '') +' => '+ (result.message || '');
            throw new Error(formatted_error);
        }
        catch(err){
            //console.log('Error in fetch => ', err);
            let res = reject_promise(err, api_url+endpoint);
            return res;
        }
    }

    function reject_promise(err, endpoint){
        let stack = '';
        if(err.stack){
            stack = err.stack.split('\n');
        }
        else{
            stack = err.split('\n');
        }
        let error_message = '' + err;
        if(stack.length > 3){
            stack = stack.slice(0, 3);
            error_message = stack[0];
        }
        stack = stack.join('\n\n');
        console.log('Error in API ' + endpoint + '\n\n' +stack);
        return new Promise(function (resolve, reject) {
            reject(error_message);
        });
    }

    apiClient = {
        get_data: async function(endpoint, req_data={}){
            let res = await fetch_request(endpoint, 'GET', req_data);
            return res;
        },

        post_data: async function(endpoint, item_to_save={}){
            try{
                let req_data = new FormData();
                // console.log(item_to_save);
                for (let key in item_to_save) {
                    req_data.append(key, item_to_save[key]);
                }
                if(!item_to_save.files){
                    item_to_save.files = [];
                }
                item_to_save.files.forEach((file, index) => {
                    req_data.append('files', {
                        name: 'file' + index,
                        uri: file
                    });
                });
                // console.log(req_data);
                let res = await fetch_request(endpoint, 'POST', req_data);
                return res;
            }
            catch(err){
                return reject_promise(err, endpoint);
            }
        },
    }
})();

export default apiClient;