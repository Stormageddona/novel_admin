package com.novel.admin.api.user;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.novel.admin.data.UserInfoVO;
import com.novel.admin.mapper.UserMapper;
import com.novel.admin.util.AESAlgorithm;

@RestController
@RequestMapping("/api/user")
public class UserAPIController {
    @Autowired UserMapper u_mapper ;

    @GetMapping("/list")
    public Map<String,Object> getUserData(@RequestParam @Nullable Integer page,@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer status) throws Exception
    {
        Map<String,Object> map =new LinkedHashMap<String,Object>() ;
        if (page == null) page = 1 ;
        List<UserInfoVO> list =  u_mapper.selectUserInfoList((page-1)*15, keyword, status) ;
        for (UserInfoVO i : list)
        {
            i.setUser_pwd(AESAlgorithm.Decrypt(i.getUser_pwd()));
        }
        map.put("list",list);
        map.put("status",true) ;
        map.put("message","회원정보 조회가 완료되었습니다.") ;
        return map ;
    }


    @PutMapping("/list")
    public Map<String,Object> putUserData(@RequestBody UserInfoVO data) throws Exception
    {
        Map<String,Object> map =new LinkedHashMap<String,Object>() ;

        if (data.getUser_id() == null||
        data.getUser_pwd() == null||
        data.getUser_birth() == null||
        data.getUser_email() == null||
        data.getUser_name() == null)
        {
            map.put("status",false) ;
            map.put("message","회원정보 등록이 실패하였습니다.") ;
            return map ;
        }
        data.setUser_pwd(AESAlgorithm.Encrypt(data.getUser_pwd()));
        u_mapper.insertUserInfo(data);
        map.put("status",true) ;
        map.put("message","회원정보 등록이 완료되었습니다.") ;
        return map ;
    }

    @PatchMapping("/list")
    public Map<String,Object> patchUserData(@RequestBody UserInfoVO data) throws Exception
    {
        Map<String,Object> map =new LinkedHashMap<String,Object>() ;
        if (data.getUser_pwd() == null||
        data.getUser_birth() == null||
        data.getUser_email() == null||
        data.getUser_name() == null)
        {
            map.put("status",false) ;
            map.put("message","회원정보 수정이 실패하였습니다.") ;
            return map ;
        }
        if (data.getUser_nickname() == "")  data.setUser_nickname(null) ;
        data.setUser_pwd(AESAlgorithm.Encrypt(data.getUser_pwd()));
        u_mapper.updateUserInfo(data);
        map.put("status",true) ;
        map.put("message","회원정보 수정이 완료되었습니다.") ;
        return map ;
    }

    
    
}
