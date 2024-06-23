// const select = document.getElementById('category-select');
// const displayText = document.getElementById('display-text');
// const totalDisplay = document.getElementById('total-display');

// let total = 0;

// form.addEventListener('change', (e) => {
//   const selectedCategory = e.target.value;
//   const textToDisplay = '';

//   switch (selectedCategory) {
//     case 'cat1':
//       textToDisplay = 'You chose Category 1!';
//       total += 1; // Increment the total by 1
//       break;
//     case 'cat2':
//       textToDisplay = 'You chose Category 2!';
//       total += 2; // Increment the total by 2
//       break;
//     case 'cat3':
//       textToDisplay = 'You chose Category 3!';
//       total += 3; // Increment the total by 3
//       break;
//     default:
//       textToDisplay = '';
//       total = 0; // Reset the total to 0
//   }

//   displayText.innerText = textToDisplay;
//   displayText.style.display = 'block';

//   totalDisplay.innerText = `Total: ${total}`;
//   totalDisplay.style.display = 'block';
// });




// document.getElementById('myForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent form submission
    
    // Get selected option and input value
    // var selectedOption = document.getElementById('option').value;

    // var inputValue1 = document.getElementById('option1').value;
    // var inputValue2= document.getElementById('option2').value;
    // var inputValue3 = document.getElementById('option3').value;
    // var inputValue4 = document.getElementById('option4').value;
    // var inputValue5 = document.getElementById('option5').value;
    
    // Store in localStorage or send to server
    // localStorage.setItem('selectedOption', selectedOption);

    // localStorage.setItem('inputValue1', inputValue1);
    // localStorage.setItem('inputValue2', inputValue2);
    // localStorage.setItem('inputValue3', inputValue3);
    // localStorage.setItem('inputValue4', inputValue4);
    // localStorage.setItem('inputValue5', inputValue5);
    

    // // To retrive from Localsorage
    // var selectedOption = localStorage.getItem('selectedOption');
    // var inputValue11 = localStorage.getItem('inputValue1');
    // var inputValue22 = localStorage.getItem('inputValue2');
    // var inputValue33 = localStorage.getItem('inputValue3');
    // var inputValue44 = localStorage.getItem('inputValue4');
    // var inputValue55 = localStorage.getItem('inputValue5');

    //Display the retrieved value
    // var displayDataDive = document.getElementById('displayData');
    // selectedOption.innerHTML += '<p>Input Value: ' + '$300' + '</p>';
    // inputValue1.innerHTML = '<p>check: ' + '$400' + '</p>';
    // inputValue2.innerHTML += '<p>Input Value: ' + '$250' + '</p>';
    // inputValue3.innerHTML += '<p>Input Value: ' + '$700' + '</p>';
    // inputValue4.innerHTML += '<p>Input Value: ' + '$500'+ '</p>';
    // inputValue5.innerHTML += '<p>Input Value: ' + '$500'+ '</p>';
    // display.textContent = `You entered: ${inputValue1.value}`;
    //s


    // Redirect to submitted page
    //window.location.href = 'invoice.html';
  //});







  const display = document.getElementById('display');
        //get my value out of LocalStorage
        const selectValue = localStorage.getItem('selectValue');
        const select1Value = localStorage.getItem('select1Value');
        const areaTextValue = localStorage.getItem('areaTextValue');
        const select2Value = localStorage.getItem('select2Value');
        const inputValue = localStorage.getItem('inputValue');
        const areaText1 = localStorage.getItem('areaText1');
        

 //display the values
 display.innerHTML = `
        <p>Input value: ${selectValue}</p>
        <p>Selected option: ${select1Value}</p>
        <p>Input value: ${areaTextValue}</p>
    <p>Selected option: ${select2Value}</p>
    <p>Input value: ${inputValue}</p>
    <p>Selected option: ${areaText1}</p>
        `;       
