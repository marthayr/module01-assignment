let clark = 'Clark Kent';
let bruce = 'Bruce Wayne';
let diana = 'Diana Prince';
let barry = 'Barry Allen';
let ollie = 'Oliver Queen';
let dinah = 'Dinah Lance';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, clark), /*#__PURE__*/React.createElement("li", null, bruce), /*#__PURE__*/React.createElement("li", null, diana), /*#__PURE__*/React.createElement("li", null, barry), /*#__PURE__*/React.createElement("li", null, ollie), /*#__PURE__*/React.createElement("li", null, dinah));
ReactDOM.render(element, document.getElementById('content'));