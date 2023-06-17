/* 
JavaScript Number Methods.

Method	           Description
-------            ------------
toString()	       Returns a number as a string
toExponential()	   Returns a number written in exponential notation
toFixed()	       Returns a number written with a number of decimals
toPrecision()	   Returns a number written with a specified length  إرجاع رقم مكتوب بطول محدد
ValueOf()	       Returns a number as a number

#001 The toString() Method.
---------------------------

---------------------------------------------------
The toString() method returns a number as a string.|
--------------------------------------------------- 
Example:
-----------
let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();


#002 The toExponential() Method.
---------------------------------
toExponential() returns a string, with a number rounded and written using exponential notation.

Example
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);
------------------------------------------------------------------------------------------------

#003 The toFixed() Method

toFixed() returns a string, with the number written with a specified number of decimals:


Example:

let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);


--------------------------
The valueOf() Method
valueOf() returns a number as a number.

Example
let x = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();


In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

There is no reason to use it in your code.

All JavaScript data types have a valueOf() and a toString() method.

-------------------------------------------------------
Converting Variables to Numbers
There are 3 JavaScript methods that can be used to convert a variable to a number:

تحويل المتغيرات إلى أرقام
هناك 3 طرق جافا سكريبت يمكن استخدامها لتحويل متغير إلى رقم:

Method	        Description
Number()	    Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	    Parses its argument and returns a whole number
parseInt () يوزع الوسيطة ويعيد عددًا صحيحًا

The Number() Method
The Number() method can be used to convert JavaScript variables to numbers:
يمكن استخدام طريقة Number () لتحويل متغيرات JavaScript إلى أرقام:

Example
Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("mohamed");

The Number() Method Used on Dates
Number() can also convert a date to a number.

طريقة الرقم () المستخدمة في التواريخ
يمكن لـ Number () أيضًا تحويل التاريخ إلى رقم.

Example
Number(new Date("1970-01-01"))


The parseInt() Method
parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

Example
parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years"); remove string
parseInt("years 10"); Nan


The parseFloat() Method
parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

Example
parseFloat("10");    
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");

result:
10
10.33
10
10
NaN
---------------------------------------------------------------------------------------------------------

Number Object Methods
These object methods belong to the Number object:

Method	                Description
Number.isInteger()	    Returns true if the argument is an integer
Number.isSafeInteger()	Returns true if the argument is a safe integer
Number.parseFloat()	    Converts a string to a number
Number.parseInt()	    Converts a string to a whole number





------------------------------------------------------------------------


String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String charAt()
String charCodeAt()
String split()
*/