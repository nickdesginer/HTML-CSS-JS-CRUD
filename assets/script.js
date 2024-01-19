var allData = [];
var editId = "";

function startPage() {
    if (allData.length == 0) {
        document.getElementById('lists').style.display = "none";
    } else {
        document.getElementById('lists').style.display = "block";
    }
}

function addData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Validation
    if (name == "") {
        document.getElementById('name').style.borderColor = "red";
        document.getElementById('email').style.borderColor = "rgba(55, 65, 81, 1)";
        document.getElementById('phone').style.borderColor = "rgba(55, 65, 81, 1)";
    } else if (email == "") {
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('name').style.borderColor = "rgba(55, 65, 81, 1)";
        document.getElementById('phone').style.borderColor = "rgba(55, 65, 81, 1)";
    } else if (phone == "") {
        document.getElementById('phone').style.borderColor = "red";
        document.getElementById('name').style.borderColor = "rgba(55, 65, 81, 1)";
        document.getElementById('email').style.borderColor = "rgba(55, 65, 81, 1)";
    } else {
        const obj = { name, email, phone };
        allData.push(obj);
        listData(allData);
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('Successfully').style.display = "block";
        setTimeout(() => {
            document.getElementById('Successfully').style.display = "none";
        }, 3000)
    }
}

function deleteData(index) {
    const deletedData = allData.filter((_, i) => i != index);
    allData = deletedData;
    listData(allData);
    document.getElementById('Error').style.display = "block";
    setTimeout(() => {
        document.getElementById('Error').style.display = "none";
    }, 3000)
}

function editData(id) {
    const editData = allData.filter((_, i) => i == id)[0];
    document.getElementById('name').value = editData.name;
    document.getElementById('email').value = editData.email;
    document.getElementById('phone').value = editData.phone;
    editId = id;
    document.getElementById('title').innerHTML = "Edit";
    document.getElementById('sign').style.display = "none";
    document.getElementById('update').style.display = "block";
}

function updateData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Validation
    if (name == "") {
        document.getElementById('name').style.borderColor = "red";
        document.getElementById('email').style.borderColor = "rgba(55, 65, 81, 1)";
        document.getElementById('phone').style.borderColor = "rgba(55, 65, 81, 1)";
    } else if (email == "") {
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('name').style.borderColor = "rgba(55, 65, 81, 1)";
        document.getElementById('phone').style.borderColor = "rgba(55, 65, 81, 1)";
    } else if (phone == "") {
        document.getElementById('phone').style.borderColor = "red";
        document.getElementById('name').style.borderColor = "rgba(55, 65, 81, 1)";
        document.getElementById('email').style.borderColor = "rgba(55, 65, 81, 1)";
    } else {
        document.getElementById('name').style.borderColor = "rgba(55, 65, 81, 1)";
        document.getElementById('email').style.borderColor = "rgba(55, 65, 81, 1)";
        document.getElementById('phone').style.borderColor = "rgba(55, 65, 81, 1)";
        const obj = { name, email, phone };
        allData[editId] = obj;
        listData(allData);
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('title').innerHTML = "Create";
        document.getElementById('sign').style.display = "block";
        document.getElementById('update').style.display = "none";
        document.getElementById('Warn').style.display = "block";
        setTimeout(() => {
            document.getElementById('Warn').style.display = "none";
        }, 3000)
    }
}

function listData(list) {
    startPage()
    let li = "";
    list.map((item, index) => {
        var single = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td class="table-edit" onclick="editData(${index})">
                    <button>Edit</button>
                </td>
                <td class="table-delete" onclick="deleteData(${index})">
                    <button>Delete</button>
                </td>
            `;
        li += single;
    })
    document.getElementById('listData').innerHTML = li;
}