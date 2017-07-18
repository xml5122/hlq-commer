function submitBackstageLogin(){
	var username = $('input[name="username"]').val();
	var password = $('input[name="password"]').val();
	self.location='customer_index.jsp'; 
/*	if(validate() == false){
		return;
	}
	
	if("" == username || "" == password){
		alert('用户名或密码不能为空');
		return;
	}
	$.ajax({
		url : "/user/submitBackstageLogin",
		type : 'post',
		dataType : 'json',
		data : {username: username, password: password},
		success : function(data){
			if(!data){
				alert('用户名或密码错误');
			}
		}
	})*/
	
}
