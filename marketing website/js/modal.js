  function addRow(){
    $(".overflow").append("<div class='row '><div class='col-12 col-md-6'><div align='left' class='mt-4 content-text'><select class='form-control select-icon'><option></option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div><div class='col-9 col-md-4'><div align='left' class='mt-4 content-text'><input type='text' class='form-control' id='on_hand' /></div></div><div class='col-2' align='left'><div align='left' class='content-text'><img class='mt-3' src='../assets/img/icons8-cancel-filled.svg'></div></div></div>");
 }
$(document).on('click','#cross',function(){
    $(this).closest('.row').remove();
    console.log("Remove-Button pressed");
})