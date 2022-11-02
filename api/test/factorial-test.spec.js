const chai = require('chai')
const project = require('../../api/page/factorial-page.js')
const data = require('../../api/data/factorial-schema.json')
const expect = require('chai').expect
chai.use(require('chai-http'))
chai.use(require('chai-json-schema'))

module.exports = function(){
    describe('Factorial Test Suite', () => {

        it(`Calculate integer 1`, (done) => {
            let api = chai.request('https://qainterview.pythonanywhere.com/');
            api.post(`/factorial`)
            .set("Content-type", "application/json")
            .send({
                number : 1
            })
           
            .end(function(err, res){

                expect(res.statusCode).to.equal(200);
                expect(res.answer).to.equal(1);
                done();
           }),
    
        })
    })
}