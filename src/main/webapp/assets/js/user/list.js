$(function()
{
    $(".join_area").hide()
    $(".modify_area").hide()

    // 리스트 조회
    $.ajax
    ({
        url:"/api/user/list", type:"get",
        success:function(result)
        {
            console.log(result.message);
            $(".user_list tbody").html("") ;
            let temp = null
            for(let i = 0; i < result.list.length;i++)
            {
                if (result.list[i].user_nickname != null) temp = '('+ result.list[i].user_nickname +')' 
                else temp = ''
                let tag = 
                    '<tr>' +
                        '<td>'+ result.list[i].user_seq +'</td>'+
                        '<td>'+ result.list[i].user_id +'</td>'+
                        '<td>'+ result.list[i].user_name+temp+ 
                        '</td>' +
                        '<td>'+ result.list[i].user_email +'</td>'+
                        '<td>'+ result.list[i].user_birth +'</td>'+
                        '<td>'+ result.list[i].user_grade +'</td>'+
                        '<td>'+ result.list[i].user_status +'</td>'+
                        '<td><button class="modify_btn" data-seq="'+ i +'">정보 수정</button>' +
                        '</td>'+
                    '</tr>'
                $(".user_list tbody").append(tag) ;
            }
            // 회원 정보 수정 자료 입력
            $(".modify_btn").click(function()
            {
                $(".modify_area").show()
                let i = $(this).attr("data-seq")
                let split = result.list[i].user_birth.split("T")
                $("#modify_input_id").val(result.list[i].user_id).prop("disabled",true);
                $("#modify_input_pwd").val(result.list[i].user_pwd);
                $("#modify_input_name").val(result.list[i].user_name);
                $("#modify_input_nickname").val(result.list[i].user_nickname);
                $("#modify_input_email").val(result.list[i].user_email);
                $("#modify_input_birth").val(split[0]);
                $("#modify_grade_label1").attr("checked",null);
                $("#modify_grade_label2").attr("checked",null);
                $("#modify_grade_label"+result.list[i].user_grade).attr("checked",true);
                $("#modify_status_label1").attr("checked",null);
                $("#modify_status_label2").attr("checked",null);
                $("#modify_status_label3").attr("checked",null);
                $("#modify_status_label"+result.list[i].user_status).attr("checked",true);
                $("#modify_submit").attr("data-seq",null)
                $("#modify_submit").attr("data-seq",result.list[i].user_seq)
            })
        }
    })


    // 회원 정보 수정
    $("#modify_submit").click(function()
    {
        if (!confirm("회원 정보를 수정하시겠습니까?")) return;
        if(
            isEmpty($("#modify_input_id").val()) ||
            isEmpty($("#modify_input_pwd").val()) ||
            isEmpty($("#modify_input_name").val()) ||
            isEmpty($("#modify_input_email").val()) ||
            isEmpty($("#modify_input_birth").val()) )
            {
                alert("닉네임을 제외한 내용에 공백이있으면 안됩니다.")
                return ;
            }
        let data = 
        {
            user_seq:$(this).attr("data-seq"),
            user_pwd:$("#modify_input_pwd").val(),
            user_name:$("#modify_input_name").val(),
            user_nickname:$("#modify_input_nickname").val(),
            user_email:$("#modify_input_email").val(),
            user_birth:new Date($("#modify_input_birth").val()),
            user_grade:$(".modify_input_grade input:checked").attr("data-seq"),
            user_status:$(".modify_input_status input:checked").attr("data-seq")
        }
        $.ajax
        ({
            url:"/api/user/list",
            type:"patch",
            data:JSON.stringify(data),
            contentType:"application/json",
            success:function(result)
            {
                alert(result.message)
                location.reload()
                
            }
        })
    })

    $("#modify_cancel").click(function()
    {
        $(".modify_area").hide()
        $("#modify_input_id").val("").prop("disabled",true);
        $("#modify_input_pwd").val("");
        $("#modify_input_name").val("");
        $("#modify_input_nickname").val("");
        $("#modify_input_email").val("");
        $("#modify_input_birth").val("");
        $("#modify_grade_label1").attr("checked",null);
        $("#modify_grade_label2").attr("checked",null);
        $("#modify_status_label1").attr("checked",null);
        $("#modify_status_label2").attr("checked",null);
        $("#modify_status_label3").attr("checked",null);
        $("#modify_submit").attr("data-seq",null)
    })

    // 회원 등록
    $(".user_reg").click(function()
    {
        $(".join_area").show()
    })
    $("#join_cancel").click(function()
    {
        $(".join_area").hide()
    })

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
                location.reload()
            }
        })

            
    })
})