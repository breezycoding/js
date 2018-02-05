var ui_controller = (function(){
    var dom_strings = {
        container_p: ".container p"
    }
    return{
       dom_strings: dom_strings 
    }
})();

var ajax_request = (function(ui){
    //https://maps.googleapis.com/maps/api/geocode/json?address=menzyland-mojon&key=AIzaSyBGVGWgO8YZOEKCo_sBQ0ajF_Ea6Y3IY18
    var dom = ui.dom_strings;
    
    var get_parsed_json = function(url){
        var temp_data, passed_data;
        temp_data = $.ajax({
            url:url,
            type:"get",
            dataType:"json",
            async:false
        }).responseText;
        passed_data = JSON.parse(temp_data);
        return passed_data;
    }
    
    var ajax_apply = function(url){
        $.ajax({
            url:url,
            type:"get",
            data:{data:data},
            dataType:"json",
            async:false,
            success:function(data, status){
                //console.log(data);
                //document.querySelector(dom.container_p).innerHTML = data.results[0].formatted_address;
            },
            error:function(jqhr, status){
                //console.log("something wend wrong");
            }
        });
    }
    
    var using_s_get = function(url){
        $.get(url, {name:"ip"}, function(data, status){
            //console.log(status);
            console.log(name);
        });
    }
    
    return{
        get_parsed_json: get_parsed_json,
        ajax_apply: ajax_apply,
        using_s_get: using_s_get
    }
})(ui_controller);

ajax_request.using_s_get("https://maps.googleapis.com/maps/api/geocode/json?address=menzyland-mojon&key=AIzaSyBGVGWgO8YZOEKCo_sBQ0ajF_Ea6Y3IY18");