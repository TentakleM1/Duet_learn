const add = document.getElementById('add')
const click = document.getElementById('click')

click.addEventListener('click', (e) => {
    const value = ''
    
    if(!add.value) console.log('not value')

    value = add.value

    fetchPost(value)

})

 function fetchPost(data) {
    console.log(JSON.stringify(data))
    // const res = await fetch('http://localhost:3000/data', {
    //     method: 'POST',
    //     body: JSON.stringify(data)
    // })

    // let result = await res.json()
}