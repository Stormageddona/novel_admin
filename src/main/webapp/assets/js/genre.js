
$(function()
{
    $(".modify_area").hide()

    $.ajax
    ({
        url:"/api/novel/genre", type:"get",
        success:function(result)
        {
            console.log(result.message)
            $(".list_area").html(""); 
            for (let i = 0; i < result.list.length;i++)
            {
                let tag = 
                    '<div class="genre_area" data-seq="'+result.list[i].gen_seq+'">' +
                    '<p>'+result.list[i].gen_name+'</p>' +
                    '<button class="genre_modify" data-seq="'+i+'">수정</button>' +
                    '<button class="genre_delete" data-seq="'+i+'">삭제</button>' +
                    '</div>' ;
                $(".list_area").append(tag); 
            }
            $(".genre_modify").click(function()
            {
                let i =$(this).attr("data-seq")
                $(".modify_area").show()
                $("#input_modify").val(result.list[i].gen_name)
                $("#modify_submit").attr("data-seq",result.list[i].gen_seq)
            })
        }
    })
    
    $("#genre_add").click(function()
    {
        $.ajax
        ({
            url:"/api/novel/genre?name="+$("#input_genre").val(), type:"put",
            success:function(result)
            {
                alert(result.message) ;
                location.reload() ;
            } 
        })
    })

    $("#modify_submit").click(function()
    {
        $.ajax
        ({
            url:"/api/novel/genre?seq="+ $(this).attr("data-seq")+"&name="+$("#input_modify").val(), type:"patch",
            success:function(result)
            {
                alert(result.message) ;
                location.reload() ;
            } 
        })
    })

    $("#modify_cancel").click(function()
    {
        $(".modify_area").hide()
        $("#input_modify").val("")
        $("#modify_submit").attr("data-seq",null)
    })

})
