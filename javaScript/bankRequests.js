/*
This program auto processes incoming request for the bank
It checks the incoming requeststo see if they are invalid and 
returns a negative number refering to which index is a bad  in the Request
*/
function bankRequests(accounts, requests) {
    var count = 0;
	
	//loops through the requests
    for(var i = 0; i < requests.length; i++){
        var temp = requests[i].split(' ');
        var type = temp[0];
        var badRequest = [0];
		
		//a case for each type of requests
        switch(type){
            case 'transfer':
                count--;	
				//checks if the account is invalid
                if(temp[2] > accounts.length){
                    badRequest[0] = count;
                    return badRequest;
                }
                accounts[temp[1] - 1] -= temp[3];
                accounts[temp[2] -1] = parseInt(accounts[temp[2] -1]) + parseInt(temp[3]);

				//checks if there is more than one account
                if(accounts.length < 2){
                    badRequest[0] = count;
                    return badRequest;
                }
				//checks for a negative balance
                if(accounts[temp[1] - 1] < 0){
                    badRequest[0] = count;
                    return badRequest;
                }
                break;
            case 'withdraw':
                count--;
				//checks if the account is invalid
                if(temp[1] > accounts.length){
                    badRequest[0] = count;
                    return badRequest;
                }
                accounts[temp[1] - 1] -= temp[2];
				
				//checks for a negative balance
                if(accounts[temp[1] - 1] < 0){
                    badRequest[0] = count;
                    return badRequest;
                }
                break;
            case 'deposit':
                count--;
				//checks if the account is invalid
                if(temp[1] > accounts.length){
                    badRequest[0] = count;
                    return badRequest;
                }
                accounts[temp[1] -1] = parseInt(accounts[temp[1] - 1]) + parseInt(temp[2]);
				//checks for a negative balance 
                if(accounts[temp[1] - 1] < 0){
                    badRequest[0] = count;
                    return badRequest;
                }
                break;
        }
    }
    return accounts;
}