$(function()
{

    $("#login").click(function()
    {
        $.ajax
        ({
            url:"/api/admin/login?id="+$("#id_input").val()+"&pwd="+$("#pwd_input").val(),
            type:"get",
            success:function(result)
            {
                alert(result.message) ;
                if (!result.status) return ;
                location.href="/user/list"
            }
        })
    })
})