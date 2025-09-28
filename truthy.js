 let data;
 data=0; //0 value false 
 data=true;
 data=''; //empty string false value
 data=' ';//has an white space
 data=null; //false value
 data={}//object is truthy value
 data=[] //array is truth value
 console.log(data)
 if(data){
    console.log(data,'value of data is truthy')
 }else{
    console.log(data,'value of data is falsy')
 }

 // if i need to capture the false value to go inside if block
 //use logical not
 if(!data){
    console.log('inside if with a falsy value')
 }else{
    console.log('inside if with a true value')
 }

 //capture all positive value
 if(!!data===true){
    console.log('only true inside the double not')
 }