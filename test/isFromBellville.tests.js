describe('Test isFromBellville function' , function(){
    it("It should return ,'true 'when called with 'Cy 123'" , function(){
        
        assert.equal(isFromBellville('CY 123'), true);
        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return ,'false ' when called with 'CJ 123'" , function(){
        
        assert.equal(isFromBellville('CJ 123'), false);
        // assert.deepEqual([2,2],[2,2]);
    });
});