function filterInput() {

    let value = phoneInput.value.split('')
    filteredValue = []
    // console.log(value)
    for (let i=0; i<value.length;i++) {
        // console.log(value[i], pattern[i])
        if (value[i] >= '0' && value[i]<= '9' 
        // && pattern[i] == '#'
        )
        {
            filteredValue.push(value[i])
        } //else if ( value[i] == pattern[i] && pattern[i] != "#" ) {
        //     filteredValue.push(value[i])
        // } else{
        //     break
        // }
    }
    console.log(filteredValue)
    // phoneInput.value = filteredValue.join('')
}

let pattern = [ "#", "#", "#", "/", "2", "#", "#", "#", "-", "#", "#", "#", "-", "#", "#"   ]
let filteredValue = []

