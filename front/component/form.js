const name = document.getElementById('name')
const firstName = document.getElementById('firstName')
const btn = document.getElementById('btn')

        const postData = async (user) => {
            let response = await fetch('http://localhost:3000/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            })
        }

        function compileForm(name, firstName) {
            const data = {
                name: name,
                firstName: firstName
            }

            postData(data)
        }

        btn.addEventListener('click', (e) => {
            if(!name.value || !firstName.value) return alert('Надо заполнить все поля')
            compileForm(name.value, firstName.value)
        })