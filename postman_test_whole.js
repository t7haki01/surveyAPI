
//User delete method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

 pm.test("Body matches string", function () {
     pm.expect(pm.response.text()).to.include('{ "fieldCount": 0, "affectedRows": 1, "insertId": 0, "serverStatus": 2, "warningCoun:0, "message": "", "protocol41": true, "changedRows": 0}') });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("User Delete method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData.protocol41).to.eql(true);
 });

var jsonData = pm.response.json();
tests["Checking protocol status"] = jsonData.protocol41 === true;


var jsonData = pm.response.json();
tests["Checking serverStatus"] = jsonData.serverStatus === 2;


var jsonData = pm.response.json();
tests["Checking warning Count"] = jsonData.warningCount === 0;

/*Kind of similar test for testing validation body which is recieving data or not**/
pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

var jsonData = pm.response.json();
tests["Checking affectedRows"] = jsonData.affectedRows === 1;




//users post method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201,202]);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("User Post method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData.firstname).to.eql("postman");
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.firstname === "postman";


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.accountFK === 6;


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.lastname === "testing";

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

var jsonData = pm.response.json();
tests["Checking values"] = jsonData.type === "admin";


//Here is for the user get method tests

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

 pm.test("Body matches string", function () {
     pm.expect(pm.response.text()).to.include('{"id":1,"firstname":"first","lastname":"test","accountFK":1,"email":"test1@test.com","birthdate":"2018-12-30T22:00:00.000Z","phone":"111-1111","streetAddress":"testkau 1","postalCode":"11111","rewards":null,"modifiedDate":null,"type":"company"}');
 });



// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("User get method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData[0].id).to.eql(1);
 });

var jsonData = pm.response.json();
tests["Checking id parameter from JSON data"] = jsonData[0].id === 1;


var jsonData = pm.response.json();
tests["Checking first name parameter from JSON data"] = jsonData[0].firstname === "first";


var jsonData = pm.response.json();
tests["Checking last name parameter from JSON data"] = jsonData[0].lastname === "test";

/*Kind of similar test for testing validation body which is recieving data or not**/
var jsonData = pm.response.json();
tests["Checking is_exist parameter from JSON data"] = jsonData.is_exist === true;

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

var jsonData = pm.response.json();
tests["Checking type values"] = jsonData[0].type === "company";

//Account get method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

 pm.test("Body matches string", function () {
     pm.expect(pm.response.text()).to.include('');
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Account get method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData[0].id).to.eql(1);
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].account === "test1";


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].isExpired === 0;

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

var jsonData = pm.response.json();
tests["Checking value"] = jsonData[1].account === "test2";


//Account get only one id method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

 pm.test("Body matches string", function () {
     pm.expect(pm.response.text()).to.include('');
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Account get method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData.id).to.eql(1);
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.account === "test1";


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.isExpired === 0;

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });


//Account delete method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

 pm.test("Body matches string", function () {
     pm.expect(pm.response.text()).to.include('{"fieldCount": 0,"affectedRows": 1,"insertId": 0,"serverStatus": 2,"warningCount": 0,"message": "","protocol41": true,"changedRows": 0}');
 });


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.fieldCount === 0;


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.affectedRows === 1;


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.serverStatus === 2;

/*Kind of similar test for testing validation body which is recieving data or not**/
var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.protocol41 === true;

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

var jsonData = pm.response.json();
tests["Checking value"] = jsonData.changedRows === 0;



//Account post method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201,202]);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 300ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(300);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

 pm.test("Body matches string", function () {
     pm.expect(pm.response.text()).to.include('');
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("User get method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData.account).to.eql("postman11");
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.password === 'test';
''
pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });


//Answer get method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });

 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Answers get method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData[0].id).to.eql(2);
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].id === 1;


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].user_answer === "1";


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].question === 1;

/*Kind of similar test for testing validation body which is recieving data or not**/
var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].userFK === 4;

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

var jsonData = pm.response.json();
tests["Checking value"] = jsonData[1].id === 3;




//Answer get method per id testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });

 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Answers get method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData[0].id).to.eql(2);
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].id === 2;


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.user_answer === "1";


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].question === 1;

/*Kind of similar test for testing validation body which is recieving data or not**/
var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].userFK === 4;

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

//Answer post method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201,202]);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

 pm.test("Body matches string", function () {
     pm.expect(pm.response.text()).to.include('');
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Answer post method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData.user_answer).to.eql("Somewhere Far");
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.userFK === 6;


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.question === 23;

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

//Answer delete method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Answer Delete method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData.protocol41).to.eql(true);
 });

var jsonData = pm.response.json();
tests["Checking protocol status"] = jsonData.protocol41 === true;


var jsonData = pm.response.json();
tests["Checking serverStatus"] = jsonData.serverStatus === 2;


var jsonData = pm.response.json();
tests["Checking warning Count"] = jsonData.warningCount === 0;

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

var jsonData = pm.response.json();
tests["Checking affectedRows"] = jsonData.affectedRows === 1;


//Question get method testing


/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("User get method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData[0].id).to.eql(1);
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].id === 1;

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

//Question post method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201,202]);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Question Post method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData.question).to.eql("postman");
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.surveyFK === "1";


pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

//Question delete method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Question Delete method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData.protocol41).to.eql(true);
 });

var jsonData = pm.response.json();
tests["Checking protocol status"] = jsonData.protocol41 === true;


var jsonData = pm.response.json();
tests["Checking serverStatus"] = jsonData.serverStatus === 2;


var jsonData = pm.response.json();
tests["Checking warning Count"] = jsonData.warningCount === 0;

/*Kind of similar test for testing validation body which is recieving data or not**/
pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

var jsonData = pm.response.json();
tests["Checking affectedRows"] = jsonData.affectedRows === 1;


//Survey get method testing!!

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Survey get method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData[0].id).to.eql(1);
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].title === "Survey Company1 Test";


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].owner === 1;


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[1].id === 2;

/*Kind of similar test for testing validation body which is recieving data or not**/
var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[1].title === "Survey Company2 Test";

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

var jsonData = pm.response.json();
tests["Checking value"] = jsonData[1].owner === 2;

//Survey get method by id testing!!

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Survey get by id method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData[0].id).to.eql(1);
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].title === "Survey Company1 Test";


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].owner === 1;

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

 //Survey Post method Testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201,202]);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Survey Post method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData.title).to.eql("test");
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.owner === "2";

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

//Survey delete method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Survey Delete method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData.protocol41).to.eql(true);
 });

var jsonData = pm.response.json();
tests["Checking protocol status"] = jsonData.protocol41 === true;


var jsonData = pm.response.json();
tests["Checking serverStatus"] = jsonData.serverStatus === 2;


var jsonData = pm.response.json();
tests["Checking warning Count"] = jsonData.warningCount === 0;

/*Kind of similar test for testing validation body which is recieving data or not**/
pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

var jsonData = pm.response.json();
tests["Checking affectedRows"] = jsonData.affectedRows === 1;


//Answer_options get method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Answer options get method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData[0].id).to.eql(1);
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].id === 1;


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].answer_option === "0";


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].questionFK === 1;

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

var jsonData = pm.response.json();
tests["Checking value"] = jsonData[1].id === 2;


//Answer_options get method per id testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Answer options get method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData[0].id).to.eql(1);
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].id === 1;


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].answer_option === "0";


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData[0].questionFK === 1;

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

 //Answer option post method testing


/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201,202]);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Answer option post method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData.id).to.eql("0");
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.answer_option === "test";


var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.questionFK === "1";


pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });


 //Answer option delete method testing

/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Answer option Delete method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData.protocol41).to.eql(true);
 });

var jsonData = pm.response.json();
tests["Checking protocol status"] = jsonData.protocol41 === true;


var jsonData = pm.response.json();
tests["Checking serverStatus"] = jsonData.serverStatus === 2;


var jsonData = pm.response.json();
tests["Checking warning Count"] = jsonData.warningCount === 0;

/*Kind of similar test for testing validation body which is recieving data or not**/
pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });

var jsonData = pm.response.json();
tests["Checking affectedRows"] = jsonData.affectedRows === 1;

//Login Post method testing


/**Same test checking header content type but differently */
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

tests["content-type header is present"] = postman.getResponseHeader("content-type");

pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201,202]);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});


/*Same test function checking response status in other ways **/
tests["Status code is 200"] = responseCode.code === 200;
 pm.test("Response is ok", function () {
     pm.response.to.have.status(200);
 });

 pm.test("Response time is less than 200ms", function () {
     pm.expect(pm.response.responseTime).to.be.below(200);
 });


 pm.test("response should be okay to process", function () { 
     pm.response.to.not.be.error; 
     pm.response.to.not.have.jsonBody("error"); 
 });

// Same test function checking response json Data especially first one is for the checking id and in other ways
 pm.test("Login Post method", function () {
     var jsonData = pm.response.json();
     pm.expect(jsonData.err).to.eql(null);
 });

var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.message === "Successfully Login";

/*Kind of similar test for testing validation body which is recieving data or not**/
var jsonData = pm.response.json();
tests["Checking parameter from JSON data"] = jsonData.status === true;

pm.test("Body is correct", function () {
     pm.response.to.have.body("response_body_string");
 });
