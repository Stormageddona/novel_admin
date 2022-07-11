package com.novel.admin.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.novel.admin.data.AdminInfoVO;
import com.novel.admin.data.UserInfoVO;

@Mapper
public interface UserMapper {
    //어드민
    public AdminInfoVO selectAdminInfo(String id, String pwd) ;


    //유저
    public void insertUserInfo(UserInfoVO data) ;
}
