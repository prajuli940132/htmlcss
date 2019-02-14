function calender(){
  $('.ui-widget-content a').map(function(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
]
     prev_dates = $.trim($(this).text())
     curr_date = (new Date).getDate()
     curr_month = (new Date).getMonth()
     month = $('.ui-datepicker-month').text()
     prev_month = monthNames[curr_month]
     if(prev_dates < curr_date && month == prev_month)
      $(this).css("color","grey")

     return $.trim($(this).text());
  })
}

window.setInterval(calender,1)

$(function(){
    $("#startdate").datepicker({
        dateFormat: "dd-mm-yy"
    });
    $("#enddate").datepicker({
        dateFormat: "dd-mm-yy"
    });
});