
//Only for post method

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
tests["Example of failed test"] = jsonData[0].type === "admin";



