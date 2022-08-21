
describe('Test my greet function' , function(){
    it("It should return ,'Hello,Sinenkosi 'when called with 'Sinenkosi'" , function(){
        assert.equal("Hello, Sinenkosi",greet("Sinenkosi"),"this should be true");
        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return ,'Hello,Lucky ' when called with 'Lucky'" , function(){
        assert.equal("Hello, Lucky",greet("Lucky"),"this should be true");
        // assert.deepEqual([2,2],[2,2]);
    });
});
// console.log(greet('Sinenkosi'))