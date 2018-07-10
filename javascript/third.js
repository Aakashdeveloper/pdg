var a =[1,2,3,"c","df","df","er","fd",true,false,2,4,"ds",3]
a.push()==> Always push at the end 
a.pop()=> always takeout last value 
a.shift() => always takeout first value
a.unshift()=> always add in the front

a.slice

var a =[1,2,3,"c","df","df","er","fd",true,false,2,4,"ds",3]
undefined
a
(14) [1, 2, 3, "c", "df", "df", "er", "fd", true, false, 2, 4, "ds", 3]
typeof(a)
"object"
a.push("apple")
15
a
(15) [1, 2, 3, "c", "df", "df", "er", "fd", true, false, 2, 4, "ds", 3, "apple"]
a[0]
1
a[1]
2
a.length
15
a[15]
undefined
a[14]
"apple"
a.pop(3)
"apple"
a
(14) [1, 2, 3, "c", "df", "df", "er", "fd", true, false, 2, 4, "ds", 3]
a.pop(100)
3
a.shift(1)
1
a
(12) [2, 3, "c", "df", "df", "er", "fd", true, false, 2, 4, "ds"]
a.unshift("bmw")
13
a
(13) ["bmw", 2, 3, "c", "df", "df", "er", "fd", true, false, 2, 4, "ds"]
a
(13) ["bmw", 2, 3, "c", "df", "df", "er", "fd", true, false, 2, 4, "ds"]
a.slice(3,7)
(4) ["c", "df", "df", "er"]
a
(13) ["bmw", 2, 3, "c", "df", "df", "er", "fd", true, false, 2, 4, "ds"]
a.splice(3,0,"red","green")
[]
a
(15) ["bmw", 2, 3, "red", "green", "c", "df", "df", "er", "fd", true, false, 2, 4, "ds"]
a.splice(5,2,"black")
(2) ["c", "df"]
a
(14) ["bmw", 2, 3, "red", "green", "black", "df", "er", "fd", true, false, 2, 4, "ds"]
a.indexOf("bmw")
0
a.indexOf("shubham")
-1
a.indexOf("mansi")
-1
a.sort()
(14) [2, 2, 3, 4, "black", "bmw", "df", "ds", "er", false, "fd", "green", "red", true]
a.reverse()
(14) [true, "red", "green", "fd", false, "er", "ds", "df", "bmw", "black", 4, 3, 2, 2]