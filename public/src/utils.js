define(['jquery','./utils'],function($){
	$.ajax({
            // http://localhost:3000/employee/employeeLogin
            url: '/api/employee/employeeLogin',
            type: 'post',
            success: function (info) {
               if(info.error){
               	location.href = '/login.html';
               }
            }
        })
})
