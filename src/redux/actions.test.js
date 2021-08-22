const rewire = require("rewire")
const actions = rewire("./actions")
const makeActionCreator = actions.__get__("makeActionCreator")
// @ponicode
describe("makeActionCreator", () => {
    test("0", () => {
        let callFunction = () => {
            makeActionCreator("object", ["$dummy_name", "DUMMYNAME", "/dummy_name", "dummy_name", "DUMMYNAME", "DUMMYNAME", "DUMMYNAME", "$dummy_name", "/dummy_name", "DUMMYNAME", "$dummy_name", "/dummy_name", "$dummy_name", "dummyName123", "/dummy_name", "DUMMYNAME", "dummy_name", "dummy_name", "dummyname", "/dummy_name"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            makeActionCreator("object", ["DUMMYNAME", "dummyName", "dummyName123", "dummyName123", "dummyName123", "DUMMYNAME", "DUMMYNAME", "dummy_name", "dummyname", "$dummy_name", "/dummy_name", "dummyName", "/dummy_name", "dummyName", "dummyName", "DUMMYNAME", "DUMMYNAME", "dummyname", "/dummy_name", "/dummy_name"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            makeActionCreator("object", ["dummyName", "dummyName123", "dummy_name/", "dummy_name/", "dummy_name", "dummyName123", "DUMMYNAME", "dummyName123", "/dummy_name", "dummyName123", "dummyName123", "dummyname", "/dummy_name", "dummy_name", "dummy_name", "dummyName", "dummyname", "dummy_name/", "dummyName", "dummyName"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            makeActionCreator("object", ["dummyName", "DUMMYNAME", "DUMMYNAME", "dummyname", "/dummy_name", "dummy_name", "DUMMYNAME", "DUMMYNAME", "/dummy_name", "dummyname", "dummy_name", "dummy_name", "dummy_name", "DUMMYNAME", "dummy_name", "dummyName123", "/dummy_name", "$dummy_name", "DUMMYNAME", "dummyname"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            makeActionCreator("number", ["DUMMYNAME", "dummyname", "dummyname", "$dummy_name", "dummyName", "dummyName", "/dummy_name", "dummyName123", "DUMMYNAME", "$dummy_name", "dummyname", "dummy_name/", "dummyName123", "dummyname", "dummyName123", "DUMMYNAME", "dummyName123", "dummyName123", "dummyname", "dummyname"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            makeActionCreator(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
