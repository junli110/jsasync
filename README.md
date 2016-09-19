# jsasync
http call parallel return in order
<pre>
<code>
var a=["url1","url2","url4"]


jsasync.parallel(a,function(url1,cb){
	setTimeout(function(){
		cb("111")
	},3000)
	
},function(url2,cb){
	setTimeout(function(){
		cb("222")
	},1000)
	
},function(url3,cb){
	setTimeout(function(){
		cb("333")
	},1000)
	
}).result(function(data){
	console.log(data);   //["111","222","333"]
})
</code>
</pre>
