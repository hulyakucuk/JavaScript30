const table = document.getElementById("userTable");
function getUserList() {

    fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then((res) => {
            // console.log(res);

            for (user of res.data) {
                // console.log(user);
                table.innerHTML += `
            <tr>
						<td><input type="text" class="form-control" id="first_name_${user.id}" value="${user.first_name}"></td>
						<td><input type="text" class="form-control" id="last_name_${user.id}" value="${user.last_name}"></td>
						<td><input type="text" class="form-control" id="email_${user.id}" value="${user.email}"></td>
						<td>
							<a href="" class="btn btn-warning" onclick="updateUser(${user.id})">update</a>
							<a href="" class="btn btn-danger" onclick="deleteUser(${user.id})">delete</a>
						</td>
					</tr>
            `;
            }
        });
}



getUserList();

/* refresh data */

function refreshData() {
    getUserList();
}

/* create user */

function createUser() {
//Verileri aldık
    let data = {
        first_name: document.getElementById("first_name").value || "null",
        last_name: document.getElementById("last_name").value || "null",
        email: document.getElementById("email").value || "null"
    };
//Verileri cekdik
    fetch("https://reqres.in/api/users",
        //kullanacagımız methodu tanımla
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // nasıl bir veri göndereceğiz? bize gelen datayı string e cevirdik
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            table.innerHTML+=`
            <tr>
            <td><input type="text" class="form-control" id="first_name_${user.id}" value="${data.first_name}"></td>
            <td><input type="text" class="form-control" id="last_name_${user.id}" value="${data.last_name}"></td>
            <td><input type="text" class="form-control" id="email_${user.id}" value="${data.email}"></td>
            <td>
                <a href="" class="btn btn-warning" onclick="updateUser(${data.id})">update</a>
                <a href="" class="btn btn-danger" onclick="deleteUser(${data.id})">delete</a>
            </td>
        </tr>
            `
        }
        )
        .catch((error) =>{
            console.log("Error:", error)
        })
}

function updateUser(id){

console.log(id);
    let data={
        first_name:document.getElementById("first_name_"+id).value || "undefined",
        last_name:document.getElementById("last_name_"+id).value || "undefined",
        email:document.getElementById("email_"+id).value || "undefined",
    }

    fetch("https://reqres.in/api/users",
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(veri=>{console.log("user is update",veri)})
    .catch((error)=>console.log(error));

}

function deleteUser(id){

    fetch("https://reqres.in/api/users"+id,
    {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response=>console.log(response))
    .then(data=>{
        console.log("delete user",data);
    })
}