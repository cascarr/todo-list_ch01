/** 
 * Variable declarations (1)
*/
let addTaskBtn = document.querySelector('#push');
let newTaskField = document.querySelector('#newtask input');
let tasksStore = document.querySelector('#tasks');

// listening for the click event on the addTaskBtn (2)
addTaskBtn.onclick = () => {

    // checking if the input field is empty (3)
    if (newTaskField.value.length == 0) {
        alert('Please Enter a Task'); // do this

    } else { // And if the input field isn't empty, do the below (4)

        tasksStore.innerHTML += `
          <div class="task">
            <span id="taskname">
              ${newTaskField.value}
            </span>
            <button class="delete">
              Delete
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        `;

        newTaskField.value = ''; // clearing the input field's data (5)

        let deleteBtnArr = document.querySelectorAll('.task .delete'); // grabs the delete btns (6)

        for (let i = 0; i < deleteBtnArr.length; i++) { // loops through the elements of the btns arr (7)

            // and listen for the click event on the very btn we ll like to delete  (8)
            deleteBtnArr[i].onclick = function() {
                
                this.parentNode.remove();
            };
        }
    }

};

