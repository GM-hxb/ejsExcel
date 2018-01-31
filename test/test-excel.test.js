const fs = require("fs");
const path = require('path');
const assert = require('assert');
const ejsExcel = require("../src");

const TEMPLATE_PATH = path.join(__dirname,"./template/test.xlsx");
const OUT_PATH=path.join(__dirname,"./generated/test2.xlsx");
describe('test excel 1', function () {

    it('test test.xlsx',function () {
    	
        var exlBuf = fs.readFileSync(TEMPLATE_PATH);

        var data = [
            [{ "dpt_des": "开发部", "doc_dt": "2013-09-09", "doc": "a001" }], 
            [
                { "pt": "pt1", "des": "des1", "due_dt": "2013-08-07", "des2": "2013-12-07" }, 
                { "pt": "pt1", "des": "des1", "due_dt": "2013-09-14", "des2": "des21" }
            ]
        ];

        return ejsExcel.renderExcel(exlBuf, data)
            .then(function (exlBuf2) {
                fs.writeFileSync(OUT_PATH, exlBuf2);
                console.log("test2.xlsx");
            }).catch(function (err) {
                console.error(err);
                assert.fail(err);
            });
    });
});