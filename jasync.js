var jasync={
	parallel:function(urls){
		var fns=Array.prototype.slice.call(arguments, 1);
		var callBack=null;
		var res=[];
		urls.forEach(function(url,index){
			(function(){
				fns[index](url,function(result){
					res.push({data:result,index:index});
					if(res.length==urls.length){
						res.sort(function(a,b){
							 return a.index>b.index
						})
						var arr=[];
						res.forEach(function(r){
							arr.push(r.data);
						})
						callBack(arr);
					}
				})
			})()
		})
		return {
			result:function(cb){
				callBack=cb;
			}
		}
	}
}

 

var a=["url1","url2","url4"]


jasync.parallel(a,function(url1,cb){
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
	console.log(data);
})
