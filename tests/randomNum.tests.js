describe('return number your guess is too high , low' , function(){
    it('Should return "Sorry, your guess is too high.."' , function(){
        assert.equal('Sorry, your guess is too high..',randomNum(10,1));
    });

    it('Should return "Sorry, your guess is too low.."' , function(){
        assert.equal('Sorry, your guess is too low..',randomNum(1,10));
    });

});