var fs = require("fs");
var path=require('path');
var assert=require('assert');
var ejsExcel = require("../src");


var TEMPLATE_PATH=path.join(__dirname,"./template/test.xlsx");
var OUT_PATH=path.join(__dirname,"./generated/test2.xlsx");
describe('test get Excel Attribute', function () {

    it('test test.xlsx',function () {
        var exlBuf = fs.readFileSync(TEMPLATE_PATH);

        return ejsExcel.getExcelArr(exlBuf)
            .then(function(exlJson) {
                console.log(exlJson);
            }).catch(function(err){
                console.error(err);
                assert.fail(err);
            });
    });
});