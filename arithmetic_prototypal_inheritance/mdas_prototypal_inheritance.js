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

var mdas_1 = Object.create(Mdas);
mdas_1.init(100,10,"-").answer();