define(['jquery','template'],function($,template){
	
	$.ajax({
		type:"get",
		url:"/api/product/queryProductDetailList",
		data:{page:1,pageSize:2},
		success:function(info){
		console.log(info)
		var html = template('tpl',info);
		
		$('.goods').html(html);
		
		
			
		}
	});
})