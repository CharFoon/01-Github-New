// Create event listener to enter items below
$("#enter").on("click", function() {
    var task = $("#todoItem").val();
    $("#todoList").append("<div class="inputContainer">
    <input type="input" id="todoItem">
    <button id="enter"><i class="fas fa-pencil-alt"></i></button>
  </div>")

}
// Create event listener to delete items below

// Create event listener to toggle 
