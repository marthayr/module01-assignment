let clark = 'Clark Kent'
let bruce = 'Bruce Wayne'
let diana = 'Diana Prince'
let barry = 'Barry Allen'
let ollie = 'Oliver Queen'
let dinah = 'Dinah Lance'
const element = (
    <ul style={{'color': 'blue', 'fontSize': '24px'}}>
        <li>{clark}</li>
        <li>{bruce}</li>
        <li>{diana}</li>
        <li>{barry}</li>
        <li>{ollie}</li>
        <li>{dinah}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))