$(function()
{
    $(".join_area").hide()
    $(".modify_area").hide()

    // 리스트 조회
    $.ajax
    ({
        url:"/api/admin/list", type:"get",
        success:function(result)
        {
            console.log(result.message);
            $(".admin_list tbody").html("") ;
            for(let i = 0; i < result.list.length;i++)
            {
                let tag = 
                    '<tr>' +
                        '<td>'+ result.list[i].admin_seq +'</td>'+
                        '<td>'+ result.list[i].admin_id +'</td>'+
                        '<td>'+ result.list[i].admin_nickname+'</td>'+
                        '<td>'+ result.list[i].admin_grade +'</td>'+
                        '<td><button class="modify_btn" data-seq="'+ i +'">정보 수정</button>' +
                        '<button class="delete_btn" data-seq="'+ result.list[i].admin_seq +'">관리자 삭제</button>' +
                        '</td>'+
                    '</tr>'
                $(".admin_list tbody").append(tag) ;
            }
            // 관리자 정보 수정 자료 입력
            $(".modify_btn").click(function()
            {
                $(".modify_area").show()
                let i = $(this).attr("data-seq")
                $("#modify_input_id").val(result.list[i].admin_id).prop("disabled",true);
                $("#modify_input_pwd").val(result.list[i].admin_pwd);
                $("#modify_input_nickname").val(result.list[i].admin_nickname);
                $("#modify_grade_label1").attr("checked",null);
                $("#modify_grade_label2").attr("checked",null);
                $("#modify_grade_label"+result.list[i].admin_grade).attr("checked",true);
                $("#modify_submit").attr("data-seq",null)
                $("#modify_submit").attr("data-seq",result.list[i].admin_seq)
            })
            // 관리자 삭제
            $(".delete_btn").click(function()
            {
                if (!confirm("관리자 정보를 삭제하시겠습니까?")) return;
                
                $.ajax
                ({
                    url:"/api/admin/list?seq="+$(this).attr("data-seq"),
                    type:"delete",
                    success:function(result)
                    {
                        alert(result.message)
                        location.reload()
                    }
                })
            })
        }
    })


    // 관리자 정보 수정
    $("#modify_submit").click(function()
    {
        if (!confirm("관리자 정보를 수정하시겠습니까?")) return;
        if(
            isEmpty($("#modify_input_id").val()) ||
            isEmpty($("#modify_input_nickname").val()) ||
            isEmpty($("#modify_input_pwd").val())
            )
            {
                alert("내용에 공백이있으면 안됩니다.")
                return ;
            }
        let data = 
        {
            admin_seq:$(this).attr("data-seq"),
            admin_id:$("#modify_input_id").val(),
            admin_pwd:$("#modify_input_pwd").val(),
            admin_nickname:$("#modify_input_nickname").val(),
            admin_grade:$(".modify_input_grade input:checked").attr("data-seq"),
        }
        $.ajax
        ({
            url:"/api/admin/list",
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
        $("#modify_input_id").val("")
        $("#modify_input_pwd").val("");
        $("#modify_input_nickname").val("");
        $("#modify_grade_label1").attr("checked",null);
        $("#modify_grade_label2").attr("checked",null);
        $("#modify_status_label1").attr("checked",null);
        $("#modify_status_label2").attr("checked",null);
        $("#modify_status_label3").attr("checked",null);
        $("#modify_submit").attr("data-seq",null)
    })




    // 관리자 등록
    $(".admin_reg").click(function()
    {
        $(".join_area").show()
    })
    $("#join_cancel").click(function()
    {
        $(".join_area").hide()
    })

    $("#join_submit").click(function()
    {
        if (!confirm("관리자 정보를 등록하시겠습니까?")) return;
        if(
            isEmpty($("#join_input_id").val()) ||
            isEmpty($("#join_input_pwd").val()) ||
            isEmpty($("#join_input_nickname").val()))
            {
                alert("내용에 공백이있으면 안됩니다.")
                return ;
            }
        let data = 
        {
            admin_id:$("#join_input_id").val(),
            admin_pwd:$("#join_input_pwd").val(),
            admin_nickname:$("#join_input_nickname").val(),
            admin_grade:$(".join_input_grade input:checked").attr("data-seq"),
        }
        $.ajax
        ({
            url:"/api/admin/list",
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