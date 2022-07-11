$(function()
{
    $("#join_submit").click(function()
    {
        if (!confirm("회원 정보를 등록하시겠습니까?")) return;
        if(
            isEmpty($("#join_input_id").val()) ||
            isEmpty($("#join_input_pwd").val()) ||
            isEmpty($("#join_input_name").val()) ||
            isEmpty($("#join_input_email").val()) ||
            isEmpty($("#join_input_birth").val()) )
            {
                alert("닉네임을 제외한 내용에 공백이있으면 안됩니다.")
                return ;
            }
        let data = 
        {
            user_id:$("#join_input_id").val(),
            user_pwd:$("#join_input_pwd").val(),
            user_name:$("#join_input_name").val(),
            user_nickname:$("#join_input_nickname").val(),
            user_email:$("#join_input_email").val(),
            user_birth:new Date($("#join_input_birth").val()),
            user_grade:$(".join_input_grade input:checked").attr("data-seq"),
            user_status:$(".join_input_status input:checked").attr("data-seq")
        }
        $.ajax
        ({
            url:"/api/user/list",
            type:"put",
            data:JSON.stringify(data),
            contentType:"application/json",
            success:function(result)
            {
                alert(result.message)

            }
        })

            
    })
})