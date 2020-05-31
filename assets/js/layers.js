(function($){
    for(x=1;x<5;x++){
        tr = '<tr><td>'+x+'</td><td>Layer '+x+'</td><td><a href="#" class="btn btn-danger btn-circle btn-sm">';
        tr+= '<i class="fas fa-trash"></i>';
        tr+= '</a></td></tr>';
        $('.layers tbody').append(tr);
    }
}(jQuery))