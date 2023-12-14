const value = document.getElementById('form')
        const btn = document.getElementById('btn')

        const postData = async (value) => {
            let response = await fetch('http://localhost:3000/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({data: value})
            })

        }

        btn.addEventListener('click', (e) => {
            if(!value.value) return console.log('not value')
            postData(value.value)
        })