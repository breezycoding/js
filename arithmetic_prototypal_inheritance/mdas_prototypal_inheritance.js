/*
	Simple arithmetic computation that uses prototypal inheritance
*/
var Mdas = {
	init: function(first_number, second_number, operation){
		this.first_number = first_number;
		this.second_number = second_number;
		this.operation = operation;
		return this;
	},
	operator:["*","/","+","-"],
	valid_operation:function(){
		return this.operator.indexOf(this.operation) > -1 ? true : false;
	},
	compute:{
		"*":function(){return this.first_number * this.second_number},
		"/":function(){return this.first_number / this.second_number},
		"+":function(){return this.first_number + this.second_number},
		"-":function(){return this.first_number - this.second_number}
	},
	answer:function(){		
		return (this.valid_operation()) ? this.compute[this.operator[this.operator.indexOf(this.operation)]].call(this) : "Please choose valid operation[*, /, +, -]";
	}
}
var mdas_multiplication = Object.create(Mdas);
console.log(mdas_multiplication.init(100,10,"*").answer());
var mdas_division = Object.create(Mdas);
console.log(mdas_division.init(100,10,"/").answer());
var mdas_addition = Object.create(Mdas);
console.log(mdas_addition.init(100,10,"+").answer());
var mdas_subtraction = Object.create(Mdas);
console.log(mdas_subtraction.init(100,10,"-").answer());