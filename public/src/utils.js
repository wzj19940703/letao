define(['jquery'],function($){
	
	// 检测登录
	$.ajax({
            // http://localhost:3000/employee/employeeLogin
            url: '/api/employee/checkRootLogin',
            type: 'get',
            success: function (info) {
               if(info.error){
               	location.href = '/login.html';
               }
            }                       
        })
	
	
	// 退出登录
	$('.logout').on('click',function(){
		$.ajax({
		type:"get",
		url:"/api/employee/employeeLogout",
		success:function(info){
			if(info.success){
				location.href = '/login.html'
			}
		}
	})
	})
	
	
})
