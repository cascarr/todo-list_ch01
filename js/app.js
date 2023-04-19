/** 
 * variable declarations
*/
document.addEventListener('DOMContentLoaded', () => {

    let addTaskBtn = document.querySelector('.newTask button');

    let inputField = document.querySelector('.newTask input');

    let tasksStore = document.querySelector('.tasks');

    addTaskBtn.addEventListener('click', () => {
        
        if (inputField.value.length == 0) {

            alert('Enter a Task!!');

        } else {

            tasksStore.innerHTML += `
              <div class="task">
                <span id="oneTask">
                 ${inputField.value}
                </span>
                <button class="delete">Delete</button>
              </div><br/>
            `;

            inputField.value = '';

            let deleteTaskBtn = document.querySelectorAll('.delete');

            for(i = 0; i < deleteTaskBtn.length; i++) {
                deleteTaskBtn[i].addEventListener('click', function() {
                    this.parentNode.remove();
                });
            }

        }
    });

});