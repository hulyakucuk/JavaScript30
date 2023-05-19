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
						<td><input type="text" class="form-control" id="" value="${user.first_name}"></td>
						<td><input type="text" class="form-control" id="" value="${user.last_name}"></td>
						<td><input type="text" class="form-control" id="" value="${user.email}"></td>
						<td>
							<a href="" class="btn btn-warning" onclick="updateUser()${user.id}">refresh</a>
							<a href="" class="btn btn-danger" onclick="deleteUser()${user.id}">delete</a>
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
            <td><input type="text" class="form-control" id="" value="${data.first_name}"></td>
            <td><input type="text" class="form-control" id="" value="${data.last_name}"></td>
            <td><input type="text" class="form-control" id="" value="${data.email}"></td>
            <td>
                <a href="" class="btn btn-warning" onclick="updateUser()${data.id}">refresh</a>
                <a href="" class="btn btn-danger" onclick="deleteUser()${data.id}">delete</a>
            </td>
        </tr>
            `
        }
        )
        .catch((error) =>{
            console.log("Error:", error)
        })
}