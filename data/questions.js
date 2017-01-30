const questions = {
  question: {
    "text":"How much does house cost?",
    "author":"Lamont",
    "isAnswered":false,
    "answers":[]
  },
  question2: {
    "text":"How much does mac cost?",
    "author":"Brunchin",
    "isAnswered":false,
    "answers":[]
  },
  question3:{
    "text":"How much does watch cost?",
    "author":"Scontent",
    "isAnswered":false,
    "answers":[]
  },
  question4:{
    "text":"How much does fish cost?",
    "author":"Overhead",
    "isAnswered":true,
    "answers":[
	    {
	    	"author":"Scontent",
	    	"text":"shark costs a lot"
	    }
    ]
  },
  question5:{
    "text":"How much does apple cost?",
    "author":"Break",
    "isAnswered":false,
    "answers":[]
  },
  question6:{
    "text":"How much does car cost?",
    "author":"Hanging",
    "isAnswered":true,
		"answers":[
	    {
	    	"author":"Brunchin",
	    	"text":"it depends"
	    },
	    {
	    	"author":"Lamont",
	    	"text":"from 1000 usd"
	    }
    ] 
  }
};

export default questions;