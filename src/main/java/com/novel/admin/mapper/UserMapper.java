package com.novel.admin.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.novel.admin.data.AdminInfoVO;
import com.novel.admin.data.UserInfoVO;

@Mapper
public interface UserMapper {
    //어드민
    public AdminInfoVO selectAdminInfo(String id, String pwd) ;
    public void insertAdminInfo(AdminInfoVO data) ;
    public void updateAdminInfo(AdminInfoVO data) ;
    public void deleteAdminInfo(Integer seq) ;
    public List<AdminInfoVO> selectAdminInfoList(Integer page, String keyword) ;


    //유저
    public void insertUserInfo(UserInfoVO data) ;
    public void updateUserInfo(UserInfoVO data) ;
    public List<UserInfoVO> selectUserInfoList(Integer page, String keyword, Integer status) ;
}
