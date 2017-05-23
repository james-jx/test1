var _cy_lg, MAX_TRYS=60, _ix_flag=0, _ix_lg=0;
var _cy_flag = setInterval(function(){
  _ix_flag++;
  if(_ix_flag>MAX_TRYS){
    clearInterval(_cy_flag);
  }

  var _head = document.getElementsByTagName("head")[0].innerHTML;
  if(_head.indexOf('http://changyan.sohu.com')>-1){
    _auto();
    clearInterval(_cy_flag);
  }
}, 1000);

function _auto(){
  _cy_lg = setInterval(lg_cy, 1000);
}

function lg_cy(){
  _ix_lg++;
  if(_ix_lg>MAX_TRYS){
    clearInterval(_ix_lg);
  }

  if($('#cy_u_i').length > 0){
    var cyui=$('#cy_u_i').data('ui');
    console.log(cyui);
    try{
      $.ajax({
          url: $$data.get("config:api") + "api/2/login/isv",
          cache: false,
          dataType: "jsonp",
          jsonp: "callback",
          data: JSON.parse(cyui),
          success: function(datas) {
            clearInterval(_cy_lg);
            $$data.set("userInfo:changyan", datas);
          }
      });
    }catch(ex){
      console.log(ex);
      clearInterval(_cy_lg);
    }
  }
}
