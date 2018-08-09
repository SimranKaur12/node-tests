const expect=require('expect');
const utils=require('./utils');

describe('Utils', () => {
	describe('#addition', () => {
		it('should add two numbers', () => {
			var res=utils.add(11,44);
			expect(res).toBe(55).toBeA('number');
			// if(res !== 55)
			// {
			//   throw new Error(`Values passed were incorrect`+res);
			// }
		});
    

		it('should add two numbers asynchronously', (done) => {
			utils.addAsync(3,4, (sum) => {
				expect(sum).toBe(7);
				done();
			});
		});
	}); 

	describe('#square', () => {
		it('should square the number',() => {
			var result=utils.square(2);
			expect(result).toBe(4).toBeA('number');
			// if(result!==4)
			// {
			//   throw new Error('The result'+result+' is incorrect!');
			// }
		});

		it('should give the square asynchronously',(done) => {
			utils.squareAsync(3, (square) => {
				expect(square).toBe(9).toBeA('number');   //chaining assertions
				done();
			});
		});
  
	});
});



it('should verify name is set',() =>{
	var user={
		age:23,
		location:'Pune'
	};
	var userResult=utils.setName(user,'Simran Khokkar');
	expect(user).toEqual(userResult);   ///this is to show that in javascript objects are passed by reference.
	expect(userResult.firstName).toBe('Simran');
	expect(userResult.lastName).toBe('Khokkar');
	expect(user).toEqual(userResult);
});

// it('should check equality for some values', () => {
//   // expect(12).toNotBe(11);
//   expect({name:'Simran'}).toEqual({name:'Simran'});
//   expect([2,3,4]).toExclude(5);
//   expect({
//     name:'Simran',
//     age:23
//   }).toInclude({age:23});
// });



