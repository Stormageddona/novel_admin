package com.novel.admin.api.user;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.novel.admin.data.UserInfoVO;
import com.novel.admin.mapper.UserMapper;
import com.novel.admin.util.AESAlgorithm;

@RestController
@RequestMapping("/api/user")
public class UserAPIController {
    @Autowired UserMapper u_mapper ;
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

    
    
}
