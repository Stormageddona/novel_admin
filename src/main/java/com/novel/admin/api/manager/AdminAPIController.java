package com.novel.admin.api.manager;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.novel.admin.data.AdminInfoVO;
import com.novel.admin.mapper.UserMapper;
import com.novel.admin.util.AESAlgorithm;

@RestController
@RequestMapping("/api/admin")
public class AdminAPIController {
    @Autowired UserMapper u_mapper ;
    @GetMapping("/login")
    public Map<String,Object> getLogin(@RequestParam String id, @RequestParam String pwd,HttpSession session) throws Exception
    {
        Map<String,Object> map =new LinkedHashMap<String,Object>() ;
        pwd = AESAlgorithm.Encrypt(pwd) ;
        AdminInfoVO user = u_mapper.selectAdminInfo(id, pwd) ;
        if (user == null)
        {
            map.put("status",false) ;
            map.put("message","아이디나 비밀번호가 맞지않습니다.") ;
            return map ;
        }
        map.put("status",true) ;
        map.put("message","환영합니다. "+ user.getAdmin_nickname()+" 님") ;
        session.setAttribute("user", user);
        return map ;
    }
}
