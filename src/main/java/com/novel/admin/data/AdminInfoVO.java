package com.novel.admin.data;

import lombok.Data;

@Data
public class AdminInfoVO {
    private Integer admin_seq;
    private String admin_id;
    private String admin_pwd ;
    private String admin_nickname;
    private Integer admin_grade;
}
