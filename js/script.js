$(document).ready(() => {
  let addButton = $('.add-button');
  let field = $('.add-input');
  let tasks = $('.tasks');

  // Add Task
  addButton.on('click', () => {
    let elem = `<li class="task">
            <div class="task-checked col-1">
              <input type="checkbox" />
            </div>
            <div class="task-text col-2">${field.val()}</div>
            <div class="task-remove col-3"></div>
          </li>`;
    tasks.append(elem);
    field.val('');
  });

  // Remove Task
  tasks.on('click', '.task-remove', function() {
    $(this)
      .parent()
      .remove();
  });

  // Checked
  tasks.on('change', '.task-checked input', function() {
    $(this)
      .parent()
      .next()
      .toggleClass('checked');
  });

  // Sortable Task
  $(function() {
    $('#sortable').sortable();
    $('#sortable').disableSelection();
  });
});
