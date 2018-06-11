
//jQuery('div#container').html( "working" );

var i;
var save = [];
var users;
var len;
var s_table;
var s_data;


        



jQuery.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'http://localhost/dashboard/js/student.json',
    // data:{'uname':jQuery('uname').val()}
    success: function (s_data) //callback function and stores it as s_data"
    {
        localStorage.a_save = JSON.stringify(s_data);
        users = s_data;
        tbl(s_data,10);
        
    },



    error: function (s_err) {
        console.log(s_err);
    }


});
function tbl(users,nrows)
{
    console.log(nrows,typeof(nrows));
    len = nrows;
     s_table = `<table id="t1" border="1" style="border-collapse:collapse;">
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Current Class</th>
                            <th>Address</th>
                        </tr>`;

        for (i = 0; i < len; i++) {
            
            s_table += `
                        <tr id="tr_${[i]}">
                            <td>${users[i].firstname}</td>  
                            <td>${users[i].lastname}</td> 
                            <td>${users[i].email}</td>         
                            <td>${users[i].location}</td>
                            <td>${users[i].phone}</td>
                            <td>${users[i].current_class}</td>
                            <td>${users[i].address}</td>
                            <td>
                                <button id="btnv_${[i]}">More Details</button>
                                <button id="btne_${[i]}">Edit</button>
                                <button id="btnd_${[i]}">Delete</button>
                                 

                            </td>
                        </tr>

                     `;
        }
        s_table += '</table>';
        jQuery('div#tableid').html(s_table);

        var s_dropdown = `  <p>Number of Records:</p>
                            <select id="dropdown" >
                            No of records:
                            <option value="10" id="opt_10">10</option>
                            <option value="20" id="opt_20">20</option>
                            <option value="50" id="opt_50">50</option>
                            <option value="100" id="opt_100">100</option>
                            `;

        s_dropdown += '</select>';
        jQuery('div#drophtml').html(s_dropdown);
        }


jQuery(document).on('change', function () 
    {
    var optval = jQuery("#dropdown option:selected").text();
    var x = parseInt(optval);   
    
    tbl(users,x);
    });




jQuery(document).on('click', 'button[id^=btnv_]', function () {

    $('.vieww').remove();
        
    var tr_id = jQuery(this).attr('id').replace('btnv_', 'tr_');
    tr_details_id = tr_id.replace('tr_', 'tr_details_');

    jQuery('#' + tr_id).after(`  
                                <tr class="vieww">
                                <th colspan="3">Gender</th>
                                <th colspan="3">Previous Employer</th>
                                </tr>
                                <tr class="vieww" id="${tr_details_id}">
                                <td colspan="3" > ${users[i].gender}</td>
                                <td colspan="3"> ${users[i].previous_employer}</td>      
                                </tr>
                                 `);

});

jQuery(document).on('click', 'button[id^=btnd_]', function () {

    //console.log('button[id^=btnd_]');
    $('.vieww').remove();
    var tr_id = jQuery(this).attr('id').replace('btnd_', 'tr_');
    tr_details_id = tr_id.replace('tr_', 'tr_details_');

    jQuery('#' + tr_id).remove();

});





