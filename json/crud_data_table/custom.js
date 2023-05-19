function getUserList(){
   const table= document.getElementById("userTable");
    fetch("https://reqres.in/api/users")
    .then(response=>response.json())
    .then(res=>{
        console.log(res);

        for(user of res.data ){
            console.log(user);
            table.innerHTML+=`
            <tr>
						<td><input type="text" class="form-control" id="" value="${user.first_name}"></td>
						<td><input type="text" class="form-control" id="" value="${user.last_name}"></td>
						<td><input type="text" class="form-control" id="" value="${user.email}"></td>
						<td>
							<a href="" class="btn btn-warning" onclick="updateUser()${user.id}">refresh</a>
							<a href="" class="btn btn-danger" onclick="deleteUser()${user.id}>delete</a>
						</td>
					</tr>
            `
        }
    })
}

getUserList();